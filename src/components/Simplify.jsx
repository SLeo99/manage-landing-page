import OrangeBtn from './OrangeBtn'
// import simplifyMobile from '../assets/bg-simplify-section-mobile.svg'

export default function Simplify() {


  return (
    <section className='mt-[42px] py-[92px] bg-BrightRed xl:py-[58px] xl:mt-[180px]'>
      <div className='flex flex-col items-center gap-[22px] xl:flex-row xl:justify-between xl:max-w-[1112px] xl:mx-auto'>
        <h2 className='text-4xl text-center text-white font-bold w-10/12 leading-[3.25rem] xl:text-left xl:w-5/12'>Simplify how your team works today.</h2>
        <OrangeBtn 
        textColor={'text-BrightRed'}
        bgColor={'bg-white'}
        custom={'hover:text-HoverBtn duration-300'}
        />
      </div>
      {/* <img src={simplifyMobile} alt="" className='absolute left-0 top-12 w-3/12 object-cover'/> */}
    </section>
  )
}
