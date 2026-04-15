'use client';

import { motion } from 'framer-motion';
import { HiArrowDownTray, HiInformationCircle, HiRocketLaunch, HiCpuChip, HiGlobeAlt, HiShieldCheck } from 'react-icons/hi2';
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
            label: "Usuarios conectados",
            value: "+850",
            icon: <HiInformationCircle className="w-4 h-4" />
        },
        {
            label: "Espacios disponibles",
            value: "24",
            icon: <HiGlobeAlt className="w-4 h-4" />
        },
        {
            label: "Uptime plataforma",
            value: "99.9%",
            icon: <HiCpuChip className="w-4 h-4" />
        },
        {
            label: "Latencia promedio",
            value: "31 ms",
            icon: <HiShieldCheck className="w-4 h-4" />
        }
    ];

    const minimumRequirements = [
        { label: "Sistema operativo", value: "Windows 10/11 64-bit" },
        { label: "Procesador", value: "Intel i5 / AMD Ryzen 5" },
        { label: "Memoria", value: "16 GB RAM" },
        { label: "Graficos", value: "GTX 2060" }
    ];

    const releaseNotes = [
        {
            title: 'Nuevas salas colaborativas',
            description: 'Ahora puedes iniciar sesiones privadas con control de acceso por grupo academico.'
        },
        {
            title: 'Mejoras de rendimiento',
            description: 'Se redujeron tiempos de carga en el acceso inicial y en cambios de espacio.'
        },
        {
            title: 'Actualizacion de seguridad',
            description: 'Refuerzo en validacion de sesiones para proteger el acceso a contenidos institucionales.'
        }
    ];

    const supportItems = [
        {
            title: 'Mesa de ayuda',
            description: 'Soporte tecnico de lunes a viernes de 08:00 a 18:00.'
        },
        {
            title: 'Guia de inicio rapido',
            description: 'Checklist para instalar, iniciar sesion y entrar al primer laboratorio virtual.'
        },
        {
            title: 'Estado del servicio',
            description: 'Monitoreo activo de nodos y disponibilidad general de la plataforma.'
        }
    ];

    return (
        <div id="resumen" className="flex flex-col gap-10 py-6 md:py-10">
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

                <div className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href="#instalador"
                        className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/45 bg-cyan-400/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-300/25"
                    >
                        <HiArrowDownTray className="h-4 w-4" />
                        Descargar instalador
                    </a>
                    <a
                        href="#recursos"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                        <HiInformationCircle className="h-4 w-4" />
                        Ver recursos
                    </a>
                </div>

                <div className="relative z-10 mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                    <section id="recursos">
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

                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-3xl border border-white/15 bg-slate-950/55 p-6 backdrop-blur-xl"
                    >
                        <div className="mb-5 flex items-center gap-2">
                            <HiRocketLaunch className="h-5 w-5 text-cyan-300" />
                            <h3 className="text-lg font-semibold text-white">Novedades de la plataforma</h3>
                        </div>

                        <div className="space-y-3">
                            {releaseNotes.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                                >
                                    <p className="text-sm font-semibold text-white">{item.title}</p>
                                    <p className="mt-1 text-sm text-white/70">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </div>

                <aside className="space-y-8">
                    <div id="instalador">
                        <InstallerCard />
                    </div>
                    
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

                    <motion.section
                        id="soporte"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="rounded-3xl border border-white/15 bg-slate-950/50 p-6 backdrop-blur-xl"
                    >
                        <div className="mb-4 flex items-center gap-2">
                            <HiInformationCircle className="h-5 w-5 text-cyan-300" />
                            <h3 className="text-lg font-semibold text-white">Centro de soporte</h3>
                        </div>

                        <div className="space-y-3">
                            {supportItems.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                                >
                                    <p className="text-sm font-semibold text-white">{item.title}</p>
                                    <p className="mt-1 text-xs text-white/70">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                </aside>
            </div>
        </div>
    );
}
