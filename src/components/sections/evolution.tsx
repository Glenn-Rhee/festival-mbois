"use client";

const evolutionData = [
  {
    id: 1,
    title: "Panggung Komunitas",
    description:
      "Ruang ekspresi pelaku kreatif, pertemuan komunitas, showcase karya",
    year: "2016 – 2019",
  },
  {
    id: 2,
    title: "Digital & Adaptasi",
    description:
      "Virtual exhibition, webinar interaktif, live streaming inovatif",
    year: "2020 – 2021",
  },
  {
    id: 3,
    title: "Ekosistem & Kolaborasi",
    description:
      "Hub lintas sektor, aktivasi 17 subsektor, integrasi ICCN & MCC",
    year: "2022 – 2025",
  },
  {
    id: 4,
    title: "Creative Impact Platform",
    description: "Festival mbois tidak lagi event. Ia adalah sistem",
    year: "2026",
  },
];

export default function EvolutionSection() {
  return (
    <section
      id="evolution"
      className="relative w-full overflow-hidden bg-brand-aubergine py-14 md:py-[72px]"
    >
      {/* Background Grid & Ornaments */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[4rem_4rem]" />

        {/* Ornaments */}
        <img
          src="/vector4.webp"
          alt="Ornament Left"
          className="pointer-events-none absolute top-0 left-0 w-[300px] object-contain opacity-80 mix-blend-screen md:w-[500px] lg:w-[700px]"
        />
        <img
          src="/vector3.webp"
          alt="Ornament Right"
          className="pointer-events-none absolute top-[20%] right-0 w-[300px] object-contain opacity-80 mix-blend-screen md:w-[500px] lg:w-[700px]"
        />

        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(190,80,255,0.3)_0%,rgba(208,84,127,0.2)_40%,transparent_70%)] blur-[80px]" />
      </div>

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-medium tracking-tight text-neutral-off-white md:text-6xl lg:text-8xl">
            Evolusi 11 Tahun
          </h2>
          <p className="max-w-96 text-lg leading-snug font-semibold text-neutral-off-white md:text-right md:text-xl lg:text-[32px]">
            Dari Ruang Ekspresi Menjadi Hub Ekosistem
          </p>
        </div>

        {/* Timeline (Desktop/Tablet) */}
        <div className="hidden grid-cols-2 gap-8 md:grid lg:grid-cols-4 lg:gap-0">
          {evolutionData.map((item, index) => (
            <div
              key={item.id}
              className="relative h-[300px] border-l border-neutral-gray pt-2 pr-4 pl-6 md:h-[350px] lg:h-[400px]"
            >
              <h3 className="mb-4 text-xl font-medium text-neutral-off-white lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-off-white lg:text-lg">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-5 flex h-8 w-8 items-end justify-center">
                <div
                  className={`absolute bottom-0 origin-bottom-left -rotate-90 tracking-widest whitespace-nowrap text-white ${
                    index === evolutionData.length - 1
                      ? "left-10 text-3xl font-bold lg:text-[36px]"
                      : "left-8 text-2xl font-semibold lg:text-[24px]"
                  }`}
                >
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline (Mobile - Stacks vertically with horizontal separators) */}
        <div className="flex flex-col md:hidden">
          {evolutionData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col border-t border-white/10 py-6"
            >
              {/* Year */}
              <span
                className={`tracking-normal text-neutral-off-white ${
                  index === evolutionData.length - 1
                    ? "text-[28px] font-bold"
                    : "text-[22px] font-semibold"
                }`}
              >
                {item.year}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-[18px] font-medium tracking-wide text-neutral-off-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed font-light text-neutral-off-white">
                {item.description}
              </p>
            </div>
          ))}
          {/* Bottom border line */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
