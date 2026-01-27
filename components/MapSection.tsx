"use client";
import { motion } from 'framer-motion';

interface MapSectionProps {
    stats: {
        totalClubs: number;
        totalCourts: number;
    }
}

export default function MapSection({ stats }: MapSectionProps) {
    const displayStats = [
        { value: `+${stats.totalClubs}`, label: "Clubes" },
        { value: `+${stats.totalCourts}`, label: "Canchas" },
        { value: "2.5M", label: "Impactos/mes" },
    ];
    return (
        <section id="network" className="py-24 bg-slate-900 relative border-t border-slate-100/10">
            <div className="container px-4 mx-auto text-center">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Cobertura <span className="text-padel-green">Nacional</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Estamos presentes en las principales ciudades del país, garantizando alcance donde más importa.
                    </p>
                </div>

                {/* Abstract Map Representation Removed - Replaced by InteractiveMap */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayStats.map((stat, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                            <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
