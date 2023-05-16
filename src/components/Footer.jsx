import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='pt-[50px] flex flex-col gap-[52px]'>
      <form className='w-[87.5%] mx-auto flex gap-3'>
        <input type="text" placeholder='XDDDD' className='py-[10px] w-full rounded-full border-none outline-none'/>
        <button className='px-7 bg-BrightRed rounded-full'>Go</button>
      </form>
      <div className='flex justify-center gap-16'>
        <ul className='flex flex-col gap-[11px]'>
          <li><a href="" className='text-[15px]'>Home</a></li>
          <li><a href="" className='text-[15px]'>Pricing</a></li>
          <li><a href="" className='text-[15px]'>Products</a></li>
          <li><a href="" className='text-[15px]'>About Us</a></li>
        </ul>
        <ul className='flex flex-col gap-[11px]'>
          <li><a href="" className='text-[15px]'>Careers</a></li>
          <li><a href="" className='text-[15px]'>Community</a></li>
          <li><a href="" className='text-[15px]'>Privacy Policy</a></li>
        </ul>
      </div>
      <div className='flex justify-center gap-[34px]'>
        <span><FaFacebookSquare size={32}/></span>
        <span><FaYoutube size={32}/></span>
        <span><FaTwitter size={32}/></span>
        <span><FaPinterest size={32}/></span>
        <span><FaInstagram size={32}/></span>
        
      </div>
    </footer>
  )
}
