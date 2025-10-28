"use client";

import { useEffect, useRef } from "react";
import maplibregl, { Map, Popup } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// Import GeoJSON Indonesia (pastikan ada di /assets/id.json)
import indonesia from "@/assets/id.json";

export default function IndoMap() {
    const mapContainer = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);

    useEffect(() => {
        if (mapRef.current || !mapContainer.current) return;

        // Batas koordinat Indonesia (SW corner, NE corner)
        const bounds: [[number, number], [number, number]] = [
            [94, -12], // barat daya
            [141, 6], // timur laut
        ];

        const map = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {},
                layers: [], // kosong → hanya layer kita yang tampil
            },
            center: [120, -2],
            zoom: 4,
            maxBounds: bounds, // batasi pan
        });

        mapRef.current = map;

        map.on("load", () => {
            // Tambahkan source dari GeoJSON
            map.addSource("indonesia", {
                type: "geojson",
                data: indonesia as any,
            });

            // Layer isi provinsi
            map.addLayer({
                id: "indo-fill",
                type: "fill",
                source: "indonesia",
                paint: {
                    "fill-color": "#60a5fa",
                    "fill-opacity": 0.7,
                },
            });

            // Layer outline
            map.addLayer({
                id: "indo-outline",
                type: "line",
                source: "indonesia",
                paint: {
                    "line-color": "#000",
                    "line-width": 1,
                },
            });

            // Popup untuk hover
            const popup = new Popup({
                closeButton: false,
                closeOnClick: false,
            });

            map.on("mousemove", "indo-fill", (e) => {
                if (e.features && e.features.length > 0) {
                    const feature = e.features[0];
                    const props = feature.properties as any;

                    // cek field nama provinsi di GeoJSON
                    const provName = props.NAME_1 || props.name || props.Provinsi || "Tanpa Nama";

                    map.getCanvas().style.cursor = "pointer";

                    popup.setLngLat(e.lngLat).setHTML(`<div style="font-weight:bold">${provName}</div>`).addTo(map);
                }
            });

            map.on("mouseleave", "indo-fill", () => {
                map.getCanvas().style.cursor = "";
                popup.remove();
            });
        });

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    return <div ref={mapContainer} className="h-screen w-screen" />;
}
