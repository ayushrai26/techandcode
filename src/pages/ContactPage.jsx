import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  };

  return (
    <div ref={ref} className="min-h-screen bg-[#09090B] text-white page-enter">
      <div className="page-glow-left" />
      <div className="page-glow-right" />

      {/* Hero */}
      <div className="relative overflow-hidden pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20">
        <div className="absolute inset-0">
          <div className="tech-grid absolute inset-0 opacity-40" />
          <div className="noise" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="badge mb-6 inline-flex"><span className="pill-dot" /> Say Hello</span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
            Have an idea for an event? Want to collaborate? Interested in the community?
            We're always happy to hear from you.
          </p>
        </div>
      </div>

     <div className="max-w-6xl mx-auto px-5 sm:px-6 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Left Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="reveal">
              <span className="section-label">Contact Info</span>
              <div className="mt-6 space-y-5">
                {[
                  { icon: "📧", label: "Email", value: "hello@reddeertech.ca" },
                  { icon: "📍", label: "Location", value: "Red Deer, Alberta, Canada" },
                  { icon: "🐦", label: "Twitter", value: "@RedDeerTechCode" },
                  { icon: "💬", label: "Discord", value: "discord.gg/reddeertech" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center text-lg shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs text-zinc-600 uppercase tracking-wider">{c.label}</p>
                      <p className="text-white text-sm mt-1">{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="glass-card p-6 sm:p-8 md:p-10">
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-zinc-400 text-sm leading-6">
                  We typically respond within 24–48 hours. For urgent event inquiries,
                  reaching out on Discord is the fastest way to get a reply.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div className="glass-card p-8 md:p-10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">Send a Message</h2>

                  <div cclassName="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Event idea, collaboration, question..."
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      className="input-field"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5 sm:py-4">
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <div className="text-5xl mb-5"></div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">Message Sent!</h3>
                  <p className="mt-3 text-zinc-400 text-sm leading-6 max-w-xs mx-auto px-2">
                    Thanks for reaching out, {form.name.split(" ")[0]}. We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
