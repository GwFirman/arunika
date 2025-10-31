
import historyIndonesia from '@/assets/images/history-indonesia.jpg'
import traditionalFood from '@/assets/images/food-traditional.jpg'
import traditionalCloth from '@/assets/images/traditional-clothing.jpg'
import traditionalDance from '@/assets/images/traditional-dance.jpg'
import traditionalWeapon from '@/assets/images/traditional-weapon.jpg'
import cultureBuilding from '@/assets/images/culture-building.jpg'
import Image from 'next/image'

const photo = [
    {
        id: 1,
        src: historyIndonesia,
        alt: 'sejarah-indonesia'
    },
    {
        id: 2,
        src: traditionalFood,
        alt: 'makanan-tradisional'
    },
    {
        id: 3,
        src: traditionalCloth,
        alt: 'pakaian-tradisional'
    },
    {
        id: 4,
        src: traditionalDance,
        alt: 'tarian-tradisional'
    },
    {
        id: 5,
        src: traditionalWeapon,
        alt: 'senjata-tradisional'
    },
    {
        id: 6,
        src: cultureBuilding,
        alt: 'bangunan-bersejarah'
    },

]

const WhatCanLearnSection = () => {
    return (
        <section className="max-w-7xl w-full py-20 mx-auto">
            <div className="flex w-full">
                <div className="flex-1">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-semibold">Apa yang bisa kamu <span className="text-green-lime-dark">pelajari disini?</span></h1>
                        <p className="text-xl text-font-secondary mt-2">Temukan keindahan budaya Indonesia lewat cara belajar yang <span className="text-orange">seru, interaktif, dan penuh warna.</span></p>
                    </div>
                </div>
                <div className="flex-1">
                    <p className="text-[#6e727b] text-lg">
                        Dari pakaian adat hingga bahasa daerah, setiap halaman membawa kamu mengenal kisah dan makna di balik tradisi Nusantara. Yuk, jelajahi dan temukan betapa kayanya Indonesia dari Sabang sampai Merauke!
                    </p>
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-12">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {photo.map((v, i) => (
                        <div
                            key={i}
                            className="relative w-full aspect-4/5 overflow-hidden rounded-sm shadow-md"
                        >
                            <Image
                                src={v.src}
                                alt={v.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300 ease-out"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatCanLearnSection;