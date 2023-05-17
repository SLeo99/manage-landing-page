import heroImg from '../../src/assets/illustration-intro.svg'
import OrangeBtn from './OrangeBtn'


export default function Hero() {
  return (
    <main className='w-[87.5%] flex flex-col lg:flex-row-reverse mx-auto mt-[42px] lg:w-[77.25%] lg:mt-40'>
      <div className='lg:basis-1/2 lg:flex lg:items-center'>
        <img src={heroImg} alt="" />
      </div>
      <div className='flex flex-col items-center lg:items-start gap-7 lg:basis-1/2'>
        <div className='mt-4 flex flex-col items-center gap-2 lg:gap-7'>
          <h1 className='text-[2.25rem] font-bold text-center leading-[3rem] text-DarkBlue lg:text-[3.35rem] lg:text-left lg:leading-[4rem]'>Bring everyone together to build better products.</h1>
          <p className='text-center leading-7 text-DarkGrayishBlue lg:text-left lg:w-[65%] self-start'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
        </div>
        <OrangeBtn 
        margin={'mt-[6px]'}
        />
      </div>
    </main>
  )
}
