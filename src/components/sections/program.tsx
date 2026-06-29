import { Plus } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    id: 1,
    title: "Malang Sportainment",
    description:
      "Perayaan energi kreatif terbesar yang secara spektakuler menyatukan dunia olahraga, kompetisi esports, dan aksi seni urban dalam satu panggung. Acara ini dirancang sebagai wadah interaksi lintas komunitas yang memadukan keseruan laga kompetitif dengan hiburan modern seperti live music, drone show, hingga festival kuliner.",
    image: "/program_sportainment.webp",
  },
  {
    id: 2,
    title: "Sound of Malang Menyala",
    description:
      "Perayaan energi baru Kota Malang di mana musik, budaya, kreativitas, dan teknologi bertemu dalam satu kesatuan. Pengunjung akan disuguhkan pengalaman multisensori, mulai dari panggung musik dan seni media interaktif, hingga pertunjukan budaya dan pasar ekonomi kreatif yang semarak, semuanya dirancang untuk menyatukan ribuan orang dalam satu gerakan kreatif yang menginspirasi.",
    image: "/program_sound_of_malang_menyala.webp",
  },
  {
    id: 3,
    title: "Malang City Connect",
    description:
      "Konferensi dan forum bisnis strategis yang menjadi titik temu bagi para pemimpin kota, pelaku industri, investor, akademisi, dan komunitas kreatif untuk mendorong ekosistem inklusif dan berkelanjutan. Acara ini mengintegrasikan berbagai program utama seperti Creative City Summit, Business Matching, hingga MBOIS AI & Creative Pitch guna mengubah ide inovatif menjadi investasi dan dampak nyata bagi masa depan industri kreatif Indonesia.",
    image: "/program_malang_city_connect.webp",
  },
  {
    id: 4,
    title: "Made by Arema Market ",
    description:
      "Etalase kreatif yang mempertemukan brand lokal, kreator, dan startup teknologi guna merayakan inovasi masa depan yang berakar kuat pada identitas lokal Malang melalui zona fesyen, kriya, kuliner, hingga creative hub. Dirancang sebagai panggung kolaborasi tanpa batas untuk mendukung karya terbaik Arek Malang agar siap bersinar dan berdampak di kancah yang lebih luas.",
    image: "/program_made_by_arema_market.webp",
  },
  {
    id: 5,
    title: "Malang Mediart Experience",
    description:
      "Menghadirkan masa depan kreativitas melalui perpaduan spektakuler antara seni, teknologi, dan inovasi. Pengunjung akan disuguhkan pengalaman imersif yang memukau, mulai dari projection mapping dan instalasi interaktif hingga eksplorasi seni berbasis AI dan robotika. Acara ini merupakan wadah kolaborasi visioner yang dirancang untuk menyalakan energi kreatif baru dan membawa ekosistem digital Malang ke level global.",
    image: "/program_malang_mediart_experience.webp",
  },
];

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="relative w-full py-24 md:py-32 lg:py-[356px]"
    >
      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-center md:justify-between lg:mb-24 lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-wider capitalize">
              <Plus className="size-4" />
              <span>Program</span>
            </div>
            <h2 className="text-neutral-off-white max-w-[800px] text-2xl font-medium tracking-tight md:text-5xl lg:text-[64px] lg:leading-snug">
              Mengakselerasi Potensi Ekonomi Kreatif dan Infrastruktur Digital
              Nasional.
            </h2>
          </div>
          <p className="text-neutral-off-white/80 max-w-[450px] pt-5 text-sm leading-relaxed font-normal md:pt-10 md:text-left md:text-base lg:text-2xl">
            Sebuah ajakan kolaborasi eksklusif bagi Mitra Korporasi untuk
            terhubung, berinteraksi, dan mengamankan posisi merek di hadapan
            lebih dari 10.000 inovator startup, pelaku industri kreatif, dan
            ekosistem digital terintegrasi.
          </p>
        </div>

        {/* Programs List */}
        <div className="mt-20 flex flex-col gap-20 md:mt-64 lg:gap-32">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group flex flex-col items-center gap-10 md:flex-row md:gap-16 lg:gap-24"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-[16px] bg-brand-navy md:aspect-4/3 md:w-[45%] md:rounded-[24px] lg:aspect-16/11 lg:w-[45%]">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="scale-[1.02] object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Container */}
              <div className="flex w-full flex-col md:w-[55%] md:pt-0 lg:w-[50%]">
                <div className="text-neutral-off-white flex h-8 w-8 items-center justify-center rounded-full border border-white/20 font-medium">
                  {program.id}
                </div>
                <h3 className="text-neutral-off-white mt-5 text-2xl font-medium tracking-tight md:text-3xl lg:text-[40px]">
                  {program.title}
                </h3>
                <p className="text-neutral-off-white mt-4 max-w-[560px] text-xs leading-relaxed font-light md:text-sm lg:text-xl lg:leading-8">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
