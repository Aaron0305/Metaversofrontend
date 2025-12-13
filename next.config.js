/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_PLAYFAB_TITLE_ID: process.env.NEXT_PUBLIC_PLAYFAB_TITLE_ID,
    },
    // Configuración para producción
    output: 'standalone',
    // Permitir imágenes de dominios externos si es necesario
    images: {
        domains: [],
    },
};

module.exports = nextConfig;
