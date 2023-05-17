import ManageFunctionalities from './ManageFunctionalities'

export default function Manage() {

  return (
    <section className='mt-24 flex flex-col gap-[51px] md:flex-row md:gap-0 lg:w-[77.25%] lg:mx-auto lg:mt-[74px]'>
      <div className='w-[87.5%] mx-auto flex flex-col gap-3 md:basis-1/2 lg:w-full lg:gap-6'>
        <h2 className='text-3xl text-center font-bold leading-[2.85rem] text-DarkBlue lg:text-4xl lg:text-left lg:leading-[2.8rem] lg:mt-2'>What’s different about Manage?</h2>
        <p className='text-[15px] text-center leading-7 text-DarkGrayishBlue lg:text-left lg:w-7/12 lg:leading-[1.65rem]'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <ManageFunctionalities className='md:basis-1/2'/>
    </section>
  )
}
