'use client';

import { motion } from 'framer-motion';
import { BsSendCheckFill, BsInfoCircleFill } from 'react-icons/bs';

interface SuccessMessageProps {
    email: string;
    onReset: () => void;
}

export default function SuccessMessage({ email, onReset }: SuccessMessageProps) {
    return (
        <div className="text-center py-4">
            {/* Ícono de éxito animado */}
            <motion.div
                className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-500/40"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    duration: 0.8
                }}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                >
                    <BsSendCheckFill className="w-12 h-12 text-white drop-shadow-lg" />
                </motion.div>
            </motion.div>

            {/* Título animado */}
            <motion.h2
                className="text-2xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                ¡Email Enviado!
            </motion.h2>

            <motion.p
                className="text-tecnm-muted text-sm mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                Revisa el correo de <strong className="text-[var(--tecnm-gray-300)]">{email}</strong>
            </motion.p>

            <motion.div
                className="bg-[var(--tecnm-info)]/20 border border-[var(--tecnm-info)]/40 rounded-xl p-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex items-center gap-2">
                    <BsInfoCircleFill className="w-4 h-4 text-[var(--tecnm-info)] flex-shrink-0" />
                    <p className="text-[var(--tecnm-info)] text-xs">
                        Revisa también tu carpeta de spam
                    </p>
                </div>
            </motion.div>

            {/* Botón animado */}
            <motion.button
                className="w-full py-3 px-6 bg-[var(--tecnm-glass-light)] border border-tecnm text-[var(--tecnm-gray-300)] font-medium rounded-xl hover:bg-[var(--tecnm-primary)]/30 hover:border-[var(--tecnm-bright)] active:scale-[0.98] transition-all duration-200"
                onClick={onReset}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                Enviar a otro email
            </motion.button>
        </div>
    );
}
