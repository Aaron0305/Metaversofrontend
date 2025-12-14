'use client';

interface FooterProps {
    text?: string;
}

export default function Footer({ text = '© 2025 Metaverso TecNM. Tecnológico Nacional de México' }: FooterProps) {
    return (
        <footer className="text-tecnm-muted text-xs mt-8 text-center z-10">
            {text}
        </footer>
    );
}
