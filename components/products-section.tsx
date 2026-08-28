import { Coffee, Flame, Grip, Leaf, Sparkles, Wheat } from 'lucide-react'

const categories = [
  { icon: Wheat, name: 'Riža', items: 'Dugo zrno · Okruglo zrno', description: 'Riža za različite potrebe trgovine, ugostiteljstva i prehrambene industrije.' },
  { icon: Leaf, name: 'Začini', items: 'Biber · Paprika · Kurkuma · Kari · Cimet i drugi začini', description: 'Širok izbor začina koje uvozimo i pakujemo za različite potrebe naših kupaca.' },
  { icon: Grip, name: 'Prehrambene sirovine', items: 'Mononatrijev glutaminat (MSG) · Dekstroza · i druge sirovine', description: 'Sirovine za potrebe prehrambene industrije i proizvodnje.' },
  { icon: Sparkles, name: 'Dukat', items: '', description: 'Naš vlastiti univerzalni začin.' },
]

export function ProductsSection() {
  return (
    <section id="products" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="border-b border-border pb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Proizvodi</span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground text-balance sm:text-5xl">Naši proizvodi</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Od kakao proizvoda i riže do začina i prehrambenih sirovina.</p>
        </div>

        <article className="mt-10 border border-cocoa bg-cocoa p-7 text-primary-foreground sm:p-10">
          <div className="flex flex-col gap-10 overflow-hidden lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 text-primary-foreground/85"><Coffee className="h-6 w-6" /><span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Glavna kategorija</span></div>
              <h3 className="mt-6 font-serif text-4xl font-bold sm:text-6xl">Kakao proizvodi</h3>
              <p className="mt-5 text-lg leading-7 text-primary-foreground/85">Kompletna linija kakao proizvoda za potrebe prehrambene industrije, dostupna u rinfuzi i različitim pakovanjima.</p>
            </div>
            <div className="grid min-w-[28rem] grid-cols-4 gap-2 text-center sm:gap-4">
              {['Prirodni kakao', 'Alkalni kakao', 'Kakao masa', 'Kakao butter'].map((item) => <div key={item} className="border-l border-primary-foreground/30 px-2 sm:px-3"><div className="mx-auto mb-3 h-2 w-2 rounded-full bg-primary-foreground" /><p className="whitespace-nowrap text-xs font-bold leading-5 text-primary-foreground/90 sm:text-sm">{item}</p></div>)}
            </div>
          </div>
        </article>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon
            return <article key={category.name} className="border border-border bg-card p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4"><span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span></div>
              <h3 className="mt-8 font-serif text-2xl font-bold text-foreground">{category.name}</h3>
              {category.items && <p className="mt-3 text-sm font-semibold leading-6 text-primary">{category.items}</p>}
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>
            </article>
          })}
        </div>
      </div>
    </section>
  )
}
