import { cn } from '@/lib/utils'

export function VpLogo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Vega-Pak Doo logo"
      className={cn('inline-block aspect-[200/176] w-auto', className)}
      style={{
        backgroundColor: '#DB2777',
        WebkitMaskImage: 'url(/logo.png)',
        maskImage: 'url(/logo.png)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
