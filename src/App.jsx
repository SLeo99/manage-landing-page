import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Manage from "./components/Manage"
import Nav from "./components/Nav"
import Simplify from "./components/Simplify"
import Testimonials from "./components/Testimonials"

function App() {
  const rootElement = document.documentElement
  const storedDarkMode = JSON.parse(localStorage.getItem('DARK_MODE'))
  const [theme, setTheme] = useState(storedDarkMode)
  const handleTheme = () => {
    setTheme(!theme)
    rootElement.classList.toggle('dark')
  }
  
  useEffect(() => {
    switch (theme) {
      case true:
        rootElement.classList.add('dark')
        localStorage.setItem('DARK_MODE', true)
        break;
      case false:
        rootElement.classList.remove('dark')
        localStorage.setItem('DARK_MODE', false)
        break;
    }
  }, [theme])

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
