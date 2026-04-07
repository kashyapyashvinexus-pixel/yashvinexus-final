import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold text-white">Yashvi Nexus</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Premium consulting and property advisory for businesses, investors, and decision-makers seeking trusted guidance with measurable outcomes.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-amber-400/40 hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-amber-400/40 hover:text-white"><FaInstagram /></a>
            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919978759097'}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-amber-400/40 hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Quick Links</h4>
          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/properties" className="hover:text-white">Properties</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">Contact</h4>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <p>Ahmedabad, Gujarat, India</p>
            <p>hello@yashvinexus.com</p>
            <p>+91 99787 59097</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Yashvi Nexus. All rights reserved.</p>
          <p>Built for premium B2B lead generation and trust-first branding.</p>
        </div>
      </div>
    </footer>
  );
}
