import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import hinduTample from "@/assets/images/hindu-tample.jpg"
import minangkabauDance from "@/assets/images/minangkabau-dance.jpg"
import reogDance from "@/assets/images/reog-dance.jpg"
import mapSvg from "@/assets/svg/map-dark.svg"

const KnowUsSection = () => {
    return (
        <section className="flex max-w-7xl w-full py-20 mx-auto">
            <div className="flex flex-wrap lg:flex-nowrap w-full">
                <div className="flex-1">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-bold leading-snug">Mari Jelajahi Kekayaan Budaya <span className="text-green-lime-dark">Indonesia</span>
                            {" "} & Pelajari <span className="text-orange">Cerita menarik</span> di Baliknya
                        </h1>
                        <p className="text-xl text-font-secondary py-8">
                            Temukan cara seru belajar budaya lewat dongeng, sejarah, dan interaksi digital yang membuat
                            anak-anak mencintai tanah airnya sejak dini.
                        </p>

                        <div className="relative">
                            <Link href={'/'} className='py-1 pl-4 pr-1 bg-orange rounded-full gap-3 flex items-center justify-center w-fit text-white font-normal'>
                                Mulai Petualangan
                                <span className='bg-white w-9 h-9 text-orange rounded-full flex items-center justify-center'>
                                    <ArrowUpRight size={28} />
                                </span>
                            </Link>
                            <div className="absolute left-70 bottom-12">
                                <div className="absolute left-0 top-2 w-24 h-32 -rotate-15 bg-white rounded-md shadow-lg flex flex-col items-center  p-1">
                                    <Image
                                        src={minangkabauDance}
                                        alt="minangkabau-dance"
                                        className="w-24 h-20 rounded-sm object-cover relative top-0"
                                    />
                                </div>
                                <div className="absolute left-4 top-2 w-24 h-32 rotate-15 bg-white rounded-md shadow-lg flex flex-col items-center  p-1">
                                    <Image
                                        src={reogDance}
                                        alt="reog-dance"
                                        className="w-24 h-20 rounded-sm object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 lg:ml-12">
                    <div className="grid grid-cols-3 gap-4">
                        {/* Atas */}
                        <div className="bg-gray-background rounded-xl col-span-3 md:h-62 flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute inset-6 right-0 top-0">
                                <Image
                                    src={mapSvg}
                                    alt="map-dark"
                                    fill
                                    draggable={false}
                                    className="object-cover"
                                />
                                <div className="relative h-full">
                                    <div className="absolute bottom-0 right-0 text-end px-4">
                                        <div className="relative bottom-21 -left-32">
                                            <div className="absolute left-0 top-6 w-24 h-32 -rotate-10 bg-white rounded-md shadow-lg flex flex-col items-center  p-1">
                                                <Image
                                                    src={minangkabauDance}
                                                    alt="minangkabau-dance"
                                                    className="w-24 h-20 rounded-sm object-cover relative top-0"
                                                />
                                            </div>
                                            <div className="absolute left-4 top-2 w-24 h-32 -rotate-5 bg-white rounded-md shadow-lg flex flex-col items-center  p-1">
                                                <Image
                                                    src={reogDance}
                                                    alt="reog-dance"
                                                    className="w-24 h-20 rounded-sm object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-4 right-0 w-96 h-24 bg-linear-to-l from-stone-50 via-stone-50/70 to-transparent blur-3xl rounded-xl pointer-events-none z-0" />
                                        <h1 className="text-lg font-semibold relative z-10">
                                            Jelajahi Peta Interaktif <span className="text-orange">Nusantara</span>
                                        </h1>
                                        <p className="text-sm text-[#6e727b] mt-1 w-110 relative z-10">
                                            Temukan keunikan setiap daerah lewat peta interaktif yang seru! Dari pakaian adat, tarian tradisional, hingga cerita rakyat.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Kiri bawah */}
                        <div className="bg-gray-background rounded-2xl overflow-hidden col-span-1 relative">
                            <Image
                                src={hinduTample}
                                alt="hindu-tample"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Kanan bawah */}
                        <div className="bg-gray-background rounded-2xl col-span-2 p-6 flex flex-col justify-center">
                            <input
                                type="text"
                                placeholder="Cari nama daerah"
                                className="border border-gray-300 rounded-full px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Temukan berbagai cerita unik dari berbagai daerah di Indonesia.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default KnowUsSection;