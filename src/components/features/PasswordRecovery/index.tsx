'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import { sendRecoveryEmail } from '@/services/resetService';
import RecoveryForm from './RecoveryForm';
import SuccessMessage from './SuccessMessage';

interface FormState {
    email: string;
    loading: boolean;
    success: boolean;
    error: string;
}

export default function PasswordRecovery() {
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
        } catch {
            setFormState(prev => ({
                ...prev,
                success: false,
                loading: false,
                error: 'Email no registrado o incorrecto'
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
        <div className="relative bg-tecnm-card rounded-2xl shadow-tecnm p-6 w-full max-w-sm z-10 border-top-glow">
            {/* Header con Logo del Metaverso */}
            <div className="text-center mb-4">
                {/* Contenedor del logo */}
                <div className="relative w-16 h-16 mx-auto mb-3">
                    <Image
                        src="/images/logo-metaverso.png"
                        alt="Logo Metaverso TecNM"
                        fill
                        className="object-contain drop-shadow-[0_0_15px_rgba(41,137,216,0.6)]"
                        priority
                    />
                </div>

                <h1 className="text-2xl font-bold text-white mb-1">
                    Recuperar Contraseña
                </h1>
                <p className="text-tecnm-muted text-xs">
                    {!success ? 'Ingresa tu email' : 'Revisa tu bandeja de entrada'}
                </p>
            </div>

            {/* Contenido dinámico */}
            {!success ? (
                <RecoveryForm
                    email={email}
                    loading={loading}
                    error={error}
                    onEmailChange={handleEmailChange}
                    onSubmit={handleSubmit}
                />
            ) : (
                <SuccessMessage email={email} onReset={handleReset} />
            )}
        </div>
    );
}
