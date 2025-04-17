import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBy } from "@/components/trusted-by"
import { Mission } from "@/components/our-mission"
import { AboutSection } from "@/components/about-section"
import { Case } from "@/components/case-study"
import { ProcessSection } from "@/components/process-section"
import { Service } from "@/components/i-service"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading hero...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="py-12">Loading...</div>}>
        <TrustedBy />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <Mission />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <Case />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <Service />
      </Suspense>
      <Suspense fallback={<div className="">Loading...</div>}>
        <CtaBanner />
      </Suspense>
      <Footer />
    </main>
  )
}
