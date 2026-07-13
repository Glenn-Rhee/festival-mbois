"use client";
import Image from "next/image";
import { useState } from "react";
import Dialog from "../ui/Dialog";

const dataPillar = [
  {
    title: "Malang Sportainment",
    description:
      "Perayaan energi kreatif terbesar yang secara spektakuler menyatukan dunia olahraga, kompetisi esports, dan aksi seni urban dalam satu panggung. Acara ini dirancang sebagai wadah interaksi lintas komunitas yang memadukan keseruan laga kompetitif dengan hiburan modern seperti live music, drone show, hingga festival kuliner.",
    imgUrl: "/program_sportainment_v2.webp",
  },
  {
    title: "Sound of Malang Menyala",
    description:
      "Perayaan energi baru Kota Malang di mana musik, budaya, kreativitas, dan teknologi bertemu dalam satu kesatuan. Pengunjung akan disuguhkan pengalaman multisensori, mulai dari panggung musik dan seni media interaktif, hingga pertunjukan budaya dan pasar ekonomi kreatif yang semarak, semuanya dirancang untuk menyatukan ribuan orang dalam satu gerakan kreatif yang menginspirasi.",
    imgUrl: "/program_sportainment_v2.webp",
  },
  {
    title: "Malang City Connect",
    description:
      "Konferensi dan forum bisnis strategis yang menjadi titik temu bagi para pemimpin kota, pelaku industri, investor, akademisi, dan komunitas kreatif untuk mendorong ekosistem inklusif dan berkelanjutan. Acara ini mengintegrasikan berbagai program utama seperti Creative City Summit, Business Matching, hingga MBOIS Al & Creative Pitch guna mengubah ide inovatif menjadi investasi dan dampak nyata bagi masa depan industri kreatif Indonesia.",
    imgUrl: "/program_sportainment_v2.webp",
  },
  {
    title: "Made by Arema Market",
    description:
      "Etalase kreatif yang mempertemukan brand lokal, kreator, dan startup teknologi guna merayakan inovasi masa depan yang berakar kuat pada identitas lokal Malan melalui zona fesyen, kriya, kuliner, hingga creative hub. Dirancang sebagai panggung kolaborasi tanpa batas untuk mendukung karya terbaik Arek Malang agar siap bersinar dan berdampak di kancah yang lebih luas.",
    imgUrl: "/program_sportainment_v2.webp",
  },
  {
    title: "Malang Mediart Experience",
    description:
      "Menghadirkan masa depan kreativitas melalui perpaduan spektakuler antara seni, teknologi, dan inovasi. Pengunjung akan disuguhkan pengalaman imersif yang memukau, mulai dari projection mapping dan instalasi interaktif hingga eksplorasi seni berbasis Al dan robotika. Acara ini merupakan wadah kolaborasi visioner yang dirancang untuk menyalakan energi kreatif baru dan membawa ekosistem digital Malang ke level global.",
    imgUrl: "/program_sportainment_v2.webp",
  },
];

export default function PillarSection() {
  const [selectedPillar, setSelectedPillar] = useState<
    (typeof dataPillar)[number] | null
  >(null);

  return (
    <section
      id="pillar"
      className="relative w-full overflow-hidden py-14 md:py-18"
    >
      <div className="absolute top-2 -right-70 size-80 rounded-full bg-[#f61d89] blur-[150px]" />
      <div className="flex flex-col items-center gap-y-6 text-[#F2F2F2]">
        <span className="block text-center font-semibold">+ Program</span>
        <h2 className="text-6xl leading-[90.19px] font-medium">
          5 Pilar Festival MBOIS 11
        </h2>
        <p className="w-4xl text-center text-2xl text-[#F2F2F2]/80">
          Sebuah ajakan kolaborasi eksklusif bagi Mitra Korporasi untuk
          terhubung, berinteraksi, dan mengamankan posisi merek di hadapan lebih
          dari 10.000 inovator startup, pelaku industri kreatif, dan ekosistem
          digital terintegrasi.
        </p>
      </div>

      <div className="mt-8 flex w-full flex-wrap justify-center gap-x-6 gap-y-10">
        {dataPillar.map((dp) => (
          <div
            role="button"
            key={dp.title}
            onClick={() => setSelectedPillar(dp)}
            className="relative w-full max-w-sm cursor-pointer overflow-hidden rounded-xl border border-white/50 bg-white/5 px-6 py-4 shadow-xl backdrop-blur-md sm:w-[calc(50%-1rem)] lg:w-[calc(30%-1rem)]"
          >
            <div className="relative aspect-video w-full">
              <Image
                src={dp.imgUrl}
                alt={dp.title + " image"}
                fill
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-linear-to-b from-[#5693FD]/70 to-[#25CFEF]/70" />
              <div className="absolute inset-0 flex items-center justify-center px-5 py-4 text-center">
                <span className="text-2xl font-extrabold text-[#F2F2F2] drop-shadow-[0_0_16px_rgba(255,255,255,0.6)]">
                  {dp.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog isOpen={!!selectedPillar} onClose={() => setSelectedPillar(null)}>
        {selectedPillar && (
          <div className="relative grid min-h-80 w-full max-w-2xl grid-cols-2 gap-x-8 rounded-xl border border-white bg-[#8d00478c] p-6 opacity-90">
            {" "}
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={"/program_sound_of_malang_menyala_v2.webp"}
                alt={selectedPillar.title + " image"}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex w-full flex-col gap-y-4">
              <div className="flex size-8 items-center justify-center rounded-full border border-white text-lg font-semibold">
                {dataPillar.indexOf(selectedPillar) + 1}
              </div>
              <h6 className="w-full text-2xl font-semibold">
                {selectedPillar.title}
              </h6>
              <p className="text-sm text-[#F2F2F2]/80">
                {selectedPillar.description}
              </p>
              <button className="mt-auto w-full rounded-lg border border-[#F61D89] py-2.5 text-xs font-medium transition hover:border-white hover:bg-white hover:text-black">
                Lihat Detail
              </button>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
