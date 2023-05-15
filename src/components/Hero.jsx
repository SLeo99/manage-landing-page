import React from 'react'
import heroImg from '../../src/assets/illustration-intro.svg'
import OrangeBtn from './OrangeBtn'


export default function Hero() {
  return (
    <main className='w-[87.5%] max-w-[420px] mx-auto bg-emerald-500 mt-[42px]'>
      <div>
        <img src={heroImg} alt="" />
      </div>
      <div className='flex flex-col items-center gap-7'>
        <div className='mt-4 flex flex-col items-center gap-2'>
          <h1 className='text-[2.25rem] font-bold text-center leading-[3rem]'>Bring everyone together to build better products.</h1>
          <p className='text-center leading-7'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>
        </div>
        <OrangeBtn />
      </div>
    </main>
  )
}
