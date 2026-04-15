'use client';

import { motion } from 'framer-motion';
import { HiShieldCheck, HiArrowDownTray } from 'react-icons/hi2';

export default function InstallerCard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-sky-900/25 p-8 backdrop-blur-xl shadow-[0_35px_70px_-45px_rgba(34,211,238,0.85)]"
        >
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-400/20 blur-[80px] transition-colors duration-500 group-hover:bg-cyan-300/30"></div>
            <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full bg-primary-500/15 blur-[70px]"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 rounded-full border border-white/20 bg-white/10 p-4 transition-colors group-hover:bg-white/20">
                    <HiArrowDownTray className="h-10 w-10 text-white" />
                </div>
                
                <h2 className="mb-2 text-2xl font-bold text-white">Instalador Oficial</h2>
                <p className="mb-8 max-w-[280px] text-sm text-white/80">
                    Descarga la version estable para Windows y entra al entorno virtual con una instalacion segura.
                </p>

                <div className="space-y-4 w-full">
                    <button className="group/btn relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/35 bg-white/10 px-6 py-4 font-bold text-white transition-all hover:bg-white/20 active:scale-95">
                        <span className="relative z-10">Descargar para Windows</span>
                        <HiArrowDownTray className="relative z-10 h-5 w-5 transition-transform group-hover/btn:translate-y-1" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity group-hover/btn:opacity-100"></div>
                    </button>

                    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                        <div className="flex items-center justify-center gap-2 text-xs font-medium text-white/80">
                            <HiShieldCheck className="h-4 w-4" />
                            <span>Version 1.2.4 estable - archivo verificado</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
