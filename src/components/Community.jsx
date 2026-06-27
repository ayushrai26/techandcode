import { useEffect, useRef } from "react";

export default function CommunityIntro() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const stats = [
    { number: "200+", label: "Members" },
    { number: "3+", label: "Years Active" },
    { number: "50+", label: "Events Held" },
    { number: "12+", label: "Startups Launched" },
  ];

  return (
    <section ref={ref} className="relative bg-[#09090B] text-white py-20 sm:py-24 lg:py-32 overflow-hidden">

      {/* Subtle BG Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-cyan-500/4 blur-[100px] sm:blur-[130px] lg:blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">

        {/* Label */}
        <span className="section-label reveal">About The Community</span>

        {/* Big name */}
        <h2
          className="reveal reveal-delay-1 mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-[0.95] tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hi,
          <br />
          <span className="gradient-text">I'm Jeff.</span>
        </h2>

        <p className="reveal reveal-delay-2 mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-400 max-w-3xl font-light leading-snug">
          Formerly of Sask, AB, BC —<br />and now in Red Deer.
        </p>

        {/* Divider */}
        <div className="reveal reveal-delay-3 my-10 sm:my-12 lg:my-14 h-px bg-white/10 max-w-5xl"/>

        {/* Main bio */}
       {/* Main Content */}
<div className="mt-10 grid lg:grid-cols-[1fr_360px] gap-12 items-start">

  {/* Story */}
  <div className="reveal reveal-delay-3">

    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-400 max-w-4xl">
      Having been involved in businesses, startups and the tech community in
      several regions — I know there is{" "}
      <span className="text-white font-medium">
        great value in creating a strong local community,
      </span>{" "}
      sharing what we know and meeting to talk tech, programming,
      startups and product.
    </p>

    <p className="mt-8 text-lg text-zinc-500 leading-8 max-w-3xl">
      Technology has made it easier than ever to build companies from
      anywhere. My goal is to create a place where founders, developers,
      designers and curious builders can connect, learn and grow together—
      right here in Central Alberta.
    </p>

  </div>

  {/* Founder Card */}
  <div className="reveal reveal-delay-4">

    <div className="glass-card overflow-hidden rounded-3xl">

      {/* Image */}
      <div className="relative">

        <img
          src="/founder.png"
          alt="Jeff"
          className="w-full h-[380px] object-cover transition duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#09090B] via-transparent to-transparent" />

      </div>

      {/* Card Content */}
      <div className="p-6">

        <div className="text-xs uppercase tracking-[0.25em] text-cyan-400">
          Founder
        </div>

        <h3 className="mt-2 text-2xl font-semibold">
          Jeff
        </h3>

        <p className="mt-1 text-zinc-500">
          Red Deer Tech & Startups
        </p>

        <div className="h-px bg-white/10 my-5" />

        <p className="text-sm leading-7 text-zinc-400 italic">
          “Great companies don't have to start in big cities.
          They start wherever passionate people decide to build.”
        </p>

      </div>

    </div>

  </div>

</div>

        {/* Stats */}
        <div className="reveal reveal-delay-4 mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-5 sm:p-6 text-center">
              <div className="stat-number gradient-text">{s.number}</div>
              <div className="stat-label mt-1 sm:mt-2">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}