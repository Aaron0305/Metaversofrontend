'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ResetTokenPage() {
    const params = useParams() as Record<string, string | undefined>;
    const token = params?.token || '';

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const validate = () => {
        if (!password || password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres');
            return false;
        }
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, password, confirmPassword })
            });
            const data = await res.json();
            if (res.ok) {
                setSuccess(true);
            } else {
                setError(data?.message || 'Error al restablecer la contraseña');
            }
        } catch (err: any) {
            setError(err?.message || 'Error en la solicitud');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-tecnm-gradient">
            <div className="w-full max-w-md p-6 bg-tecnm-card rounded-2xl shadow-tecnm">
                {!success ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="text-xl font-semibold text-white">Restablecer contraseña</h2>
                        <p className="text-sm text-tecnm-muted">Token: <span className="font-mono text-xs">{token}</span></p>

                        {error && <div className="text-sm text-red-400">{error}</div>}

                        <div>
                            <label className="block text-sm text-tecnm-muted mb-1">Nueva contraseña</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 rounded" />
                        </div>

                        <div>
                            <label className="block text-sm text-tecnm-muted mb-1">Confirmar contraseña</label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 rounded" />
                        </div>

                        <button type="submit" disabled={loading} className="w-full py-2 bg-tecnm-button text-white rounded">
                            {loading ? 'Procesando...' : 'Restablecer contraseña'}
                        </button>
                    </form>
                ) : (
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-white">Contraseña actualizada</h3>
                        <p className="text-sm text-tecnm-muted">Ya puedes iniciar sesión con tu nueva contraseña.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
