import { useEffect, useRef } from 'react'
import maplibregl, { Map, Popup } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

import indonesia from '@/assets/coordinates/id.json'

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<Map | null>(null)

  useEffect(() => {
    if (mapRef.current || !mapContainer.current) return

    const bounds: [[number, number], [number, number]] = [
      [94, -12],
      [141, 6],
    ]

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {},
        layers: [],
      },
      center: [120, -2],
      zoom: 4,
      maxBounds: bounds,
    })

    mapRef.current = map

    map.on('load', () => {
      map.addSource('indonesia', {
        type: 'geojson',
        data: indonesia as any,
      })

      map.addLayer({
        id: 'indo-fill',
        type: 'fill',
        source: 'indonesia',
        paint: {
          'fill-color': '#ec4899',
          'fill-opacity': 0.7,
        },
      })

      map.addLayer({
        id: 'indo-outline',
        type: 'line',
        source: 'indonesia',
        paint: {
          'line-color': '#be185d',
          'line-width': 1,
        },
      })

      const popup = new Popup({
        closeButton: false,
        closeOnClick: false,
      })

      map.on('mousemove', 'indo-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0]
          const props = feature.properties
          const provName = props.name || 'Tanpa Nama'

          map.getCanvas().style.cursor = 'pointer'

          popup.setLngLat(e.lngLat).setHTML(`<div style="font-weight:bold; color:#be185d;">${provName}</div>`).addTo(map)
        }
      })

      map.on('mouseleave', 'indo-fill', () => {
        map.getCanvas().style.cursor = ''
        popup.remove()
      })

      // ✅ Tambahan: aksi saat klik daerah
      map.on('click', 'indo-fill', (e) => {
        if (e.features && e.features.length > 0) {
          const feature = e.features[0]
          const props = feature.properties as any
          const provName = props.NAME_1 || props.name || props.Provinsi || 'Tanpa Nama'

          handleProvinceClick(provName, feature)
        }
      })
    })

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [])

  return <div ref={mapContainer} className='h-screen w-screen' />
}

export default InteractiveMap

// ✅ Fungsi modular untuk aksi klik
function handleProvinceClick(provName: string, feature: any) {
  console.log('Provinsi diklik:', provName)
  // Contoh aksi lain:
  // router.push(`/region/${provName}`)
  // openModal(provName)
  // setSelectedProvince(provName)
}
