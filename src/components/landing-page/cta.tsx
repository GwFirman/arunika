import Image from "next/image";
import Link from "next/link";

import mapDark from "@/assets/svg/map-dark.svg";

const CtaSection = () => {
  return (
    <section className="mx-auto max-w-7xl pt-20">
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-semibold">
          Siap Menjelajah <span className="text-orange">Budaya Nusantara?</span>
        </h1>
        <p className="text-font-secondary mx-auto mt-3 w-220 text-2xl font-medium">
          Yuk mulai petualanganmu dan temukan kekayaan Indonesia dengan cara
          yang seru dan interaktif!
        </p>
        <Link
          href="/"
          className="bg-orange hover:bg-orange/90 mt-4 inline-flex items-center gap-3 rounded-full px-5 py-2 font-medium text-white transition-all"
        >
          Menjelajah Nusantara
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-7xl">
          <Image
            src={mapDark}
            alt="map-dark"
            draggable={false}
            className="mx-auto h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
