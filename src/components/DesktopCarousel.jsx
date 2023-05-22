import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DesktopCarousel({testimonydata}) {

  const initialElements = testimonydata.filter(item => item.onScreen === true)
  const inQueueElements = testimonydata.filter(item => item.onScreen === false)
  const [initialTestimonials, setInitialTestimonials] = useState(initialElements)
  const [unusedElements, setUnusedElements] = useState(inQueueElements)

  const nextElement = () => {
    const toQueueElement = initialTestimonials.shift(item => { item })
    const newOnScreenElement = unusedElements.shift(item => { item })
    setInitialTestimonials(initialTestimonials.concat(newOnScreenElement))
    setUnusedElements(unusedElements.concat(toQueueElement))
  }
  
  const prevElement = () => {
    const toQueueElement = initialTestimonials.pop(item => { item })
    const newOnScreenElement = unusedElements.pop(item => { item })
    setInitialTestimonials([newOnScreenElement].concat(initialTestimonials))
    setUnusedElements([toQueueElement].concat(unusedElements))
  }

  return (
    <div className='hidden lg:flex lg:gap-3 relative md:w-[90%] xl:w-[77.25%] xl:max-w-[1112px]'>
      <div className="relative lg:grid lg:grid-flow-col lg:auto-cols-fr lg:auto-rows-fr lg:gap-8">
        {initialTestimonials.map((item) => (
          <article key={item.id} className='flex flex-col pb-5 bg-VeryPaleRed dark:bg-[#2b2b2b]'>
            <div className='w-[72px] h-auto mx-auto -translate-y-9'>
              <img src={item.img} alt={item.name} />
            </div>
            <div className='flex flex-col gap-2 text-center'>
              <h2 className='-translate-y-2 text-DarkBlue dark:text-white font-bold duration-300'>{item.name}</h2>
              <p className='text-[15px] w-11/12 mx-auto leading-7 text-DarkGrayishBlue'>{item.testimony}</p>
            </div>
          </article>
        ))}
        <div className="absolute flex justify-between top-1/2 left-1/2 w-[calc(100%_+_8rem)] -translate-x-1/2 -translate-y-1/2 h-12">
          <span className='text-5xl h-full flex items-center text-DarkBlue dark:text-white hover:text-BrightRed dark:hover:text-BrightRed duration-300 cursor-pointer' onClick={() => prevElement()}><span className='hidden lg:block'><FaChevronLeft /></span></span>
          <span className='text-5xl h-full flex items-center text-DarkBlue dark:text-white hover:text-BrightRed dark:hover:text-BrightRed duration-300 cursor-pointer' onClick={() => nextElement()}><span className='hidden lg:block'><FaChevronRight /></span></span>
        </div>
      </div>
    </div>
  )
}
