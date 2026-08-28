'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, Smartphone, MapPin, Check } from 'lucide-react'

const details = [
  { icon: Mail, label: 'Email', value: 'vegapak@gmail.com', href: 'mailto:vegapak@gmail.com' },
  { icon: Phone, label: 'Telefon', value: '033 691 460', href: 'tel:033691460' },
  { icon: Smartphone, label: 'Mobitel', value: '060 320 8939', href: 'tel:0603208939' },
  { icon: MapPin, label: 'Adresa', value: 'Mostarska 3, Hadžići 71240', href: null },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-secondary/35 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary">Kontakt</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Partnerstvo počinje razgovorom.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Details + map */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((item) => {
                const content = (
                  <>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="block break-words font-medium text-foreground">
                        {item.value}
                      </span>
                    </span>
                  </>
                )
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 hover:text-primary">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                )
              })}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Lokacija Vega-Pak Doo — Mostarska 3, Hadžići"
                src="https://www.google.com/maps?q=Mostarska%203%2C%20Had%C5%BEi%C4%87i%2071240&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[300px] w-full"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <p className="font-serif text-xl font-semibold leading-relaxed text-foreground">
              Recite nam šta vam je potrebno i javit ćemo vam se u najkraćem roku.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                  Ime i prezime / Naziv firme
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
                  placeholder="Vaše ime ili firma"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Email adresa
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                  Broj telefona
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
                  placeholder="Opcionalno"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Poruka / Upit za proizvode
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25"
                  placeholder="Za koje proizvode ste zainteresovani?"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-accent"
            >
              {submitted ? (
                <>
                  <Check className="h-5 w-5" />
                  Upit poslan
                </>
              ) : (
                'Pošalji upit'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
