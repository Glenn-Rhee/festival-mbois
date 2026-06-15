"use client";

const statisticsData = [
  {
    id: 1,
    label: "Pengunjung",
    value: "20.000+",
  },
  {
    id: 2,
    label: "Pelaku Kreatif",
    value: "500+",
  },
  {
    id: 3,
    label: "Business Matching",
    value: "300+",
  },
  {
    id: 4,
    label: "Potensi Transaksi",
    value: "50 - 150 M",
  },
];

export default function StatistikSection() {
  return (
    <section
      id="statistik"
      className="relative w-full bg-[#111B26] py-14 md:py-72 lg:py-[356px]"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 z-20 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,rgba(227,136,204,0.5)_15%,rgba(227,136,204,0.2)_40%,transparent_70%)] blur-[50px] md:h-[1000px] md:w-[1000px] md:blur-[120px]" />
      <div className="max-w-8xl relative z-10 mx-auto w-full px-6 lg:px-[72px]">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-end md:justify-between lg:mb-24">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F2F2F2] capitalize md:text-sm">
              <span>+</span>
              <span>Statistik</span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-[#F2F2F2] md:text-5xl lg:text-8xl lg:leading-snug">
              Festival Mbois Dalam Angka
            </h2>
          </div>
          <p className="max-w-[500px] text-sm leading-relaxed font-normal text-[#F2F2F2] md:text-right md:text-base lg:text-2xl">
            Mengukur dampak nyata, memetakan pertumbuhan, dan membuka ruang
            integrasi terbesar bagi masa depan ekonomi kreatif.
          </p>
        </div>

        {/* Statistics List */}
        <div className="flex flex-col">
          {statisticsData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-start justify-between border-[#ffffff15] py-8 md:flex-row lg:py-10 ${
                index === 0 ? "border-y" : "border-b"
              }`}
            >
              <h3 className="mb-2 text-base font-medium text-[#F2F2F2] md:mb-0 md:text-lg lg:text-[28px]">
                {item.label}
              </h3>
              <div className="text-5xl font-light tracking-tight text-[#F2F2F2] md:text-6xl lg:text-[128px]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
