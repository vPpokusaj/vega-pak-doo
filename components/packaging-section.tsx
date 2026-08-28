import { ArrowRight } from 'lucide-react'

export function PackagingSection() {
  return (
    <section id="packaging" className="border-t border-border bg-secondary/45 py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Za poslovne kupce</span>
          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground text-balance sm:text-5xl">Rinfuza ili pakovanje po vašoj potrebi.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Za poslovne kupce nudimo proizvode u rinfuzi i različitim pakovanjima, u zavisnosti od proizvoda i potrebne količine.</p>
        </div>
        <a href="#contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-accent">Zatražite ponudu <ArrowRight className="h-4 w-4" /></a>
      </div>
    </section>
  )
}
