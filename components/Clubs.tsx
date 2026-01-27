"use client";
import { Button } from '@/components/ui/button';
import { Check, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    "Ingresos pasivos recurrentes",
    "Cero costo de inversión para el club",
    "Mejora estética con lonas y vinilos profesionales",
    "Alianza con marcas de primer nivel"
];

export default function Clubs() {
    return (
        <section id="clubs" className="py-24 bg-slate-100 relative overflow-hidden">
            {/* Pattern background */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 mb-6">
                            <Building2 className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Para Dueños de Clubes</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Monetiza las paredes de tu Club <span className="text-slate-500">sin esfuerzo.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Transformamos tus espacios vacíos en fuentes de ingreso. Únete a la red más grande de clubes profesionales y eleva el nivel de tus instalaciones.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-padel-green" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                            Sumar mi Club a la Red
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl">
                            {/* Abstract representation of a club wall with ads */}
                            <div className="w-full h-full bg-slate-300 relative flex items-center justify-center">
                                <div className="w-3/4 h-3/4 border-4 border-slate-400/30 rounded-lg flex flex-col">
                                    <div className="h-2/3 bg-slate-800/10 border-b-4 border-slate-400/30 flex items-center justify-center">
                                        <span className="text-slate-400 font-bold text-2xl">ESPACIO PUBLICITARIO</span>
                                    </div>
                                    <div className="h-1/3 bg-padel-green/20 flex items-center justify-center">
                                        <div className="w-full h-1 bg-white/50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                            <p className="text-4xl font-bold text-slate-900 mb-1">+100</p>
                            <p className="text-sm text-slate-500 font-medium">Clubes ya confían en nosotros para gestionar sus espacios.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
