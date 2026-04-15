"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiArrowDownTray, HiGlobeAlt, HiRocketLaunch } from 'react-icons/hi2';

export default function DashboardNavbar() {
    const pathname = usePathname();

    const navItems = [
        { label: 'Resumen', href: '/dashboard', isRoute: true },
        { label: 'Recursos', href: '#recursos', isRoute: false },
        { label: 'Soporte', href: '#soporte', isRoute: false },
    ];

    return (
        <header className="sticky top-3 z-20 mb-8 w-full">
            <nav className="relative mx-auto flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/75 px-4 py-3 backdrop-blur-xl shadow-[0_18px_45px_-25px_rgba(0,212,255,0.75)] sm:px-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_85%_0%,rgba(14,165,233,0.18),transparent_35%)]"></div>

                <Link href="/dashboard" className="relative z-10 flex min-w-0 items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-cyan-300/50 bg-white/10 p-1">
                        <Image
                            src="/images/logo-metaverso.png"
                            alt="Logo Metaverso TecNM"
                            width={40}
                            height={40}
                            className="h-full w-full object-contain"
                            priority
                        />
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300/90">Panel</p>
                        <h2 className="text-sm font-bold text-white sm:text-base">Metaverso TecNM</h2>
                    </div>
                </Link>

                <div className="relative z-10 hidden items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1 md:flex">
                    {navItems.map((item) => {
                        const isActive = item.isRoute && pathname === item.href;
                        const itemClasses = `rounded-lg px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                            isActive
                                ? 'bg-cyan-300/15 text-white'
                                : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`;

                        if (item.isRoute) {
                            return (
                                <Link key={item.href} href={item.href} className={itemClasses}>
                                    {item.label}
                                </Link>
                            );
                        }

                        return (
                            <a key={item.href} href={item.href} className={itemClasses}>
                                {item.label}
                            </a>
                        );
                    })}
                </div>

                <div className="relative z-10 flex items-center gap-2 sm:gap-3">
                    <div className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/85 lg:flex">
                        <HiGlobeAlt className="h-4 w-4 text-cyan-300" />
                        24 nodos activos
                    </div>

                    <a
                        href="#instalador"
                        className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/35 bg-cyan-400/15 px-3 py-2 text-xs font-semibold text-white transition hover:bg-cyan-300/25 sm:text-sm"
                    >
                        <HiArrowDownTray className="h-4 w-4" />
                        Descargar
                    </a>

                    <div className="hidden items-center gap-1 rounded-lg border border-emerald-300/35 bg-emerald-400/15 px-3 py-2 text-xs font-semibold text-white xl:inline-flex">
                        <HiRocketLaunch className="h-4 w-4" />
                        Online
                    </div>
                </div>
            </nav>
        </header>
    );
}
