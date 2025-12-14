'use client';

import Image from 'next/image';

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Orbes de luz suaves */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* RED DE NODOS ESTILO LED - Profesional */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    {/* Filtro de brillo LED */}
                    <filter id="ledGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feFlood floodColor="#00d4ff" floodOpacity="0.8" />
                        <feComposite in2="blur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Filtro de brillo más suave para líneas */}
                    <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feFlood floodColor="#00d4ff" floodOpacity="0.5" />
                        <feComposite in2="blur" operator="in" />
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Gradiente para las líneas LED */}
                    <linearGradient id="ledLine" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
                        <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* LÍNEAS DE CONEXIÓN LED */}
                <g stroke="#00d4ff" strokeWidth="1" fill="none" filter="url(#lineGlow)" className="animate-led">
                    {/* Red principal - lado izquierdo */}
                    <line x1="5%" y1="15%" x2="18%" y2="28%" opacity="0.6" />
                    <line x1="18%" y1="28%" x2="12%" y2="45%" opacity="0.5" />
                    <line x1="18%" y1="28%" x2="32%" y2="22%" opacity="0.6" />
                    <line x1="8%" y1="35%" x2="18%" y2="28%" opacity="0.4" />

                    {/* Red central superior */}
                    <line x1="32%" y1="22%" x2="48%" y2="18%" opacity="0.5" />
                    <line x1="48%" y1="18%" x2="65%" y2="25%" opacity="0.6" />
                    <line x1="48%" y1="18%" x2="52%" y2="8%" opacity="0.4" />

                    {/* Red lado derecho */}
                    <line x1="65%" y1="25%" x2="78%" y2="18%" opacity="0.5" />
                    <line x1="78%" y1="18%" x2="92%" y2="22%" opacity="0.6" />
                    <line x1="78%" y1="18%" x2="82%" y2="35%" opacity="0.5" />
                    <line x1="82%" y1="35%" x2="95%" y2="42%" opacity="0.4" />
                    <line x1="82%" y1="35%" x2="75%" y2="48%" opacity="0.5" />

                    {/* Red central */}
                    <line x1="65%" y1="25%" x2="58%" y2="42%" opacity="0.6" />
                    <line x1="58%" y1="42%" x2="72%" y2="55%" opacity="0.5" />
                    <line x1="58%" y1="42%" x2="45%" y2="52%" opacity="0.5" />

                    {/* Red inferior derecha */}
                    <line x1="72%" y1="55%" x2="85%" y2="65%" opacity="0.5" />
                    <line x1="85%" y1="65%" x2="92%" y2="78%" opacity="0.6" />
                    <line x1="85%" y1="65%" x2="78%" y2="75%" opacity="0.4" />
                    <line x1="78%" y1="75%" x2="88%" y2="88%" opacity="0.5" />

                    {/* Conexiones adicionales */}
                    <line x1="75%" y1="48%" x2="72%" y2="55%" opacity="0.4" />
                    <line x1="92%" y1="22%" x2="95%" y2="42%" opacity="0.3" />
                </g>

                {/* NODOS LED - Puntos de conexión brillantes */}
                <g filter="url(#ledGlow)">
                    {/* Nodos principales - más grandes y brillantes */}
                    <circle cx="18%" cy="28%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="48%" cy="18%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="65%" cy="25%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="78%" cy="18%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="58%" cy="42%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="82%" cy="35%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="72%" cy="55%" r="4" fill="#00d4ff" opacity="0.9" />
                    <circle cx="85%" cy="65%" r="4" fill="#00d4ff" opacity="0.9" />

                    {/* Nodos secundarios - medianos */}
                    <circle cx="5%" cy="15%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="32%" cy="22%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="12%" cy="45%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="92%" cy="22%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="75%" cy="48%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="45%" cy="52%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="78%" cy="75%" r="3" fill="#00d4ff" opacity="0.7" />
                    <circle cx="92%" cy="78%" r="3" fill="#00d4ff" opacity="0.7" />

                    {/* Nodos pequeños - detalles */}
                    <circle cx="8%" cy="35%" r="2" fill="#00d4ff" opacity="0.5" />
                    <circle cx="52%" cy="8%" r="2" fill="#00d4ff" opacity="0.5" />
                    <circle cx="95%" cy="42%" r="2" fill="#00d4ff" opacity="0.5" />
                    <circle cx="88%" cy="88%" r="2" fill="#00d4ff" opacity="0.5" />
                </g>
            </svg>

            {/* XOLI - Mascota del Metaverso con brillo */}
            <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 animate-float opacity-80 sm:opacity-100">
                {/* Resplandor detrás del Xoli */}
                <div className="absolute inset-0 bg-sky-500 opacity-20 sm:opacity-30 blur-2xl sm:blur-3xl rounded-full scale-75"></div>

                {/* Imagen del Xoli */}
                <Image
                    src="/images/mascota.png"
                    alt="Xoli - Mascota Metaverso TecNM"
                    fill
                    className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(0,212,255,0.5)] sm:drop-shadow-[0_0_40px_rgba(0,212,255,0.6)]"
                    priority
                />
            </div>
        </div>
    );
}
