import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Page() {
  return <main className="relative">
  <Navbar />
  <Hero/>
  <Services/>
  <About/>
  <Contact/>
  <Footer/>
  
</main>
}
