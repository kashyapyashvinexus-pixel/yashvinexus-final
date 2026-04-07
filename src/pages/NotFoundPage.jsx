import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <div className="container-shell">
        <div className="glass-card rounded-[32px] p-10 text-center">
          <h1 className="text-4xl font-semibold text-white">Page not found</h1>
          <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
          <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
