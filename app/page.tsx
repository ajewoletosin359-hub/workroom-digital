import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import AboutPreview from "@/components/AboutPreview";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Tools from "@/components/Tools";
import Process from "@/components/Process";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

// Single public page. Testimonials stay out until verified client
// feedback exists (components/Testimonials.tsx retained for later).
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <AboutPreview />
      <Services />
      <SelectedWork />
      <Tools />
      <Process />
      <WhyWorkWithMe />
      <Faq />
      <Contact />
    </>
  );
}
