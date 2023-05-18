import { FaFacebookSquare, FaInstagram, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";
import FooterLogo from '../assets/footer-logo.svg'
import { useState } from "react";

export default function Footer() {

  const emailRegEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g
  const [email, setEmail] = useState(null)
  const [isValid, setIsValid] = useState(true)

  const handleValidation = (e) => {
    if (!emailRegEx.test(email)) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }

  return (
    <footer className='pt-[50px] pb-[30px] bg-VeryDarkBlue text-white lg:pt-[61px] lg:pb-[59px]'>
      <div className="flex flex-col items-center gap-[52px] lg:w-11/12 lg:flex-row-reverse lg:max-w-[1112px] lg:mx-auto">
        <div className="w-[87.5%] mx-auto lg:flex lg:flex-col lg:max-w-[276px] lg:gap-[60px]">
          <form className='relative flex gap-3 md:mx-auto md:max-w-[716px]'>
            <input type="text" placeholder='Updates in your inbox...' className={isValid || email === '' ? 'py-[14px] px-6 text-xs text-DarkGrayishBlue w-full rounded-full border-none outline-none font-normal' : 'py-[14px] px-6 text-xs text-red-700 w-full rounded-full border-BrightRed focus:outline focus:outline-[1px] font-normal'} onChange={(e) =>{
              setEmail(e.target.value)
              handleValidation(e)
            }}/>
            <button className='px-7 bg-BrightRed rounded-full lg:px-5 hover:bg-HoverBtn duration-300 text-sm uppercase'>Go</button>
            <p className={isValid || email === ''  ? 'hidden' : 'absolute top-12 left-[18px] italic font-medium tracking-tight text-BrightRed text-[10px]'}>Please insert a valid email</p>
          </form>
          <p className="hidden text-xs text-DarkGrayishBlue text-center mt-[2px] lg:block">Copyright 2020. All Rights Reserved</p>
        </div>
        <div className='flex w-[70%] justify-between gap-12 lg:justify-center lg:gap-40'>
          <ul className='flex flex-col gap-[11px]'>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>Home</a></li>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>Pricing</a></li>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>Products</a></li>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>About Us</a></li>
          </ul>
          <ul className='flex flex-col gap-[11px]'>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>Careers</a></li>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>Community</a></li>
            <li><a href="" className='text-[15px] hover:text-HoverBtn duration-300'>Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-[52px] lg:flex-col-reverse lg:gap-20">
          <div className='flex justify-center gap-[34px] lg:gap-4'>
            <a href="#" className="text-[32px] lg:text-[24px] hover:text-HoverBtn duration-300"><FaFacebookSquare /></a>
            <a href="#" className="text-[32px] lg:text-[24px] hover:text-HoverBtn duration-300"><FaYoutube /></a>
            <a href="#" className="text-[32px] lg:text-[24px] hover:text-HoverBtn duration-300"><FaTwitter /></a>
            <a href="#" className="text-[32px] lg:text-[24px] hover:text-HoverBtn duration-300"><FaPinterest /></a>
            <a href="#" className="text-[32px] lg:text-[24px] hover:text-HoverBtn duration-300"><FaInstagram /></a>
          </div>
          <div>
            <img src={FooterLogo} alt="Manage Logo" />
          </div>
        </div>
      </div>
      <p className="text-xs text-DarkGrayishBlue text-center mt-[2px] lg:hidden">Copyright 2020. All Rights Reserved</p>
    </footer>
  )
}
