'use client';

import Background from '@/components/layout/Background/Background';
import Footer from '@/components/layout/Footer/Footer';
import DashboardContent from '@/components/features/Dashboard/DashboardContent';

export default function DashboardPage() {
    return (
        <main className="min-h-screen flex flex-col items-center p-4 sm:p-8 bg-tecnm-gradient overflow-x-hidden">
            <Background />
            <div className="relative z-10 w-full max-w-7xl">
                <DashboardContent />
            </div>
            <Footer />
        </main>
    );
}
