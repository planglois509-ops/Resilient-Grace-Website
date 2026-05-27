"use client";

export function CredentialsMarquee() {
  const items = [
    "Certified Integrative Health Coach",
    "Certified Mental Health & Addiction Recovery Coach",
    "Certified Yoga Teacher",
    "Trauma-Informed Mindfulness Mentor",
    "Family-Systems & Somatic Therapy Background",
    "13+ Years in Practice",
    "30+ Years Lived Recovery",
  ];
  const loop = [...items, ...items];

  return (
    <section className="border-y border-midnight/10 bg-mist py-7 overflow-hidden relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-mist to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-mist to-transparent z-10" />
      <div className="flex gap-12 whitespace-nowrap rg-marquee-track">
        {loop.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="font-display italic text-midnight/70 text-[18px] flex items-center gap-12"
          >
            {label}
            <span className="inline-block h-2 w-2 rounded-full bg-amethyst" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes rg-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .rg-marquee-track {
          animation: rg-marquee 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
