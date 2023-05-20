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
    isFocus: false,
    name: 'Anisha Li',
    testimony: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    img: firstTestimonyImage
  },
  {
    id: 1,
    onScreen: true,
    isFocus: true,
    name: 'Ali Bravo',
    testimony: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    img: secondTestimonyImage
  },
  {
    id: 2,
    onScreen: true,
    isFocus: false,
    name:'Richard Watts',
    testimony: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    img: thirdTestimonyImage
  },
  {
    id: 3,
    onScreen: false,
    isFocus: false,
    name: 'Shanai Gough',
    testimony: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    img: fourthTestimonyImage

  }
]

  const [currentIndex, setCurrentIndex] = useState(0)
  const initialElements = data.filter(item => item.onScreen === true)
  const inQueueElements = data.filter(item => item.onScreen === false)

  const [initialTestimonials, setInitialTestimonials] = useState(initialElements)
  const [unusedElements, setUnusedElements] = useState(inQueueElements)

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
    <div className='flex flex-col items-center gap-[26px] xl:gap-6'>
      <div className='xl:hidden'>
        <article key={data[currentIndex].id} className={currentIndex === data[currentIndex].id ? 'relative flex flex-col h-[248px] max-w-[540px] xl:h-[224px] dark:bg-[#2b2b2b]' : 'hidden'}>
          <div className='absolute flex justify-between items-center top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 xl:h-8 z-30'>
            <span className='text-3xl h-full basis-1/2 flex items-center' onMouseDown={() => prevElement()}><span className='hidden xl:block'><FaChevronLeft /></span></span>
            <span className='text-3xl h-full basis-1/2 flex items-center' onMouseDown={() => nextElement()}><span className='hidden xl:block'><FaChevronRight /></span></span>
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
      {/* xXDDDDDDDDDDDDD */}
      <div className='hidden xl:flex xl:gap-6'>
        {data.map((item) => (
          <article key={item.id} className='relative flex flex-col h-[248px] max-w-[540px] xl:h-[224px] dark:bg-[#2b2b2b]'>
            <div className='absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 h-8 bg-red-500'></div>
            <div className='w-[72px] mx-auto -translate-y-9'>
                  <img src={item.img} alt="" />
            </div>
            <div className='flex flex-col gap-2 text-center'>
                  <h2 className='-translate-y-2 text-DarkBlue dark:text-white font-bold duration-300'>{item.name}</h2>
                  <p className='text-[15px] w-11/12 mx-auto leading-7 text-DarkGrayishBlue'>{item.testimony}</p>
            </div>
          </article>
        ))}
      </div>
      <div className='flex justify-center gap-1 xl:hidden'>
        {data.map((item) => (
          <span key={item.id} className={item.id === currentIndex ? 'w-2 h-2 border border-BrightRed rounded-full bg-BrightRed' : 'w-2 h-2 border border-BrightRed rounded-full'}></span>
        ))}
      </div>
      {/* OrangeBtn w margin-top */}
      <a href="#" className='w-[137px] text-center py-[14px] bg-BrightRed rounded-full text-xs font-bold mt-[20px] text-white shadow-[0px_12px_10px_0px_rgba(255,215,204,1)] dark:shadow-[0px_12px_5px_0px_rgba(0,20,20,.2)] hover:opacity-75 duration-300'>Get Started</a>
    </div>
  )
}
