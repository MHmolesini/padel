"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

interface Location {
    nombre: string;
    address: string;
    lat: number;
    lng: number;
    stats: string;
}

interface LeafletMapProps {
    locations: Location[];
}

export default function LeafletMap({ locations }: LeafletMapProps) {
    // Default center (Argentina)
    const center: [number, number] = [-34.6037, -58.3816];

    return (
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
    );
}
