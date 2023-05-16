import img from '../../src/assets/avatar-ali.png';


export default function TestimonialCarousel() {
  return (
    <div className='flex flex-col items-center gap-[26px]'>
      <article className='flex flex-col min-h-[248px] relative'>
        <div className='w-[72px] mx-auto -translate-y-9'>
          <img src={img} alt="" />
        </div>
        <div className='flex flex-col gap-2 text-center'>
          <h2 className='-translate-y-2 text-DarkBlue font-bold'>Ali Bravo</h2>
          <p className='text-[15px] w-11/12 mx-auto leading-7 text-DarkGrayishBlue'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
        </div>
      </article>
      <div className='flex justify-center gap-1'>
        <span className='w-2 h-2 border border-BrightRed rounded-full bg-BrightRed'></span>
        <span className='w-2 h-2 border border-BrightRed rounded-full bg-BrightRed'></span>
        <span className='w-2 h-2 border border-BrightRed rounded-full bg-BrightRed'></span>
        <span className='w-2 h-2 border border-BrightRed rounded-full bg-BrightRed'></span>
      </div>
      {/* OrangeBtn w margin-top */}
      <a href="#" className='w-[137px] text-center py-[14px] bg-BrightRed rounded-full text-xs font-bold mt-[21px] text-white'>Get Started</a>
    </div>
  )
}
