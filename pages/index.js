import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AppDownload from "../components/AppDownload"
import Features from "../components/Features"
import PopularFoods from "../components/PopularFoods"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AppDownload />
      <Features />
      <PopularFoods />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
