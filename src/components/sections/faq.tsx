import { Accordion } from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqItems = [
  {
    title: "Apa itu Festival Mbois 11: Malang Menyala?",
    content:
      "Festival Mbois 11 adalah acara perayaan industri kreatif tahunan di Malang. Mengusung tema Malang Menyala, festival ini menjadi wadah bertemunya para kreator, seniman, pelaku UMKM, dan masyarakat luas melalui berbagai rangkaian acara kreatif.",
  },
  {
    title: "Kapan dan di mana Festival Mbois 11 diselenggarakan?",
    content:
      "Acara akan diselenggarakan pada tanggal 21 - 23 Agustus 2026 di Stadion Gajayana Malang.",
  },
  {
    title: "Siapa saja yang bisa hadir di acara ini?",
    content:
      "Festival ini terbuka untuk umum! Mulai dari penikmat seni, penggemar musik, penggiat industri kreatif, hingga keluarga yang ingin menikmati akhir pekan di pasar kreatif.",
  },
  {
    title: "Bagaimana cara menghubungi pihak penyelenggara untuk pertanyaan lebih lanjut atau kerja sama?",
    content:
      "Anda bisa menghubungi kami dengan mengirimkan pesan langsung (DM) melalui Instagram resmi kami di @festivalmbois.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative flex w-full flex-col items-center bg-transparent py-24 md:py-32 lg:py-64">
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mx-auto mb-32 flex max-w-[890px] flex-col items-center text-center">
          <div className="text-neutral-off-white flex items-center gap-2 font-semibold tracking-widest capitalize">
            <Plus className="size-4" />
            <span>FAQs</span>
          </div>
          <h2 className="text-neutral-off-white mt-6 text-3xl font-medium tracking-tight md:text-5xl lg:text-6xl lg:leading-snug">
            Ada Pertanyaan?
          </h2>
          <p className="text-neutral-off-white mt-6 max-w-[890px] text-sm leading-relaxed lg:text-2xl">
            Temukan jawaban cepat seputar pelaksanaan, akses tiket, dan
            keterlibatan ekosistem di Festival Mbois 11.
          </p>
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
