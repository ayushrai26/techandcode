import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] pt-40 pb-32 text-white min-h-screen flex flex-col justify-center">

      {/* Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-grid absolute inset-0" />
        <div className="absolute -left-56 top-20 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-[180px]" />
        <div className="absolute right-[-250px] bottom-[-200px] h-[700px] w-[700px] rounded-full bg-indigo-600/8 blur-[180px]" />

        {/* Network Lines – Horizontal */}
        <div className="network-line left-[8%] top-[30%] h-[2px] w-[420px]" />
        <div className="network-line left-[45%] top-[62%] h-[2px] w-[380px]" />
        {/* Network Lines – Vertical */}
        <div className="network-line vertical left-[34%] top-[28%] h-[260px] w-[2px]" />
        <div className="network-line vertical left-[72%] top-[18%] h-[320px] w-[2px]" />
        {/* Nodes */}
        <div className="network-node left-[8%] top-[30%]" />
        <div className="network-node left-[34%] top-[30%]" />
        <div className="network-node left-[34%] top-[62%]" />
        <div className="network-node left-[45%] top-[62%]" />
        <div className="network-node left-[72%] top-[18%]" />
        <div className="network-node left-[72%] top-[53%]" />

        {/* Giant code symbols */}
        <div className="pointer-events-none absolute left-8 top-12 text-[18rem] font-black text-white/[0.022] leading-none select-none">{"</>"}</div>
        <div className="pointer-events-none absolute right-8 bottom-8 text-[15rem] font-black text-white/[0.018] leading-none select-none">{"{}"}</div>

        {/* Noise */}
        <div className="noise" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">

        {/* Badge */}
        <div className="mb-10 flex justify-center">
          <span className="badge">
            <span className="pill-dot" />
            Red Deer Tech &amp; Code
          </span>
        </div>

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Building Connections,
            <br />
            <span className="gradient-text">Growing Startups,</span>
            <br />
            Inspiring Developers.
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-zinc-400">
            Join Red Deer's growing technology community where developers,
            founders and innovators come together to learn, collaborate and
            create opportunities.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/meetups" className="btn-primary">
            Explore Meetups
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
          <Link to="/link" className="btn-ghost">
            Join Community
          </Link>
        </div>

        {/* Quote */}
        <div className="mt-24 border-t border-zinc-800/70 pt-10">
          <blockquote className="mx-auto max-w-3xl text-center text-xl font-light leading-9 text-zinc-500 md:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            "Technology grows stronger when people build together—not alone."
          </blockquote>
        </div>

        {/* Tags */}
       {/* Infinite Marquee */}
<div className="mt-16 overflow-hidden rounded-full border border-zinc-800 bg-black/30 backdrop-blur-xl py-4">
  <div className="marquee">
    <div className="marquee-content text-cyan-300">
      <span>MEETUPS</span>
      <span>◆</span>
      <span>NETWORKING</span>
      <span>◆</span>
      <span>STARTUPS</span>
      <span>◆</span>
      <span>LOCAL TECH</span>
      <span>◆</span>
      <span>AI</span>
      <span>◆</span>
      <span>WEB DEVELOPMENT</span>
      <span>◆</span>
      <span>OPEN SOURCE</span>
      <span>◆</span>
      <span>INNOVATION</span>
      <span>◆</span>
    </div>

    <div className="marquee-content text-cyan-300">
      <span>MEETUPS</span>
      <span>◆</span>
      <span>NETWORKING</span>
      <span>◆</span>
      <span>STARTUPS</span>
      <span>◆</span>
      <span>LOCAL TECH</span>
      <span>◆</span>
      <span>AI</span>
      <span>◆</span>
      <span>WEB DEVELOPMENT</span>
      <span>◆</span>
      <span>OPEN SOURCE</span>
      <span>◆</span>
      <span>INNOVATION</span>
      <span>◆</span>
    </div>
  </div>
</div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator z-10">
        <div className="scroll-indicator-line" />
        <span>Scroll</span>
      </div>

    </section>
  );
}