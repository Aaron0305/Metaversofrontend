'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    color: string;
    index: number;
    className?: string;
}

export default function InfoCard({ title, description, icon, color, index, className = '' }: InfoCardProps) {
    const colorClasses: Record<string, string> = {
        sky: "from-sky-500/20 to-sky-600/5 border-sky-400/20 hover:border-sky-300/40",
        cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-400/20 hover:border-cyan-300/40",
        emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-400/20 hover:border-emerald-300/40",
    };

    const iconColors: Record<string, string> = {
        sky: "bg-sky-500/20 text-white",
        cyan: "bg-cyan-500/20 text-white",
        emerald: "bg-emerald-500/20 text-white",
    };

    const panelColor = colorClasses[color] || colorClasses.sky;
    const badgeColor = iconColors[color] || iconColors.sky;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`${className} group relative cursor-default overflow-hidden rounded-3xl border bg-gradient-to-br p-6 backdrop-blur-md transition-all duration-300 ${panelColor}`}
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/65 to-transparent"></div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/5 blur-2xl"></div>

            <div className={`mb-4 w-fit rounded-2xl p-3 transition-transform duration-300 group-hover:scale-110 ${badgeColor}`}>
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-white">
                {title}
            </h3>
            <p className="text-sm leading-relaxed text-white/75">
                {description}
            </p>
        </motion.div>
    );
}
