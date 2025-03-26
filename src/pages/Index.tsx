
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
