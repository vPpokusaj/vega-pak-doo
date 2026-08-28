'use client'

import { FileText, Download } from 'lucide-react'
import { jsPDF } from 'jspdf'

export function DocumentsSection() {
  const handleDownload = () => {
    const doc = new jsPDF({ unit: 'pt', format: 'a4' })
    const pink = [219, 39, 119] as const
    const dark = [51, 51, 51] as const
    const gray = [110, 110, 110] as const

    doc.setFillColor(pink[0], pink[1], pink[2])
    doc.rect(0, 0, 595, 90, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(24)
    doc.text('Vega-Pak Doo Hadžići', 48, 52)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(12)
    doc.text('Identifikacijski i PDV podaci firme', 48, 72)

    doc.setTextColor(dark[0], dark[1], dark[2])
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(15)
    doc.text('Identifikacija firme', 48, 140)

    const rows: [string, string][] = [
      ['Naziv firme', 'Vega-Pak Doo Hadžići'],
      ['Osnovana', '2007. (porodična firma)'],
      ['Djelatnost', 'Uvoz, obrada i pakovanje prehrambenih proizvoda'],
      ['Adresa', 'Mostarska 3, Hadžići 71240, Bosna i Hercegovina'],
      ['Email', 'vegapak@gmail.com'],
      ['Telefon', '033 691 460'],
      ['Mobitel', '060 320 8939'],
      ['ID broj', 'BA-______________'],
      ['PDV / Poreski broj', 'BA-______________'],
    ]

    let y = 176
    rows.forEach(([label, value]) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(gray[0], gray[1], gray[2])
      doc.text(label.toUpperCase(), 48, y)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(12)
      doc.setTextColor(dark[0], dark[1], dark[2])
      doc.text(value, 48, y + 16)
      doc.setDrawColor(230, 230, 230)
      doc.line(48, y + 28, 547, y + 28)
      y += 46
    })

    doc.setFontSize(9)
    doc.setTextColor(gray[0], gray[1], gray[2])
    doc.text(
      'Ovaj dokument se dostavlja u svrhu registracije dobavljača/kupca.',
      48,
      800,
    )

    doc.save('Vega-Pak-Doo-ID-VAT.pdf')
  }

  return (
    <section id="documents" className="scroll-mt-24 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Dokumenti
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Identifikacija firme
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Preuzmite ili pogledajte naše zvanične pravne i poreske podatke za brzu registraciju
            računa dobavljača/kupca.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:flex-row sm:text-left">
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                ID i PDV broj firme
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Zvanični identifikacijski i poreski podaci (PDF).
              </p>
            </div>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-accent"
            >
              <Download className="h-5 w-5" />
              Pogledaj / Preuzmi PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
