import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";
import FooterLogo from '../assets/footer-logo.svg'

export default function Footer() {
  return (
    <footer className='pt-[50px] pb-[30px] flex flex-col items-center gap-[52px] bg-VeryDarkBlue text-white'>
      <form className='w-[87.5%] mx-auto flex gap-3'>
        <input type="text" placeholder='Updates in your inbox...' className='py-[14px] px-6 text-xs text-DarkGrayishBlue w-full rounded-full border-none outline-none font-normal'/>
        <button className='px-7 bg-BrightRed rounded-full'>Go</button>
      </form>
      <div className='flex w-[70%] justify-between gap-12'>
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
        <a href="#"><FaFacebookSquare size={32}/></a>
        <a href="#"><FaYoutube size={32}/></a>
        <a href="#"><FaTwitter size={32}/></a>
        <a href="#"><FaPinterest size={32}/></a>
        <a href="#"><FaInstagram size={32}/></a>
      </div>
      <div>
        <img src={FooterLogo} alt="" />
      </div>
      <p className="text-xs text-DarkGrayishBlue text-center mt-[2px]">Copyright 2020. All Rights Reserved</p>
    </footer>
  )
}
