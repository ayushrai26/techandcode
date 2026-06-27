import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Meetups", path: "/meetups" },
  { name: "Link", path: "/link" },
  { name: "Startups", path: "/startups" },
  { name: "LocalTechHires", path: "/localtechhires" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [mobileMenu]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:pt-6">
        <div
          className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-zinc-700/70 bg-[#0d1117]/90 backdrop-blur-2xl shadow-2xl"
              : "border-white/6 bg-white/3 backdrop-blur-xl"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-5 lg:h-20 lg:px-8">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none group">
              <span className="text-lg font-bold tracking-tight text-white lg:text-xl group-hover:text-cyan-300 transition-colors duration-300">
                Red Deer
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-zinc-500 group-hover:text-cyan-500 transition-colors duration-300">
                TECH & CODE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2 text-[14px] font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500/12 text-cyan-300"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                to="/contact"
                className="rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-cyan-500 hover:text-white"
              >
                Contact
              </Link>
              <Link
                to="/link"
                className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Join Community
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </Link>
            </div>

            {/* Mobile Menu Btn */}
            <button
              onClick={() => setMobileMenu(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white lg:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-[#09090B] transition-transform duration-500 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Red Deer</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-zinc-500">TECH & CODE</p>
            </div>
            <button
              onClick={() => setMobileMenu(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="mt-14 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-zinc-800/60 py-6 text-3xl font-semibold transition ${
                    isActive ? "text-cyan-400" : "text-zinc-300 hover:text-white"
                  }`
                }
              >
                {item.name}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </NavLink>
            ))}
          </div>

          <div className="mt-auto ">
               

            <Link
              to="/link"
              onClick={() => setMobileMenu(false)}
              className="block w-full rounded-2xl bg-cyan-500 py-4 text-center font-semibold text-black transition hover:bg-cyan-400"
            >
              Join Community
            </Link>
            <p className="mt-5 text-center text-sm text-zinc-500">
              Building Central Alberta's tech community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}