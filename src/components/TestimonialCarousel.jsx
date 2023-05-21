import { useState } from 'react';
import firstTestimonyImage from '../../src/assets/avatar-anisha.png'
import secondTestimonyImage from '../../src/assets/avatar-ali.png'
import thirdTestimonyImage from '../../src/assets/avatar-richard.png'
import fourthTestimonyImage from '../../src/assets/avatar-shanai.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



export default function TestimonialCarousel() {
  const data = [
  {
    id: 0,
    onScreen: true,
    name: 'Anisha Li',
    testimony: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    img: firstTestimonyImage
  },
  {
    id: 1,
    onScreen: true,
    name: 'Ali Bravo',
    testimony: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    img: secondTestimonyImage
  },
  {
    id: 2,
    onScreen: true,
    name:'Richard Watts',
    testimony: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    img: thirdTestimonyImage
  },
  {
    id: 3,
    onScreen: false,
    name: 'Shanai Gough',
    testimony: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    img: fourthTestimonyImage

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
  }
  
  const prevElement = () => {
    const toQueueElement = initialTestimonials.pop(item => { item })
    const newOnScreenElement = unusedElements.pop(item => { item })
    setInitialTestimonials([newOnScreenElement].concat(initialTestimonials))
    setUnusedElements([toQueueElement].concat(unusedElements))
  }

  const nextElementMobile = () => {
    const isFirstElement = currentIndex === data.length - 1;
    const newElement = isFirstElement ? 0 : currentIndex + 1
    setCurrentIndex(newElement)
  }

  const prevElementMobile = () => {
    const isLastElement = currentIndex === 0;
    const newElement = isLastElement ? data.length - 1 : currentIndex - 1
    setCurrentIndex(newElement)
  }

  return (
    <div className='flex flex-col items-center gap-[26px] xl:gap-6'>

      <div className='lg:hidden'>
        <article key={data[currentIndex].id} className={currentIndex === data[currentIndex].id ? 'relative flex flex-col h-[248px] max-w-[540px] xl:h-[224px] dark:bg-[#2b2b2b]' : 'hidden'}>
          <div className='absolute flex justify-between items-center top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 xl:h-8 z-30'>
            <span className='text-3xl h-full basis-1/2 flex items-center' onMouseDown={() => prevElementMobile()}><span className='hidden xl:block'><FaChevronLeft /></span></span>
            <span className='text-3xl h-full basis-1/2 flex items-center' onMouseDown={() => nextElementMobile()}><span className='hidden xl:block'><FaChevronRight /></span></span>
          </div>
          <div className='w-[72px] mx-auto -translate-y-9'>
            <img src={data[currentIndex].img} alt="" />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <h2 className='-translate-y-2 text-DarkBlue dark:text-white font-bold duration-300'>{data[currentIndex].name}</h2>
            <p className='text-[15px] w-11/12 mx-auto leading-7 text-DarkGrayishBlue'>{data[currentIndex].testimony}</p>
          </div>
        </article>
      </div>

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

      <div className='flex justify-center gap-1 lg:hidden'>
        {data.map((item) => (
          <span key={item.id} className={item.id === currentIndex ? 'w-2 h-2 border border-BrightRed rounded-full bg-BrightRed duration-300' : 'w-2 h-2 border border-BrightRed duration-300 rounded-full'}></span>
        ))}
      </div>

      <a href="#" className='w-[137px] text-center py-[14px] bg-BrightRed rounded-full text-xs font-bold mt-[8px] text-white shadow-[0px_12px_10px_0px_rgba(255,215,204,1)] dark:shadow-[0px_12px_5px_0px_rgba(0,20,20,.2)] hover:opacity-75 duration-300'>Get Started</a>
    </div>
  )
}
