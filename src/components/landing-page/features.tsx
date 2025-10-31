import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import petaInteraktif from "@/assets/svg/peta-interaktif.svg";
import audio from "@/assets/svg/audio.svg";
import medal from "@/assets/svg/medal.svg";
import chatBot from "@/assets/svg/chat-bot.svg";
import aiGame from "@/assets/svg/ai-game.svg";
import classIcon from "@/assets/svg/class.svg";

const features = [
    {
        id: 1,
        icon: petaInteraktif,
        color: "bg-[#E7FFD7]",
        title: "Peta Interaktif Nusantara",
        desc: "Jelajahi Indonesia lewat peta! Klik tiap daerah untuk melihat tradisi, makanan, dan budaya uniknya.",
    },
    {
        id: 2,
        icon: audio,
        color: "bg-[#D7EBFF]",
        title: "Storyteller Audio",
        desc: "Dengarkan dongeng dan legenda dari berbagai daerah dengan suara ekspresif.",
    },
    {
        id: 3,
        icon: medal,
        color: "bg-[#FFE2C9]",
        title: "Lencana Budaya",
        desc: "Kumpulkan lencana dari tiap daerah yang sudah kamu jelajahi.",
    },
    {
        id: 4,
        icon: chatBot,
        color: "bg-[#D7EBFF]",
        title: "AI Budaya Assistant",
        desc: "Asisten cerdas yang siap menjawab pertanyaan dan merekomendasikan topik budaya menarik.",
    },
    {
        id: 5,
        icon: aiGame,
        color: "bg-[#FFE2C9]",
        title: "Mini Game & Kuis",
        desc: "Belajar budaya sambil bermain lewat game dan kuis seru!",
    },
    {
        id: 6,
        icon: classIcon,
        color: "bg-[#E7FFD7]",
        title: "Ruang Belajar Anak",
        desc: "Pelajari budaya lewat video, infografis, dan aktivitas interaktif yang menyenangkan.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Kiri */}
                <div className="flex-1">
                    <h1 className="font-semibold text-3xl leading-snug">
                        Belajar budaya dengan{" "}
                        <span className="text-orange">
                            cara baru yang seru, interaktif, dan cerdas!
                        </span>
                    </h1>
                    <p className="mt-6 text-xl text-font-secondary leading-relaxed">
                        Setiap fitur di Arunika dirancang agar anak-anak bisa menjelajahi
                        kekayaan budaya Indonesia sambil bermain dan berimajinasi.
                    </p>
                    <Link
                        href="/"
                        className="mt-4 inline-flex items-center gap-3 bg-orange text-white rounded-full pl-5 pr-2 py-2 font-medium hover:bg-orange/90 transition-all"
                    >
                        Menjelajah Nusantara
                        <span className="bg-white text-orange w-8 h-8 flex items-center justify-center rounded-full">
                            <ArrowUpRight size={22} />
                        </span>
                    </Link>
                </div>

                {/* Kanan */}
                <div className="flex-2/6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((f) => (
                        <div key={f.id} className="flex items-start gap-4">
                            <div
                                className={`w-12 h-12 ${f.color} rounded-lg flex items-center justify-center shrink-0`}
                            >
                                <Image src={f.icon} alt={f.title} width={28} height={28} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{f.title}</h3>
                                <p className="text-font-secondary text-sm mt-1 leading-snug">
                                    {f.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
