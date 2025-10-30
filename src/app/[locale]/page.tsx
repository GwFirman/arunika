"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import map from "@/assets/svg/map.svg";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/locale-switcher";
import { authClient } from "@/lib/auth-client";

export default function Home() {
    const ref = useRef(null);
    const { data: session, isPending, error, refetch, isRefetching } = authClient.useSession();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const mapY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const blurY = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const t = useTranslations("HomePage");

    return (
        <div className="overflow-x-hidden">
            <div ref={ref} className="relative flex flex-col justify-center gap-52 items-center h-screen overflow-hidden">
                <motion.div style={{ y: mapY }} className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
                    <Image className="object-fill select-none" loading="eager" src={map} alt="map" draggable={false} />
                </motion.div>

                <motion.div style={{ y: blurY }} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1743px] max-h-[597px] bg-[#fffefe] dark:bg-[#1a1a1a] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mb-40 mx-auto relative flex flex-col justify-center items-center gap-6 px-4">
                    <ModeToggle />
                    <LocaleSwitcher />
                    <div>{JSON.stringify(session, null, 4)}</div>
                    <div
                        className="h-10 w-20 bg-red-600"
                        onClick={() => {
                            authClient.signIn.social({
                                provider: "google",
                            });
                        }}
                    ></div>
                    <h1 className="text-5xl font-extrabold text-center">{t("title")}</h1>
                    <p className="max-w-[749px] text-center">{t("description")}</p>
                    <div className="w-52 h-10 bg-[#ffa559] rounded-[100px] flex items-center justify-center text-white font-semibold">{t("button")}</div>
                </div>
            </div>

            <div className="h-screen w-screen" />
        </div>
    );
}
