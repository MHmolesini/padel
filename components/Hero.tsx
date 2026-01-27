"use client";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-padel-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-padel-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] mask-gradient" style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }} />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 w-fit mx-auto">
                        <Trophy className="w-4 h-4 text-padel-green" />
                        <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">Líderes en Publicidad Deportiva</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                        Tu Marca en el corazón <br />
                        del <span className="text-padel-green">Pádel Argentino</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        La red de publicidad masiva más grande del país. Conecta con audiencias activas en circuitos de 15, 25, 50 y 100 canchas.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="padel" size="lg" className="w-full sm:w-auto h-14 text-lg group">
                            Soy una Marca (Quiero anunciar)
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 text-lg bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20">
                            Tengo un Club (Quiero sumarme)
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
