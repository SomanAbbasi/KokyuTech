import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Solutions from "@/components/Solutions";
import Security from "@/components/Security";
import Process from "@/components/Process";
import WhyKokyu from "@/components/WhyKokyu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { CAPABILITY_TICKER } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <Loader />

      <Hero />

      <div className="ticker-band">
        <Marquee texts={CAPABILITY_TICKER} speed={30} separator="✦" />
      </div>

      <Services />
      <Work />
      <Solutions />
      <Security />
      <Process />
      <WhyKokyu />
      <Contact />
      <Footer />
    </main>
  );
}
