import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  {
    date: "Jul 15, 2025",
    day: "Tue",
    title: "React & Modern Frontend Workshop",
    location: "Innovation Hub, Red Deer",
    spots: 30,
    tag: "Workshop",
    tagColor: "#22d3ee",
  },
  {
    date: "Jul 28, 2025",
    day: "Mon",
    title: "Startup Pitch Night — Summer Edition",
    location: "The Collider, Downtown RD",
    spots: 60,
    tag: "Networking",
    tagColor: "#818cf8",
  },
  {
    date: "Aug 5, 2025",
    day: "Tue",
    title: "AI & Machine Learning: Practical Applications",
    location: "Red Deer Polytechnic",
    spots: 45,
    tag: "Talk",
    tagColor: "#c084fc",
  },
  {
    date: "Aug 19, 2025",
    day: "Tue",
    title: "Open Source Hack Night",
    location: "Hybrid — In-Person + Online",
    spots: 40,
    tag: "Hackathon",
    tagColor: "#34d399",
  },
  {
    date: "Sep 3, 2025",
    day: "Wed",
    title: "Product Thinking for Developers",
    location: "Central Library, RD",
    spots: 35,
    tag: "Workshop",
    tagColor: "#22d3ee",
  },
];

const pastHighlights = [
  { title: "Cloud Architecture Deep Dive", attendees: 38, date: "May 2025" },
  { title: "Founders & Developers Mixer", attendees: 55, date: "Apr 2025" },
  { title: "DevOps & CI/CD Masterclass", attendees: 29, date: "Mar 2025" },
];

export default function MeetupsPage() {
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

  return (
    <div
  ref={ref}
  className="min-h-screen bg-[#09090B] text-white page-enter overflow-x-hidden"
>
      <div className="page-glow-left" />
      <div className="page-glow-right" />

      {/* Hero */}
      <div className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0">
          <div className="tech-grid absolute inset-0 opacity-50" />
          <div className="noise" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 text-center">
          <span className="badge mb-6 inline-flex">
            <span className="pill-dot" />
            Upcoming Events
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meetups &amp; <span className="gradient-text">Events</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Regular gatherings for Red Deer's tech community — workshops, talks,
            networking nights, and hackathons all under one roof.
          </p>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 pb-20 sm:pb-24 lg:pb-32">
        <span className="section-label reveal">What's Coming Up</span>

        <div className="mt-6">
          {upcomingEvents.map((ev, i) => (
            <div
              key={i}
              className="reveal event-card flex flex-col sm:flex-row gap-5 sm:gap-6"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Date Block */}
              <div className="shrink-0 w-full sm:w-16 text-left sm:text-center">
                <div className="text-xs text-zinc-600 uppercase tracking-wider">{ev.day}</div>
                <div className="text-cyan-400 font-bold text-sm mt-1">{ev.date.split(",")[0]}</div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="event-title text-lg font-semibold text-white transition-colors duration-300 wrap-break-word sm:truncate">
                  {ev.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-2 flex items-center gap-2 flex-wrap">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {ev.location}
                </p>
              </div>

              {/* Tag + Spots */}
              <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between gap-3 shrink-0">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ color: ev.tagColor, background: ev.tagColor + "15", border: `1px solid ${ev.tagColor}30` }}
                >
                  {ev.tag}
                </span>
                <span className="text-xs text-zinc-600">{ev.spots} spots</span>
              </div>

              {/* Arrow */}
              <svg className="event-arrow w-5 h-5 self-end sm:self-center" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          ))}
        </div>

        {/* Past Events */}
        <div className="mt-24 reveal">
          <span className="section-label">Past Highlights</span>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {pastHighlights.map((e, i) => (
              <div key={i} className="glass-card p-5 sm:p-6">
                <p className="text-xs text-zinc-600 uppercase tracking-widest">{e.date}</p>
                <h4 className="mt-3 text-white font-semibold leading-snug">{e.title}</h4>
                <p className="mt-4 text-cyan-400 text-sm font-semibold">{e.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 reveal glass-card p-6 sm:p-8 lg:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white">Host an Event</h3>
          <p className="mt-3 text-zinc-400 max-w-md mx-auto text-sm leading-6 px-2 sm:px-0">
            Have a topic you're passionate about? We'd love to help you run a talk,
            workshop or meetup for the Red Deer tech community.
          </p>
          <Link to="/contact" className="btn-primary mt-7 inline-flex w-full sm:w-auto justify-center">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
