"use client";
import { MoveUpRight, Zap, TrendingUp, Radio, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const circuits = [
    {
        name: "Circuito Start",
        courts: "15 Canchas",
        description: "Ideal para campañas locales y de alto impacto barrial.",
        icon: Zap,
        color: "text-blue-400"
    },
    {
        name: "Circuito Growth",
        courts: "25 Canchas",
        description: "Presencia dominante en zonas clave (Norte, CABA, GBA).",
        icon: TrendingUp,
        color: "text-padel-green"
    },
    {
        name: "Circuito Pro",
        courts: "50 Canchas",
        description: "Cobertura masiva para lanzamientos de producto.",
        icon: Radio,
        color: "text-purple-400"
    },
    {
        name: "Circuito National",
        courts: "100+ Canchas",
        description: "La red completa. Tu marca en todo el país.",
        icon: Globe,
        color: "text-orange-400"
    }
];

export default function Brands() {
    return (
        <section id="brands" className="py-20 bg-slate-900 border-t border-white/5 relative">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Domina el juego con <span className="text-padel-green">Circuitos a Medida</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Nuestra IA selecciona las mejores ubicaciones para maximizar el impacto de tu marca en el público objetivo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {circuits.map((circuit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-padel-green/30 p-6 rounded-2xl transition-all duration-300 group"
                        >
                            <div className="bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <circuit.icon className={`w-6 h-6 ${circuit.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{circuit.name}</h3>
                            <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm font-medium text-padel-green mb-4">
                                {circuit.courts}
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                {circuit.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-padel-green transition-colors">
                                Ver disponibilidad <MoveUpRight className="w-4 h-4 ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
