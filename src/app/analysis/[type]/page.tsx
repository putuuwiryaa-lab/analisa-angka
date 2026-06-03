type AnalysisPageProps = {
  params: Promise<{ type: string }>;
};

export default async function AnalysisPage({ params }: AnalysisPageProps) {
  const { type } = await params;

  return (
    <main className="page">
      <section className="panel-card">
        <p className="eyebrow">Analisa</p>
        <h1>{type.toUpperCase()}</h1>
        <p className="muted">Halaman analisa akan dimigrasikan bertahap dari repo lama, tanpa membawa CSS legacy.</p>
      </section>
    </main>
  );
}
