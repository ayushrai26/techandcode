import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Full Stack Developer",
    company: "AgriTech Alberta",
    type: "Full-time",
    location: "Red Deer, AB",
    salary: "$80K–$110K",
    tags: ["React", "Node.js", "PostgreSQL"],
    posted: "2 days ago",
    color: "#34d399",
    hot: true,
  },
  {
    title: "UX Designer",
    company: "BuildFlow",
    type: "Contract",
    location: "Remote (Alberta)",
    salary: "$55–$75/hr",
    tags: ["Figma", "User Research", "Prototyping"],
    posted: "5 days ago",
    color: "#22d3ee",
    hot: false,
  },
  {
    title: "DevOps Engineer",
    company: "MedLocal",
    type: "Full-time",
    location: "Red Deer, AB (Hybrid)",
    salary: "$90K–$120K",
    tags: ["AWS", "Docker", "Terraform"],
    posted: "1 week ago",
    color: "#f472b6",
    hot: true,
  },
  {
    title: "React Native Developer",
    company: "ShopLocal AI",
    type: "Part-time",
    location: "Remote",
    salary: "$45–$65/hr",
    tags: ["React Native", "TypeScript", "Firebase"],
    posted: "3 days ago",
    color: "#a78bfa",
    hot: false,
  },
  {
    title: "Product Manager",
    company: "EduGrid",
    type: "Full-time",
    location: "Red Deer, AB",
    salary: "$85K–$105K",
    tags: ["Agile", "Roadmapping", "B2B SaaS"],
    posted: "2 weeks ago",
    color: "#818cf8",
    hot: false,
  },
  {
    title: "Backend Developer (Python)",
    company: "RelyChain",
    type: "Contract",
    location: "Remote (Canada)",
    salary: "$70–$95/hr",
    tags: ["Python", "FastAPI", "Blockchain"],
    posted: "1 day ago",
    color: "#fb923c",
    hot: true,
  },
];

const skills = [
  "React", "TypeScript", "Node.js", "Python", "AWS", "DevOps",
  "UX Design", "Product", "iOS", "Android", "AI/ML", "Blockchain",
  "Figma", "PostgreSQL", "Docker", "Go",
];

export default function LocalTechHiresPage() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

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

  const types = ["All", "Full-time", "Contract", "Part-time"];

  const filtered = jobs.filter((j) => {
    const matchType = filter === "All" || j.type === filter;
    const matchSearch =
      !search ||
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase()) ||
      j.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchType && matchSearch;
  });

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
          <span className="badge mb-6 inline-flex"><span className="pill-dot" /> Tech Jobs in Central AB</span>
          <h1
            className="text-5xl md:text-7xl font-medium leading-tight tracking-tight mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Local <span className="gradient-text">Tech Hires</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Roles from Red Deer's growing startups and businesses — no commute to Calgary required.
            Build your career right here in Central Alberta.
          </p>
          {/* Search */}
          <div className="mt-10 max-w-lg mx-auto relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Search jobs, skills, companies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-11"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-32">

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-3 mb-10">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                filter === t
                  ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-300"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-zinc-600 text-sm self-center">{filtered.length} roles</span>
        </div>

        {/* Job Cards */}
        <div className="space-y-4">
          {filtered.map((job, i) => (
            <div key={i} className="reveal glass-card p-6 cursor-pointer" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Company initial */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-black shrink-0"
                  style={{ background: job.color }}
                >
                  {job.company[0]}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-white font-semibold text-lg">{job.title}</h3>
                    {job.hot && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30">
                        🔥 Hot
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                    <span className="font-medium" style={{ color: job.color }}>{job.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {job.location}
                    </span>
                    <span>·</span>
                    <span>{job.posted}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="tag text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:items-end gap-3 shrink-0">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ color: job.color, background: job.color + "15", border: `1px solid ${job.color}30` }}
                  >
                    {job.type}
                  </span>
                  <span className="text-white font-semibold text-sm">{job.salary}</span>
                  <button className="btn-primary text-sm py-2 px-5">Apply Now</button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-600">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg">No roles matched your search.</p>
              <p className="text-sm mt-2">Try different keywords or clear filters.</p>
            </div>
          )}
        </div>

        {/* Skills Cloud */}
        <div className="mt-24 reveal">
          <span className="section-label">Skills In Demand</span>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((s) => (
              <button key={s} onClick={() => setSearch(s)} className="tag text-sm cursor-pointer">
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Post a Job CTA */}
        <div className="mt-20 reveal glass-card p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-indigo-500/5 pointer-events-none" />
          <div className="relative z-10">
            <h2
              className="text-3xl md:text-5xl font-semibold text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hiring Locally?
            </h2>
            <p className="mt-4 text-zinc-400 max-w-md mx-auto text-sm leading-6">
              Post your tech role for free and reach hundreds of qualified developers,
              designers, and founders right here in Central Alberta.
            </p>
            <Link to="/contact" className="btn-primary mt-8 inline-flex">
              Post a Free Role
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
