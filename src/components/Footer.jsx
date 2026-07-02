import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60 bg-[#09090B] py-16 mt-0">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-5">
              <span className="text-xl font-bold text-white">Red Deer</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-zinc-500">TECH & CODE</span>
            </div>
            <p className="text-zinc-500 text-sm leading-6 max-w-xs">
              Central Alberta's hub for developers, founders and innovators.
              We build connections, share knowledge, and grow together.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 text-zinc-500 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 text-zinc-500 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 text-zinc-500 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Community</h4>
            <ul className="space-y-3">
              {["Meetups", "Networking", "Startups", "Local Tech Hires", "Resources"].map(l => (
                <li key={l}><a href="#" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Contact", "Privacy", "Terms"].map(l => (
                <li key={l}><a href="#" className="footer-link">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-zinc-800/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">© 2026 Red Deer Tech & Code. All rights reserved.</p>
          <p className="text-zinc-700 text-sm">Central Alberta's Tech Community</p>
        </div>
      </div>
    </footer>
  );
}
