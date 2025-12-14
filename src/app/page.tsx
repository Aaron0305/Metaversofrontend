'use client';

import Background from '@/components/layout/Background/Background';
import Footer from '@/components/layout/Footer/Footer';
import PasswordRecovery from '@/components/features/PasswordRecovery';

export default function HomePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-tecnm-gradient">
            <Background />
            <PasswordRecovery />
            <Footer />
        </main>
    );
}
