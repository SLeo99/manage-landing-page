import OrangeBtn from './OrangeBtn'

export default function Simplify() {
  return (
    <section className='flex flex-col items-center gap-[22px] mt-[42px] py-[92px] bg-BrightRed'>
      <h2 className='text-4xl text-center text-white font-bold w-10/12 leading-[3.25rem]'>Simplify how your team works today.</h2>
      <OrangeBtn 
      textColor={'text-BrightRed'}
      bgColor={'bg-white'}
      />
    </section>
  )
}
