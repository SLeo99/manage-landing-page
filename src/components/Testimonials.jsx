import img from '../../src/assets/avatar-ali.png'


export default function Testimonials() {
  return (
    <section className='grid w-[90%] mx-auto mt-[68px] gap-[88px] bg-red-500'>
      <h2 className='text-center text-3xl font-bold'>What they’ve said</h2>
      <article className='bg-emerald-500'>
        <div className='w-[72px] mx-auto -translate-y-6'>
          <img src={img} alt="" />
        </div>
        <div className='flex flex-col gap-4 text-center py-7'>
          <h2>Ali Bravo</h2>
          <p className='text-[15px] w-11/12 mx-auto'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
        </div>
      </article>
    </section>
  )
}
