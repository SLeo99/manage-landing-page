import TestimonialCarousel from './TestimonialCarousel';


export default function Testimonials() {
  return (
    <section className='grid w-[90%] mx-auto mt-[68px] gap-[98px] xl:mt-[146px] xl:gap-[110px] xl:w-full z-30 relative'>
      <h2 className='text-center text-3xl font-bold text-DarkBlue dark:text-white xl:text-4xl duration-300'>What they’ve said</h2>
      <TestimonialCarousel />
    </section>
  )
}
