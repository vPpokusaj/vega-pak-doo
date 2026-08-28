export function HeroSection() {
  return (
    <section className="relative overflow-hidden" id="top">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">Vega-Pak Doo Hadžići</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl font-bold leading-[1.06] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Dobri proizvodi počinju dobrim sirovinama.
          </h1>
          <div className="mt-8 grid max-w-5xl gap-6 border-t border-border pt-6 md:grid-cols-3">
            <p className="text-base leading-7 text-muted-foreground">U Vega-Paku uvozimo, pakujemo i distribuiramo prehrambene proizvode za trgovce, ugostitelje i proizvođače.</p>
            <p className="text-base leading-7 text-muted-foreground">Posebno smo usmjereni na kakao proizvode, a u našoj ponudi su i riža, začini i prehrambene sirovine, uz naš vlastiti univerzalni začin Dukat.</p>
            <p className="text-base leading-7 text-muted-foreground">Proizvode nudimo u rinfuzi i različitim pakovanjima, u skladu s potrebama naših kupaca.</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="inline-flex justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-accent">Naši proizvodi</a>
            <a href="#contact" className="inline-flex justify-center rounded-full border border-foreground px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background">Kontaktirajte nas</a>
          </div>
        </div>
      </div>
    </section>
  )
}
