'use client';

import { useState, FormEvent, ChangeEvent, ReactNode } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { sendRecoveryEmail } from '@/services/resetService';

const MailIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
);

const CheckCircleIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
);

const AlertIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
        <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
    </svg>
);

const InfoIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
    </svg>
);

interface FormState {
    email: string;
    loading: boolean;
    success: boolean;
    error: string;
}

export default function HomePage() {
    const [formState, setFormState] = useState<FormState>({
        email: '',
        loading: false,
        success: false,
        error: ''
    });

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setFormState(prev => ({
            ...prev,
            email: e.target.value,
            error: ''
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        const { email } = formState;

        if (!email.trim()) {
            setFormState(prev => ({ ...prev, error: 'Por favor, ingresa tu email' }));
            return;
        }

        if (!validateEmail(email)) {
            setFormState(prev => ({ ...prev, error: 'Por favor, ingresa un email válido' }));
            return;
        }

        setFormState(prev => ({ ...prev, loading: true, error: '' }));

        try {
            await sendRecoveryEmail(email);
            setFormState(prev => ({ ...prev, success: true, loading: false }));
        } catch (err) {
            // Capturar el error real y mostrarlo al usuario
            const errorMessage = err instanceof Error ? err.message : 'Error al enviar el email de recuperación';
            setFormState(prev => ({
                ...prev,
                success: false,
                loading: false,
                error: errorMessage
            }));
        }
    };

    const handleReset = (): void => {
        setFormState({
            email: '',
            loading: false,
            success: false,
            error: ''
        });
    };

    const { email, loading, success, error } = formState;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Efectos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10 w-full max-w-md z-10">
                {/* Borde superior brillante */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                {/* Logo */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-sky-500/30">
                        <MailIcon />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Recuperar Contraseña
                    </h1>
                    <p className="text-gray-400 text-sm">
                        {!success ? 'Ingresa tu email y te enviaremos las instrucciones' : 'Revisa tu bandeja de entrada'}
                    </p>
                </div>

                {!success ? (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                        {error && (
                            <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-red-400">
                                        <AlertIcon />
                                    </div>
                                    <p className="text-red-400 text-sm flex-1">{error}</p>
                                </div>
                            </div>
                        )}

                        <div>
                            <label
                                className="block text-sm font-medium text-gray-300 mb-2"
                                htmlFor="email"
                            >
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 outline-none transition-all duration-200
                                    ${error
                                        ? 'border-red-500 bg-red-500/10'
                                        : 'border-white/20 hover:border-white/30 focus:border-sky-500 focus:bg-white/10 focus:ring-4 focus:ring-sky-500/20'
                                    }`}
                                placeholder="tu@email.com"
                                value={email}
                                onChange={handleEmailChange}
                                autoComplete="email"
                                autoFocus
                                disabled={loading}
                                aria-invalid={!!error}
                                aria-describedby={error ? 'email-error' : 'email-hint'}
                            />
                            <p id="email-hint" className="text-gray-500 text-xs mt-2">
                                Usaremos este email para enviarte el enlace de recuperación
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="relative overflow-hidden w-full py-3.5 px-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                            disabled={loading}
                            aria-busy={loading}
                        >
                            {loading ? (
                                <>
                                    <LoadingSpinner />
                                    <span>Enviando...</span>
                                </>
                            ) : (
                                'Enviar Instrucciones'
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                            <CheckCircleIcon />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">¡Email Enviado!</h2>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Si existe una cuenta asociada a <strong className="text-gray-200">{email}</strong>, recibirás un correo con las instrucciones.
                        </p>
                        <div className="bg-blue-500/20 border border-blue-500/40 rounded-xl p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="text-blue-400">
                                    <InfoIcon />
                                </div>
                                <div className="text-left flex-1">
                                    <p className="text-blue-400 text-sm font-medium mb-1">
                                        Revisa tu bandeja de entrada
                                    </p>
                                    <p className="text-blue-300/80 text-xs">
                                        No olvides revisar tu carpeta de spam
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="w-full py-3 px-6 bg-white/10 border border-white/20 text-gray-200 font-medium rounded-xl hover:bg-white/15 hover:border-white/30 active:scale-[0.98] transition-all duration-200"
                            onClick={handleReset}
                            type="button"
                        >
                            Enviar a otro email
                        </button>
                    </div>
                )}
            </div>

            {/* Footer */}
            <p className="text-gray-500 text-xs mt-8 text-center z-10">
                © 2025 Tu Juego. Powered by Azure PlayFab
            </p>
        </main>
    );
}
