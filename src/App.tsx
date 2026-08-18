import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import CaseStudies from "./CaseStudies";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
