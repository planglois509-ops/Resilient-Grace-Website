import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { CredentialsMarquee } from "./components/Marquee";
import { Problem } from "./components/Problem";
import { Guide } from "./components/Guide";
import { Plan } from "./components/Plan";
import { Pillars } from "./components/Pillars";
import { Stakes } from "./components/Stakes";
import { Success } from "./components/Success";
import { Testimonials } from "./components/Testimonials";
import { LeadMagnet } from "./components/LeadMagnet";
import { Articles } from "./components/Articles";
import { SupportGroup } from "./components/SupportGroup";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { BloomLoader } from "./components/BloomLoader";

export default function HomePage() {
  return (
    <>
      <BloomLoader />
      <Nav />
      <main>
        <Hero />
        <CredentialsMarquee />
        <Problem />
        <Guide />
        <Plan />
        <Pillars />
        <Stakes />
        <Testimonials />
        <LeadMagnet />
        <Articles />
        <Success />
        <SupportGroup />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
