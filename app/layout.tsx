import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Media Padel - Publicidad en Clubes de Pádel",
    description: "La red de publicidad masiva más grande del país. Conecta con audiencias activas en circuitos de canchas de pádel.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} min-h-screen bg-slate-900 text-white antialiased selection:bg-padel-green selection:text-slate-900`}>
                {children}
            </body>
        </html>
    );
}
