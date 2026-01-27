"use client";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

// Dynamically import React-Leaflet components to avoid SSR issues
const MapContainer = dynamic(
    () => import('react-leaflet').then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(
    () => import('react-leaflet').then((mod) => mod.Marker),
    { ssr: false }
);
const Popup = dynamic(
    () => import('react-leaflet').then((mod) => mod.Popup),
    { ssr: false }
);

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

    // Default center (Argentina)
    const center: [number, number] = [-34.6037, -58.3816];

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
                <MapContainer center={center} zoom={5} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {locations.map((loc, idx) => (
                        <Marker key={idx} position={[loc.lat, loc.lng]}>
                            <Popup>
                                <div className="text-slate-900">
                                    <strong>{loc.nombre}</strong><br />
                                    <span className="text-xs">{loc.address}</span><br />
                                    <span className="text-xs font-bold text-padel-green-dark">{loc.stats}</span>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
}
