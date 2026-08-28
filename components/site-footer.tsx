import { VpLogo } from '@/components/vp-logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-3">
          <VpLogo className="h-9 w-auto" />
          <span className="font-serif text-lg font-semibold text-foreground">Vega-Pak Doo</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Vega-Pak Doo. Sva prava zadržana.
        </p>
      </div>
    </footer>
  )
}
