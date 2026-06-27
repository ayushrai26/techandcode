import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const startups = [
  {
    name: "AgriTech Alberta",
    description: "Precision farming software connecting Red Deer farmers with real-time soil and weather analytics.",
    stage: "Seed",
    industry: "AgriTech",
    founded: "2024",
    color: "#34d399",
  },
  {
    name: "BuildFlow",
    description: "AI-powered project management tool for local contractors, streamlining bids and timelines.",
    stage: "Pre-Seed",
    industry: "PropTech",
    founded: "2024",
    color: "#22d3ee",
  },
  {
    name: "MedLocal",
    description: "Connecting rural Albertans with virtual specialists — reducing wait times by 60%.",
    stage: "Series A",
    industry: "HealthTech",
    founded: "2023",
    color: "#f472b6",
  },
  {
    name: "EduGrid",
    description: "Gamified STEM curriculum for K–12 schools in Central Alberta. Built by teachers for teachers.",
    stage: "Seed",
    industry: "EdTech",
    founded: "2024",
    color: "#818cf8",
  },
  {
    name: "RelyChain",
    description: "Supply-chain transparency tool for Alberta's energy sector using distributed ledger tech.",
    stage: "Pre-Seed",
    industry: "CleanTech",
    founded: "2025",
    color: "#fb923c",
  },
  {
    name: "ShopLocal AI",
    description: "Hyper-local recommendation engine helping residents discover and support Red Deer businesses.",
    stage: "Ideation",
    industry: "Commerce",
    founded: "2025",
    color: "#a78bfa",
  },
];

const resources = [
  { title: "Founder Office Hours", desc: "Weekly 1-on-1 sessions with experienced local founders. No pitch decks needed — just conversation.", icon: "🗓" },
  { title: "Startup Pitch Nights", desc: "Quarterly events where startups present to the community and a panel of local investors.", icon: "🎤" },
  { title: "Co-Founder Matching", desc: "We help technical and business folks find each other to form well-rounded founding teams.", icon: "🤝" },
  { title: "Resource Library", desc: "Curated guides on product development, fundraising, legal setup, and growth — Alberta-focused.", icon: "📚" },
];

export default function StartupsPage() {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => { if (en.isIntersecting) en.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const stageColor = (stage) => {
    const m = { "Ideation": "#71717a", "Pre-Seed": "#22d3ee", "Seed": "#818cf8", "Series A": "#f472b6" };
    return m[stage] || "#71717a";
  };

  return (
    <div ref={ref} className="min-h-screen bg-[#09090B] text-white page-enter overflow-x-hidden">
      <div className="page-glow-left" />
      <div className="page-glow-right" />

      {/* Hero */}
      <div className="relative overflow-hidden pt-48 pb-20">
        <div className="absolute inset-0">
          <div className="tech-grid absolute inset-0 opacity-40" />
          <div className="noise" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="badge mb-6 inline-flex"><span className="pill-dot" /> Startup Ecosystem</span>
          <h1
            className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Building the Next<br />
            <span className="gradient-text">Alberta Startup</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Red Deer's startup community is small, scrappy, and full of potential.
            We're here to support founders at every stage — from napkin sketch to Series A.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-32">

        {/* Startup Spotlight */}
        <span className="section-label reveal">Startup Spotlight</span>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {startups.map((s, i) => (
            <div
              key={i}
              className="reveal glass-card p-7 cursor-pointer"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Top bar accent */}
              <div className="h-0.5 rounded-full w-12 mb-5" style={{ background: s.color }} />
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-white font-bold text-lg leading-tight">{s.name}</h3>
                <span
                  className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap"
                  style={{ color: stageColor(s.stage), background: stageColor(s.stage) + "15", border: `1px solid ${stageColor(s.stage)}30` }}
                >
                  {s.stage}
                </span>
              </div>
              <p className="text-zinc-400 text-sm leading-6">{s.description}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="tag">{s.industry}</span>
                <span className="text-zinc-600 text-xs">Est. {s.founded}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="mt-24">
          <span className="section-label reveal">How We Support Founders</span>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {resources.map((r, i) => (
              <div key={i} className="reveal glass-card p-8 flex gap-5" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="text-3xl shrink-0">{r.icon}</div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{r.title}</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-6">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 reveal">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <div className="relative z-10">
              <h2
                className="text-3xl md:text-5xl font-semibold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Building Something?
              </h2>
              <p className="mt-4 text-zinc-400 max-w-md mx-auto text-sm leading-6">
                We want to hear about it. Whether you're just starting out or looking to scale,
                the Red Deer tech community is here to help.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/meetups" className="btn-primary">
                  Attend Pitch Night
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Get Startup Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
