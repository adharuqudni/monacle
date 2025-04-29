// app/page.tsx

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TrustedBy } from "@/components/trusted-by";
import { AboutSection } from "@/components/about-section";
import { MissionDesign } from "@/components/mission-design";
import { CaseStudySection } from "@/components/case-study-slider";
import { ProcessDiagram } from "@/components/our-process";
import { ServicesGrid } from "@/components/services-grid";
import { CtaBanner } from "@/components/cta-banner";
import { LeadsFormSection } from "@/components/form-leads";
import { PostSection } from "@/components/post-section";
import { Footer } from "@/components/footer";
import { Suspense } from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
}

// Revalidate data every 60 seconds
export const revalidate = 60;

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const json = await res.json();
  const posts = { data: json.data as Post[] };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading hero...
          </div>
        }
      >
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div className="py-12">Loading...</div>}>
        <TrustedBy />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <MissionDesign />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <CaseStudySection />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <ProcessDiagram />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading...</div>}>
        <ServicesGrid />
      </Suspense>
      <Suspense fallback={<div className="py-24">Loading posts...</div>}>
        <PostSection posts={posts} />
      </Suspense>
      <Suspense fallback={<div className="">Loading...</div>}>
        <CtaBanner />
      </Suspense>
      <Footer />
    </main>
  );
}
