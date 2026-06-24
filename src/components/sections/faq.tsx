import { Accordion } from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqItems = [
  {
    title: "Acara ini buat siapa aja sih?",
    content:
      "Selama kamu punya ketertarikan di dunia startup, seni visual, teknologi digital, craft, atau pengen cari jaringan baru di industri kreatif—kamu wajib dateng!",
  },
  {
    title: "Tiketnya bisa di-refund kalau tiba-tiba ada jadwal mendadak?",
    content:
      "Tiket yang sudah dibeli tidak dapat dikembalikan (non-refundable) kecuali jika acara dibatalkan oleh pihak penyelenggara.",
  },
  {
    title: "Bagaimana cara mendaftar untuk sesi B2B Pitching atau Tenant UMKM?",
    content:
      "Pendaftaran dapat dilakukan melalui link khusus yang akan kami sediakan di Instagram resmi Festival Mbois 11 atau bisa langsung menghubungi panitia melalui kontak yang tertera.",
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
