'use client';

import { motion } from 'framer-motion';
import { HiInformationCircle, HiRocketLaunch, HiCpuChip, HiGlobeAlt } from 'react-icons/hi2';
import InstallerCard from './InstallerCard';
import InfoCard from './InfoCard';

export default function DashboardContent() {
    const infoItems = [
        {
            title: "Campus Inmersivo",
            description: "Recorre laboratorios, aulas y espacios colaborativos en una experiencia fluida y visualmente realista.",
            icon: <HiGlobeAlt className="w-6 h-6" />,
            color: "sky"
        },
        {
            title: "Colaboracion Activa",
            description: "Conecta con estudiantes y docentes en tiempo real mediante sesiones guiadas y avatares personalizables.",
            icon: <HiRocketLaunch className="w-6 h-6" />,
            color: "cyan"
        },
        {
            title: "Motor de Alto Rendimiento",
            description: "Arquitectura optimizada para mantener estabilidad, buena respuesta visual y sesiones prolongadas sin fricciones.",
            icon: <HiCpuChip className="w-6 h-6" />,
            color: "emerald"
        }
    ];

    const platformStats = [
        {
            label: "Espacios disponibles",
            value: "24",
            icon: <HiGlobeAlt className="w-4 h-4" />
        },
        {
            label: "Sesiones activas",
            value: "+1.5K",
            icon: <HiRocketLaunch className="w-4 h-4" />
        },
        {
            label: "Uptime plataforma",
            value: "99.9%",
            icon: <HiCpuChip className="w-4 h-4" />
        }
    ];

    const minimumRequirements = [
        { label: "Sistema operativo", value: "Windows 10/11 64-bit" },
        { label: "Procesador", value: "Intel i5 / AMD Ryzen 5" },
        { label: "Memoria", value: "16 GB RAM" },
        { label: "Graficos", value: "GTX 2060" }
    ];

    return (
        <div className="flex flex-col gap-10 py-10 md:py-14">
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[30px] border border-white/15 bg-slate-950/45 px-6 py-10 text-center backdrop-blur-xl shadow-[0_30px_80px_-45px_rgba(14,165,233,0.85)] md:px-12"
            >
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-primary-400/15 blur-3xl"></div>

                <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    Plataforma Oficial TecNM
                </span>
                <h1 className="relative z-10 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                    Metaverso TecNM
                </h1>
                <p className="relative z-10 mx-auto mt-4 max-w-3xl text-base text-white/85 md:text-xl">
                    Una experiencia academica inmersiva para explorar, colaborar y aprender dentro del ecosistema digital del Tecnologico Nacional de Mexico.
                </p>

                <div className="relative z-10 mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {platformStats.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.15 + index * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left"
                        >
                            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90">
                                {item.icon}
                                {item.label}
                            </div>
                            <p className="text-2xl font-bold text-white">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <section>
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <HiInformationCircle className="text-cyan-300 w-6 h-6" />
                                    <h2 className="text-2xl font-bold text-white">Experiencia del Ecosistema</h2>
                                </div>
                                <p className="mt-2 text-sm text-white/70">
                                    Componentes clave del entorno virtual disenados para una operacion estable y profesional.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {infoItems.map((item, index) => (
                                <InfoCard
                                    key={index}
                                    {...item}
                                    index={index}
                                    className={index === 2 ? 'md:col-span-2' : ''}
                                />
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="space-y-8">
                    <InstallerCard />
                    
                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-3xl border border-white/15 bg-slate-950/50 p-6 backdrop-blur-xl"
                    >
                        <div className="mb-4 flex items-center gap-2">
                            <HiInformationCircle className="h-5 w-5 text-cyan-300" />
                            <h3 className="text-lg font-semibold text-white">Requisitos Minimos</h3>
                        </div>

                        <div className="space-y-3">
                            {minimumRequirements.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                                >
                                    <span className="text-sm text-white/70">{item.label}</span>
                                    <span className="text-right text-sm font-semibold text-white">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </aside>
            </div>
        </div>
    );
}
