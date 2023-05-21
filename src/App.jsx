import { useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Manage from "./components/Manage"
import Nav from "./components/Nav"
import Simplify from "./components/Simplify"
import Testimonials from "./components/Testimonials"

function App() {

  const [theme, setTheme] = useState(false)
  const handleTheme = () => {
    setTheme(!theme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="relative bg-white dark:bg-[#212121] duration-300 overflow-x-hidden">
      <div className="hidden lg:block absolute w-8/12 top-0 -right-64 h-[436px] rounded-l-full -rotate-45 bg-BrightRed/20 dark:bg-BrightRed/5 xl:max-w-[1112px]"></div>
      <Nav dark={theme} handleTheme={handleTheme}/>
      <Hero dark={theme}/>
      <Manage />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  )
}

export default App
