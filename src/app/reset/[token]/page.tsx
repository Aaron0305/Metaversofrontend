'use client';

import { use, ReactNode } from 'react';
import ResetPasswordForm from '@/components/ResetPasswordForm';

const LockIcon = (): ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
    </svg>
);

interface PageParams {
    token: string;
}

interface ResetPasswordPageProps {
    params: Promise<PageParams>;
}

export default function ResetPasswordPage({ params }: ResetPasswordPageProps) {
    const { token } = use(params);

    if (!token) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-md">
                    <div className="bg-red-500/20 border border-red-500/40 text-red-400 p-4 rounded-xl mb-6">
                        <h3 className="font-semibold mb-1">Enlace Inválido</h3>
                        <p className="text-sm">El enlace de recuperación no es válido. Por favor, solicita uno nuevo.</p>
                    </div>
                    <a href="/" className="block w-full py-3.5 px-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl text-center shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5 transition-all duration-200">
                        Solicitar Nuevo Enlace
                    </a>
                </div>
            </main>
        );
    }

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
                        <LockIcon />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Nueva Contraseña
                    </h1>
                    <p className="text-gray-400 text-sm">Ingresa y confirma tu nueva contraseña</p>
                </div>

                {/* Steps */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-semibold">1</div>
                    <div className="w-16 h-0.5 bg-green-500"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white flex items-center justify-center text-sm font-semibold shadow-lg shadow-sky-500/30">2</div>
                </div>

                <ResetPasswordForm token={token} />
            </div>

            {/* Footer */}
            <p className="text-gray-500 text-xs mt-8 text-center z-10">
                © 2025 Tu Juego. Powered by Azure PlayFab
            </p>
        </main>
    );
}
