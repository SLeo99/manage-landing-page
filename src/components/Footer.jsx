import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";
import FooterLogo from '../assets/footer-logo.svg'

export default function Footer() {
  return (
    <footer className='pt-[50px] pb-[30px] bg-VeryDarkBlue text-white xl:pt-[61px] xl:pb-[59px]'>
      <div className="flex flex-col items-center gap-[52px] xl:flex-row-reverse xl:max-w-[1112px] xl:mx-auto">
        <div className="w-[87.5%] mx-auto xl:flex xl:flex-col xl:max-w-[276px] xl:gap-[60px]">
          <form className='flex gap-3'>
            <input type="text" placeholder='Updates in your inbox...' className='py-[14px] px-6 text-xs text-DarkGrayishBlue w-full rounded-full border-none outline-none font-normal'/>
            <button className='px-7 bg-BrightRed rounded-full xl:px-5'>Go</button>
          </form>
          <p className="hidden text-xs text-DarkGrayishBlue text-center mt-[2px] xl:block">Copyright 2020. All Rights Reserved</p>
        </div>
        <div className='flex w-[70%] justify-between gap-12 xl:justify-center xl:gap-56'>
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
        <div className="flex flex-col items-center gap-[52px] xl:flex-col-reverse xl:gap-20">
          <div className='flex justify-center gap-[34px] xl:gap-4'>
            <a href="#" className="text-[32px] xl:text-[24px]"><FaFacebookSquare /></a>
            <a href="#" className="text-[32px] xl:text-[24px]"><FaYoutube /></a>
            <a href="#" className="text-[32px] xl:text-[24px]"><FaTwitter /></a>
            <a href="#" className="text-[32px] xl:text-[24px]"><FaPinterest /></a>
            <a href="#" className="text-[32px] xl:text-[24px]"><FaInstagram /></a>
          </div>
          <div>
            <img src={FooterLogo} alt="" />
          </div>
        </div>
      </div>
      <p className="text-xs text-DarkGrayishBlue text-center mt-[2px] xl:hidden">Copyright 2020. All Rights Reserved</p>
    </footer>
  )
}
