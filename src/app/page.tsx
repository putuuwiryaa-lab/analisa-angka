import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page page-center">
      <section className="hero-card">
        <p className="eyebrow">Analisa Angka</p>
        <h1>Rebuild bersih dengan Next.js</h1>
        <p className="muted">
          Fondasi baru untuk dashboard, analisa, database lama Supabase, dan scraper GitHub Actions.
        </p>
        <div className="action-row">
          <Link href="/dashboard" className="primary-button">Buka Dashboard</Link>
          <Link href="/login" className="ghost-button">Login</Link>
        </div>
      </section>
    </main>
  );
}
