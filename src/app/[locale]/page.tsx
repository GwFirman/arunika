"use client";

import AdventagesSection from "@/components/landing-page/adventage";
import FeaturesSection from "@/components/landing-page/features";
import HeroSection from "@/components/landing-page/hero";
import HowItWorksSection from "@/components/landing-page/how-it-works";
import KnowUsSection from "@/components/landing-page/know-us";
import WhatCanLearnSection from "@/components/landing-page/what-can-learn";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AdventagesSection />
            <KnowUsSection />
            <WhatCanLearnSection />
            <HowItWorksSection />
            <FeaturesSection />
        </>
    );
}
