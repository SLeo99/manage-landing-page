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
  const data = [
    {
      id: 0,
      onScreen: true,
      isFocus: false,
      name: 'Anisha Li',
      testimony: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
    },
    {
      id: 1,
      onScreen: true,
      isFocus: true,
      name: 'Ali Bravo',
      testimony: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”'
    },
    {
      id: 2,
      onScreen: true,
      isFocus: false,
      name:'Richard Watts',
      testimony: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
    },
    {
      id: 3,
      onScreen: false,
      isFocus: false,
      name: 'Shanai Gough',
      testimony: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
    }
  ]
  const initialElements = data.filter(item => item.onScreen === true)
  const inQueueElements = data.filter(item => item.onScreen === false)

  const [initialTestimonials, setInitialTestimonials] = useState(initialElements)
  const [unusedElements, setUnusedElements] = useState(inQueueElements)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextElement = () => {
    const toQueueElement = initialTestimonials.shift(item => { item })
    const newOnScreenElement = unusedElements.shift(item => { item })
    setInitialTestimonials(initialTestimonials.concat(newOnScreenElement))
    setUnusedElements(unusedElements.concat(toQueueElement))
    const isFirstElement = currentIndex === data.length - 1;
    const newElement = isFirstElement ? 0 : currentIndex + 1
    setCurrentIndex(newElement)
  }
  
  const prevElement = () => {
    const toQueueElement = initialTestimonials.pop(item => { item })
    const newOnScreenElement = unusedElements.pop(item => { item })
    setInitialTestimonials([newOnScreenElement].concat(initialTestimonials))
    setUnusedElements([toQueueElement].concat(unusedElements))
    const isLastElement = currentIndex === 0;
    const newElement = isLastElement ? data.length - 1 : currentIndex - 1
    setCurrentIndex(newElement)
  }


  return (
    <div className="relative bg-white dark:bg-[#212121] duration-300">
      <Nav dark={theme} handleTheme={handleTheme}/>
      <Hero dark={theme}/>
      <Manage />
      <Testimonials />
      <Simplify />
      <Footer />
      <div className="w-full flex justify-between">
        <span className="text-4xl" onClick={
          () => prevElement()
        }>{`<`}</span>
        <span className="text-4xl" 
        onClick={() => nextElement()}
        >{`>`}</span>
      </div>
    </div>
  )
}

export default App
