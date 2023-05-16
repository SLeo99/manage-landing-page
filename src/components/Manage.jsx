import ManageFunctionalities from './ManageFunctionalities'

export default function Manage() {

  return (
    <section className='mt-24 flex flex-col gap-[51px]'>
      <div className='w-[87.5%] mx-auto flex flex-col gap-3'>
        <h2 className='text-3xl text-center font-bold leading-[2.85rem] text-DarkBlue'>What’s different about Manage?</h2>
        <p className='text-[15px] text-center leading-7 text-DarkGrayishBlue'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <ManageFunctionalities/>
    </section>
  )
}
