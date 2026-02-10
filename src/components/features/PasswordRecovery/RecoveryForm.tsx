'use client';

import { FormEvent, ChangeEvent } from 'react';
import { HiExclamationTriangle } from 'react-icons/hi2';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface RecoveryFormProps {
    email: string;
    loading: boolean;
    error: string;
    onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export default function RecoveryForm({
    email,
    loading,
    error,
    onEmailChange,
    onSubmit
}: RecoveryFormProps) {
    return (
        <form onSubmit={onSubmit} noValidate className="space-y-6">
            {error && (
                <div className="bg-[var(--tecnm-error)]/20 border border-[var(--tecnm-error)]/40 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <div className="text-[var(--tecnm-error)]">
                            <HiExclamationTriangle className="w-5 h-5 flex-shrink-0" />
                        </div>
                        <p className="text-[var(--tecnm-error)] text-sm flex-1">{error}</p>
                    </div>
                </div>
            )}

            <div>
                <label
                    className="block text-sm font-medium text-[var(--tecnm-gray-300)] mb-2"
                    htmlFor="email"
                >
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 rounded-xl outline-none transition-all duration-200
                        ${error
                            ? 'input-tecnm-error border border-[var(--tecnm-error)]'
                            : 'input-tecnm'
                        }`}
                    placeholder="user@email.com"
                    value={email}
                    onChange={onEmailChange}
                    autoComplete="email"
                    autoFocus
                    disabled={loading}
                    aria-invalid={!!error}
                    aria-describedby={error ? 'email-error' : 'email-hint'}
                />
                <p id="email-hint" className="text-tecnm-muted text-xs mt-2">
                    Usaremos este email para enviarte el enlace de recuperación
                </p>
            </div>

            <button
                type="submit"
                className="relative overflow-hidden w-full py-3.5 px-6 bg-tecnm-button text-white font-semibold rounded-xl shadow-tecnm-glow hover:shadow-tecnm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
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
    );
}
