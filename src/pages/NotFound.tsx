import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="bg-intro flex min-h-screen flex-col items-center justify-center px-6 text-center">
    <h1 className="text-metal font-display text-[clamp(5rem,20vw,12rem)] leading-none">404</h1>
    <p className="mt-2 text-sm text-muted">This page doesn&rsquo;t exist.</p>
    <Link
      to="/"
      className="mt-8 rounded-full bg-pill px-7 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-white"
    >
      Back to portfolio
    </Link>
  </main>
);

export default NotFound;
