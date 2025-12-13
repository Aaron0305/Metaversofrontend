'use client';

import { useState, useEffect, FormEvent, ChangeEvent, ReactNode } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { resetPassword } from '@/services/resetService';

const EyeIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
    </svg>
);

const EyeSlashIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
    </svg>
);

const CheckIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
    </svg>
);

interface ResetPasswordFormProps {
    token: string;
}

interface FormData {
    password: string;
    confirmPassword: string;
}

interface FieldErrors {
    password?: string;
    confirmPassword?: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
    const [formData, setFormData] = useState<FormData>({ password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
    const [passwordStrength, setPasswordStrength] = useState({ level: 0, text: '' });

    useEffect(() => {
        const password = formData.password;
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        let text = '';
        if (password.length === 0) text = '';
        else if (strength <= 2) text = 'Débil';
        else if (strength <= 3) text = 'Media';
        else text = 'Fuerte';

        setPasswordStrength({ level: strength, text });
    }, [formData.password]);

    const validateField = (name: string, value: string): void => {
        const errors = { ...fieldErrors };
        if (name === 'password') {
            if (value.length < 8) errors.password = 'Mínimo 8 caracteres';
            else if (!/[a-z]/.test(value)) errors.password = 'Debe contener una letra minúscula';
            else if (!/[A-Z]/.test(value)) errors.password = 'Debe contener una letra mayúscula';
            else if (!/[0-9]/.test(value)) errors.password = 'Debe contener un número';
            else delete errors.password;
        }
        if (name === 'confirmPassword' || (name === 'password' && formData.confirmPassword)) {
            const confirmValue = name === 'confirmPassword' ? value : formData.confirmPassword;
            const passValue = name === 'password' ? value : formData.password;
            if (confirmValue !== passValue) errors.confirmPassword = 'Las contraseñas no coinciden';
            else delete errors.confirmPassword;
        }
        setFieldErrors(errors);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        validateField(name, value);
        setError('');
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        validateField('password', formData.password);
        validateField('confirmPassword', formData.confirmPassword);
        if (Object.keys(fieldErrors).length > 0) return;
        if (!formData.password || !formData.confirmPassword) {
            setError('Por favor, completa todos los campos');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const result = await resetPassword(token, formData.password, formData.confirmPassword);
            if (result.success) setSuccess(true);
            else setError(result.message);
        } catch {
            setError('Error de conexión. Por favor, intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    const getStrengthColor = (): string => {
        if (passwordStrength.level <= 2) return 'bg-red-500';
        if (passwordStrength.level <= 3) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getStrengthTextColor = (): string => {
        if (passwordStrength.level <= 2) return 'text-red-400';
        if (passwordStrength.level <= 3) return 'text-yellow-400';
        return 'text-green-400';
    };

    if (success) {
        return (
            <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                    <CheckIcon />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">¡Contraseña Actualizada!</h2>
                <p className="text-gray-400 mb-6">Tu contraseña ha sido restablecida exitosamente.<br />Ya puedes iniciar sesión con tu nueva contraseña.</p>
                <p className="text-gray-500 text-sm">Puedes cerrar esta ventana y volver al juego.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {error && (
                <div className="bg-red-500/20 border border-red-500/40 text-red-400 p-4 rounded-xl">
                    {error}
                </div>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="password">Nueva Contraseña</label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        className={`w-full px-4 py-3 pr-12 bg-white/5 border rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-200
              ${fieldErrors.password ? 'border-red-500 bg-red-500/10' : 'border-white/20 hover:border-white/30 focus:border-sky-500 focus:bg-white/10 focus:ring-4 focus:ring-sky-500/20'}`}
                        placeholder="Ingresa tu nueva contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors p-1" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </button>
                </div>

                {formData.password && (
                    <div className="mt-3">
                        <div className="flex gap-1 h-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className={`flex-1 rounded-full transition-colors ${i <= passwordStrength.level ? getStrengthColor() : 'bg-white/10'}`} />
                            ))}
                        </div>
                        <p className={`text-xs mt-1 ${getStrengthTextColor()}`}>Fortaleza: {passwordStrength.text}</p>
                    </div>
                )}

                {fieldErrors.password && <p className="text-red-400 text-sm mt-2">{fieldErrors.password}</p>}
                <p className="text-gray-500 text-xs mt-2">Mínimo 8 caracteres, con mayúscula, minúscula y número</p>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="confirmPassword">Confirmar Contraseña</label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        className={`w-full px-4 py-3 pr-12 bg-white/5 border rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-200
              ${fieldErrors.confirmPassword ? 'border-red-500 bg-red-500/10' : formData.confirmPassword && !fieldErrors.confirmPassword ? 'border-green-500 bg-green-500/10' : 'border-white/20 hover:border-white/30 focus:border-sky-500 focus:bg-white/10 focus:ring-4 focus:ring-sky-500/20'}`}
                        placeholder="Confirma tu nueva contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        autoComplete="new-password"
                    />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors p-1" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </button>
                </div>
                {fieldErrors.confirmPassword && <p className="text-red-400 text-sm mt-2">{fieldErrors.confirmPassword}</p>}
            </div>

            <button
                type="submit"
                className="relative overflow-hidden w-full py-3.5 px-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                disabled={loading || Object.keys(fieldErrors).length > 0}
            >
                {loading ? (<><LoadingSpinner /> Actualizando...</>) : 'Restablecer Contraseña'}
            </button>
        </form>
    );
}
