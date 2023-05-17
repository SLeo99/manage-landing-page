import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Manage from "./components/Manage"
import Nav from "./components/Nav"
import Simplify from "./components/Simplify"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <div className="bg-white dark:bg-VeryDarkBlue">
      <Nav />
      <Hero />
      <Manage />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  )
}

export default App
