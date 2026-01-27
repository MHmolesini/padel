"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-padel-green rounded-sm transform rotate-45 flex items-center justify-center">
                        <div className="w-4 h-4 bg-slate-900 rounded-full" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">MEDIA<span className="text-padel-green">PADEL</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#brands" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Para Marcas</Link>
                    <Link href="#clubs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Para Clubes</Link>
                    <Link href="#network" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Nuestra Red</Link>
                    <Link href="#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contacto</Link>
                </nav>

                <div className="hidden md:block">
                    <Button variant="padel">Solicitar Propuesta</Button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 border-b border-white/10 p-4 absolute w-full flex flex-col gap-4 animate-fade-in">
                    <Link href="#brands" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Para Marcas</Link>
                    <Link href="#clubs" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Para Clubes</Link>
                    <Link href="#network" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Nuestra Red</Link>
                    <Link href="#contact" className="text-sm font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
                    <Button variant="padel" className="w-full">Solicitar Propuesta</Button>
                </div>
            )}
        </header>
    );
}
