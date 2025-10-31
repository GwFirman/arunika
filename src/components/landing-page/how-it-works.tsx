import Image from "next/image";

const steps = [
    {
        num: "01",
        title: "Pilih Daerah di Peta",
        desc: "Klik peta interaktif untuk menjelajahi provinsi yang ingin kamu pelajari.",
        color: "text-orange",
    },
    {
        num: "02",
        title: "AI Jadi Pemandu Belajarmu",
        desc: "Asisten AI akan mengenalkanmu pada keunikan tiap daerah, merekomendasikan topik menarik, dan membantu menjawab pertanyaan budaya yang kamu temui.",
        color: "text-light-blue-dark",
    },
    {
        num: "03",
        title: "Eksplorasi Konten Budaya",
        desc: "Temukan sejarah, baju adat, makanan khas, hingga tarian tradisional dari daerah pilihanmu.",
        color: "text-green-lime-dark",
    },
    {
        num: "04",
        title: "Belajar Sambil Bermain",
        desc: "Ikuti mini game, kuis cepat, atau dengarkan storyteller audio untuk memperdalam pemahamanmu.",
        color: "text-orange",
    },
    {
        num: "05",
        title: "Kumpulkan Lencana Budaya",
        desc: "Setiap kali menyelesaikan aktivitas, kamu mendapatkan lencana unik dari tiap daerah. Semakin banyak belajar, makin banyak koleksi!",
        color: "text-light-blue",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <div className="text-center mb-16">
                <h1 className="text-3xl font-semibold">
                    Bagaimana <span className="text-green-lime-dark">Cara Kerjanya</span>
                </h1>
                <h4 className="mt-3 text-2xl font-medium text-font-secondary">
                    Belajar budaya kini lebih{" "}
                    <span className="text-orange">seru, mudah, dan interaktif!</span>
                </h4>
                <p className="mt-4 text-lg text-[#6e727b] max-w-3xl mx-auto">
                    Kami mengubah pelajaran budaya menjadi pengalaman yang bisa kamu
                    jelajahi langsung lewat peta, permainan, dan cerita.
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-12">
                <div className="flex-1 bg-gray-100 rounded-2xl shadow-inner relative overflow-hidden" />

                <div className="flex-1/6 flex flex-col justify-center space-y-4 ">
                    {steps.map((step) => (
                        <div key={step.num} className="flex items-start gap-4">
                            <span className={`text-2xl font-semibold ${step.color}`}>
                                {step.num}
                            </span>
                            <div>
                                <h3 className={`text-xl font-semibold ${step.color}`}>
                                    {step.title}
                                </h3>
                                <p className="text-font-secondary mt-1 text-base">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HowItWorksSection;
