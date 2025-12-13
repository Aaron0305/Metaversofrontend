/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'float': 'float 20s ease-in-out infinite',
                'orb': 'orb 15s ease-in-out infinite',
                'glow': 'glow 3s ease-in-out infinite',
                'shake': 'shake 0.5s ease-in-out',
                'pop': 'pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
                    '25%': { transform: 'translate(-5%, 5%) rotate(5deg)' },
                    '50%': { transform: 'translate(5%, -5%) rotate(-5deg)' },
                    '75%': { transform: 'translate(-3%, -3%) rotate(3deg)' },
                },
                orb: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 10px 40px rgba(14, 165, 233, 0.3)' },
                    '50%': { boxShadow: '0 10px 60px rgba(168, 85, 247, 0.5)' },
                },
                shake: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '20%': { transform: 'translateX(-5px)' },
                    '40%': { transform: 'translateX(5px)' },
                    '60%': { transform: 'translateX(-5px)' },
                    '80%': { transform: 'translateX(5px)' },
                },
                pop: {
                    '0%': { transform: 'scale(0)' },
                    '50%': { transform: 'scale(1.2)' },
                    '100%': { transform: 'scale(1)' },
                },
            },
            backdropBlur: {
                '20': '20px',
            },
        },
    },
    plugins: [],
}
