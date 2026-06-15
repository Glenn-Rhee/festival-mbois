import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Creative Brand Market",
    description:
      "Eksibisi komersial yang mengurasi merek lokal progresif dari subsektor mode, kriya, kuliner, dan gaya hidup. Program ini dirancang dengan pendekatan manajemen trafik modern guna memaksimalkan interaksi langsung antara produk konsumen dengan ribuan pengunjung harian dari demografi usia produktif.",
    image: "/creative_brand_market.webp",
  },
  {
    id: 2,
    title: "Creative IP Market",
    description:
      "Forum bisnis khusus yang memfasilitasi negosiasi strategis dan monetisasi Kekayaan Intelektual (Intellectual Property). Menghubungkan secara langsung para kreator konten, ilustrator, dan pengembang aset digital lokal dengan jajaran investor korporasi serta pemangku kepentingan industri skala nasional.",
    image: "/creative_ip_market.webp",
  },
  {
    id: 3,
    title: "Media Art Exhibition",
    description:
      "Eksibisi seni digital imersif yang mengintegrasikan teknologi kecerdasan buatan (Artificial Intelligence) dengan seni rupa kontemporer. Menyajikan pengalaman visual futuristik berteknologi tinggi, memberikan ruang bagi mitra sponsor untuk mengasosiasikan merek mereka dengan konsep inovasi dan teknologi terdepan.",
    image: "/media_exhibition.webp",
  },
  {
    id: 4,
    title: "City Activation",
    description:
      "Aktivasi ruang publik berskala masif dengan mengintegrasikan elemen arsitektur warisan budaya (heritage) menggunakan teknologi projection mapping, pencahayaan teatrikal, dan instalasi interaktif. Program ini menjamin jangkauan publikasi yang luas serta dokumentasi media yang bernilai tinggi bagi visibilitas sponsor.",
    image: "/city_activation.webp",
  },
  {
    id: 5,
    title: "National Summit",
    description:
      "Konferensi tingkat tinggi ekonomi kreatif yang mempertemukan jajaran regulator pemerintahan, direksi BUMN, dan pemimpin industri digital. Forum ini fokus pada perumusan kebijakan strategis dan pemetaan tren industri, memposisikan entitas sponsor di barisan terdepan penggerak ekonomi nasional.",
    image: "/nasional_summit.webp",
  },
];

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="relative w-full bg-[#111B26] py-24 md:py-32 lg:py-[356px]"
    >
      {/* Background Glow (Connecting from Festival Video Section) */}
      <div className="pointer-events-none absolute top-40 right-0 z-0 h-[300px] w-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(227,136,204,0.5)_15%,rgba(227,136,204,0.2)_40%,transparent_70%)] blur-[50px] md:h-[1000px] md:w-[1000px] md:blur-[120px]" />

      {/* Original Background glow */}
      <div className="pointer-events-none absolute top-1/3 left-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(100,40,180,0.10)_0%,transparent_65%)] blur-2xl md:h-[800px] md:w-[800px] md:blur-[100px]" />

      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-center md:justify-between lg:mb-24 lg:items-end">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F2F2F2] capitalize md:text-sm">
              <span>+</span>
              <span>Program</span>
            </div>
            <h2 className="max-w-[800px] text-2xl font-medium tracking-tight text-[#F2F2F2] md:text-5xl lg:text-7xl lg:leading-snug">
              Mengakselerasi Potensi Ekonomi Kreatif dan Infrastruktur Digital
              Nasional.
            </h2>
          </div>
          <p className="max-w-[450px] pt-5 text-sm leading-relaxed font-normal text-[#F2F2F2]/80 md:pt-10 md:text-left md:text-base lg:text-2xl">
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
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-[16px] md:aspect-4/3 md:w-[45%] md:rounded-[24px] lg:aspect-16/11 lg:w-[45%]">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Container */}
              <div className="flex w-full flex-col md:w-[55%] md:pt-0 lg:w-[50%]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 font-medium text-[#f2f2f2]">
                  {program.id}
                </div>
                <h3 className="mt-5 text-2xl font-medium tracking-tight text-[#F2F2F2] md:text-3xl lg:text-[40px]">
                  {program.title}
                </h3>
                <p className="mt-4 max-w-[560px] text-xs leading-relaxed font-light text-[#F2F2F2] md:text-sm lg:text-xl lg:leading-8">
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
