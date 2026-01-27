"use client";
import { Club } from '@/lib/google-sheets';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface NetworkPreviewProps {
    clubs: Club[];
}

export default function NetworkPreview({ clubs }: NetworkPreviewProps) {
    // Sort clubs by name for display
    const sortedClubs = [...clubs].sort((a, b) => a.nombre.localeCompare(b.nombre));

    return (
        <section className="py-20 bg-slate-900 border-t border-white/5">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Nuestra Red en Detalle</h3>
                    <p className="text-slate-400">
                        Explora los {clubs.length} clubes que ya forman parte de Media Padel.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    {sortedClubs.map((club, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="p-4 rounded-lg bg-slate-800/50 border border-white/5 hover:border-padel-green/30 transition-colors group"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="font-bold text-white text-sm group-hover:text-padel-green transition-colors truncate pr-2" title={club.nombre}>
                                    {club.nombre}
                                </h4>
                                {club.techadas && (
                                    <span className="text-[10px] uppercase font-bold bg-padel-green/10 text-padel-green px-1.5 py-0.5 rounded">
                                        Techado
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center text-xs text-slate-500 mb-1">
                                <MapPin className="w-3 h-3 mr-1" />
                                <span className="truncate">{club.barrio}, {club.zona}</span>
                            </div>

                            <div className="mt-3 flex items-center justify-between text-xs border-t border-white/5 pt-2">
                                <span className="text-slate-400">Canchas: <span className="text-white font-medium">{club.canchas}</span></span>
                                {/* <a href={`https://wa.me/${club.telefono.replace(/\D/g,'')}`} target="_blank" rel="noopener noreferrer" className="text-padel-green hover:underline">
                            Contactar
                        </a> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
