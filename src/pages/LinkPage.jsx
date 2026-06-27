import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    name: "Discord",
    description: "Our most active channel — daily conversations, job postings, project collabs, and announcements.",
    members: "180+",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
      </svg>
    ),
    color: "#818cf8",
    cta: "Join Discord",
    href: "#",
  },
  {
    name: "Meetup.com",
    description: "RSVP for in-person events, workshops, and networking nights. Stay informed about all community gatherings.",
    members: "120+",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-red-400">
        <path d="M19.24 5.88c-1.02-4.71-5.85-4.71-5.85-4.71S9.44-.11 7.17 3.96c-2.33 0-4.66 1.98-4.66 4.66 0 2.45 1.87 4.43 4.23 4.64-.26.82-.41 1.69-.41 2.59C6.33 19.49 9.84 23 14.08 23s7.75-3.51 7.75-7.75c0-1.59-.48-3.06-1.29-4.29.49-.62.77-1.39.7-2.08z"/>
      </svg>
    ),
    color: "#f87171",
    cta: "Follow on Meetup",
    href: "#",
  },
  {
    name: "LinkedIn Group",
    description: "Professional updates, job opportunities, and industry news curated for the Red Deer tech scene.",
    members: "95+",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "#60a5fa",
    cta: "Connect on LinkedIn",
    href: "#",
  },
  {
    name: "Newsletter",
    description: "Monthly digest of local tech news, event recaps, startup spotlights, and curated resources.",
    members: "350+",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-cyan-400">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: "#22d3ee",
    cta: "Subscribe Free",
    href: "#",
  },
];

export default function LinkPage() {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); }
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
          <span className="badge mb-6 inline-flex"><span className="pill-dot" /> Community Hub</span>
          <h1
            className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where the <span className="gradient-text">Community</span> Lives
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Connect with Red Deer's tech builders across every platform.
            Pick the channel that works best for you.
          </p>
        </div>
      </div>

      {/* Platforms Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <span className="section-label reveal">Find Us On</span>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {platforms.map((p, i) => (
            <div key={i} className="reveal glass-card p-8" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: p.color + "15", border: `1px solid ${p.color}30` }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                    <span className="text-sm font-bold" style={{ color: p.color }}>{p.members} members</span>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-zinc-400 text-sm leading-6">{p.description}</p>
              <a
                href={p.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                style={{ color: p.color }}
              >
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 reveal">
          <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-indigo-500/5 pointer-events-none" />
            <div className="relative z-10">
              <span className="section-label">Stay In The Loop</span>
              <h2
                className="mt-4 text-3xl md:text-5xl font-semibold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Join the Newsletter
              </h2>
              <p className="mt-4 text-zinc-400 max-w-md mx-auto text-sm leading-6">
                Monthly roundup of events, startup news, developer resources, and
                what's happening in the Red Deer tech scene.
              </p>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input-field flex-1"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe Free
                  </button>
                </form>
              ) : (
                <div className="mt-8 flex items-center justify-center gap-3 text-cyan-400 font-semibold">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  You're in! Welcome to the community.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
