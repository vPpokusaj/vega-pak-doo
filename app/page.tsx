import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { PackagingSection } from '@/components/packaging-section'
import { ProductsSection } from '@/components/products-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { UspStrip } from '@/components/usp-strip'

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <UspStrip />
        <AboutSection />
        <ProductsSection />
        <PackagingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
