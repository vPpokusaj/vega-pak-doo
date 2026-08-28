export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">O nama</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
              Pouzdan veleprodajni partner s dugogodišnjom tradicijom.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Vega-Pak je porodična firma koja se bavi uvozom, pakovanjem i distribucijom prehrambenih proizvoda.
            </p>
            <p>
              Naš asortiman obuhvata kakao proizvode, rižu, biber, širok izbor začina i prehrambenih sirovina. Pored proizvoda iz uvoza, proizvodimo i vlastiti univerzalni začin Dukat.
            </p>
            <p>
              Naši proizvodi namijenjeni su trgovcima, ugostiteljima, proizvođačima i drugim poslovnim kupcima.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
