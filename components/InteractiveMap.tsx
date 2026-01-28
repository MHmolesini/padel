"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR to avoid "window is not defined"
const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-slate-800 animate-pulse rounded-3xl" />
});

interface Location {
    nombre: string;
    address: string;
    lat: number;
    lng: number;
    stats: string;
}

export default function InteractiveMap() {
    const [locations, setLocations] = useState<Location[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Fetch the generated locations JSON
        fetch('/locations.json')
            .then(res => res.json())
            .then(data => setLocations(data))
            .catch(err => console.error("Failed to load map locations:", err));
    }, []);

    if (!isMounted) {
        return <div className="h-[500px] w-full bg-slate-800 animate-pulse rounded-3xl" />;
    }

    return (
        <section id="map" className="py-24 bg-slate-900 border-t border-white/5">
            <div className="container px-4 mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Mapa de <span className="text-padel-green">Cobertura</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Encuentra nuestros clubes en todo el país.
                </p>
            </div>

            <div className="container px-4 mx-auto h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-0">
                <LeafletMap locations={locations} />
            </div>
        </section>
    );
}
