import Header from "./components/Header"
import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import Ingredients from "./components/Ingredients"
import Benefits from "./components/Benefits"
import HowToUse from "./components/HowToUse"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <Ingredients />
        <Benefits />
        <HowToUse />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App

