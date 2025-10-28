"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import indonesia from "@/assets/id.json";

export default function LeafletMap() {
    const center: LatLngExpression = [-2, 120];

    return (
        <MapContainer center={center} zoom={5} style={{ height: "600px", width: "100%" }}>
            <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <GeoJSON data={indonesia as any} />
        </MapContainer>
    );
}
