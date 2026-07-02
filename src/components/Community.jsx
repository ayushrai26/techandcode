import { useEffect, useRef } from "react";
import GlobeIntro from "./GlobeIntro";

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
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#09090B] text-white py-16 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6">

        <GlobeIntro />

        {/* Main Layout */}
        <div className="mt-12 lg:mt-20 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-28">

          {/* Left Image */}
          <div className="reveal reveal-delay-2 shrink-0 w-full lg:w-auto">
            <div className="overflow-hidden bg-zinc-900 rounded-sm">
              <img
                src="/founder.png"
                alt="Jeff"
                className="w-full lg:w-[520px] h-[340px] sm:h-[420px] lg:h-[640px] object-cover object-top grayscale transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="reveal reveal-delay-3 w-full lg:max-w-[410px]">

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hi,
              <br />
              I'm Jeff.
            </h2>

            <p className="mt-7 lg:mt-10 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-zinc-300">
              Having been involved in businesses, startups and the tech community in
              several regions, I know there is great value in creating a strong local
              community where people can share ideas, learn from each other and build
              meaningful relationships.
            </p>

            <p className="mt-5 lg:mt-7 text-[15px] sm:text-[17px] leading-7 sm:leading-8 text-zinc-500">
              Technology has made it easier than ever to build companies from
              anywhere. My goal is to create a place where founders, developers,
              designers and curious builders can connect, collaborate and grow
              together—right here in Central Alberta.
            </p>

            <div className="mt-8 lg:mt-10">
              <button className="w-full sm:w-auto border border-white/15 px-6 py-3.5 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                Join Community
              </button>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="reveal reveal-delay-4 mt-16 lg:mt-24 h-px bg-white/10" />

        {/* Stats */}
        <div className="reveal reveal-delay-4 mt-10 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="border border-white/10 p-5 sm:p-8 text-center backdrop-blur-sm"
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.number}
              </div>

              <div className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500">
                {item.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}