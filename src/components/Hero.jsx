import heroImg from '../../src/assets/illustration-intro.svg'
import heroImgDark from '../../src/assets/illustration-intro-dark.svg'
import OrangeBtn from './OrangeBtn'


export default function Hero({dark}) {
  return (
    <main className='w-[87.5%] flex flex-col lg:flex-row-reverse mx-auto mt-[42px] lg:w-[77.25%] lg:mt-40 xl:max-w-[1112px]'>
      <div className='lg:basis-1/2 lg:flex lg:items-center lg:justify-center'>
        <img src={!dark ? heroImg : heroImgDark} alt="" className='mx-auto'/>
      </div>
      <div className='flex flex-col items-center lg:items-start gap-7 lg:basis-1/2'>
        <div className='mt-4 flex flex-col items-center gap-2 lg:gap-7'>
          <h1 className='text-[2.25rem] font-bold text-center leading-[3rem] text-DarkBlue dark:text-white xl:text-[3.35rem] lg:text-left xl:leading-[4rem] duration-300'>Bring everyone together to build better products.</h1>
          <p className='text-center leading-7 text-DarkGrayishBlue md:max-w-[400px] md:mx-auto lg:max-w-none lg:mx-0 lg:text-left lg:w-[65%] self-start'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
        </div>
        <OrangeBtn 
        margin={'mt-[0px] lg:mt-[6px]'}
        custom={'shadow-[0px_12px_5px_0px_rgba(255,215,204,1)] dark:shadow-[0px_12px_5px_0px_rgba(0,20,20,.2)] hover:bg-HoverBtn duration-300'}
        />
      </div>
    </main>
  )
}
