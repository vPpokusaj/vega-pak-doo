import { Boxes, Globe2, PackageCheck, Scale } from 'lucide-react'

const items = [
  { icon: Globe2, label: 'UVOZ', text: 'Pouzdan uvoz prehrambenih proizvoda' },
  { icon: Boxes, label: 'VELEPRODAJA', text: 'Rješenja za poslovne kupce' },
  { icon: PackageCheck, label: 'PAKOVANJE', text: 'Pakovana roba prema potrebama' },
  { icon: Scale, label: 'RINFUZA I PAKOVANA ROBA', text: 'Fleksibilan asortiman i formati' },
]

export function UspStrip() {
  return (
    <section aria-label="Naše usluge" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border lg:grid-cols-4 lg:divide-y-0">
        {items.map(({ icon: Icon, label, text }) => (
          <div key={label} className="flex items-start gap-3 px-5 py-5 sm:px-8">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary">{label}</p>
              <p className="mt-1 text-sm leading-5 text-muted-foreground">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
