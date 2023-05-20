import Logo from '../../src/assets/logo.svg'
import FooterLogo from '../assets/footer-logo.svg'
import Hamburguer from '../../src/assets/icon-hamburger.svg'
import HamburguerDark from '../../src/assets/icon-hamburguer-dark.svg'
import CloseMenu from '../../src/assets/icon-close.svg'
import CloseMenuDark from '../../src/assets/icon-close-dark.svg'
import { useState } from 'react'
import OrangeBtn from './OrangeBtn'
import { FaMoon, FaSun } from "react-icons/fa";

export default function Nav({dark, handleTheme}) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='relative pt-[41px] xl:pt-[56px] font-vietnam'>
      <nav className='flex items-center relative justify-between w-[87.5%] md:w-[77.25%] mx-auto min-h-[28px] xl:w-[77.25%] xl:max-w-[1112px]'>
        <div className='w-4/12 lg:w-auto lg:translate-y-1'>
          <img src={!dark ? Logo : FooterLogo} alt="Manage logo"/>
        </div>
        <ul className='hidden lg:flex lg:gap-5 xl:gap-9 text-[12px] mt-1 mr-2 font-medium'>
          <li><a href="#" className='text-DarkBlue dark:text-white dark:hover:text-HoverBtn hover:text-DarkGrayishBlue transition-colors'>Pricing</a></li>
          <li><a href="#" className='text-DarkBlue dark:text-white dark:hover:text-HoverBtn hover:text-DarkGrayishBlue transition-colors'>Product</a></li>
          <li><a href="#" className='text-DarkBlue dark:text-white dark:hover:text-HoverBtn hover:text-DarkGrayishBlue transition-colors'>About Us</a></li>
          <li><a href="#" className='text-DarkBlue dark:text-white dark:hover:text-HoverBtn hover:text-DarkGrayishBlue transition-colors'>Careers</a></li>
          <li><a href="#" className='text-DarkBlue dark:text-white dark:hover:text-HoverBtn hover:text-DarkGrayishBlue transition-colors'>Community</a></li>
        </ul>
        <OrangeBtn 
        custom={'hidden lg:block shadow-[0px_12px_5px_0px_rgba(255,215,204,1)] hover:bg-HoverBtn dark:shadow-[0px_12px_5px_0px_rgba(0,20,20,.2)] duration-300'}
        />
        <div className='absolute top-[2px] right-16 lg:right-40 z-20 rounded-full lg:p-2 cursor-pointer' 
        onClick={() => handleTheme()}>
          {dark 
          ? <span className='text-[24px] text-DarkGrayishBlue hover:text-BrightRed duration-300'><FaMoon /></span> 
          : <span className='text-[24px] text-DarkBlue hover:text-BrightRed duration-300'><FaSun /></span>}
        </div>
        <div className='relative flex flex-col min-h-[18px] gap-[3px] w-[26px] lg:hidden cursor-pointer' 
        onClick={() => setIsOpen(isOpen => !isOpen)}>
          {!dark 
          ? <img src={isOpen ? CloseMenu : Hamburguer} alt="Mobile menu button" /> 
          : <img src={isOpen ? CloseMenuDark : HamburguerDark} alt="Mobile menu button" />}
        </div>
        <ul className={isOpen ? 'w-full bg-white dark:bg-VeryDarkBlue absolute top-[62px] left-0 rounded-lg flex flex-col py-7 pb-6 shadow-[0px_290px_120px_200px_rgba(0,0,0,0.3)] duration-300' : 'hidden'}>
          <li><a href="#" className='w-full block text-center font-medium text-DarkBlue hover:text-DarkGrayishBlue dark:text-white dark:hover:text-HoverBtn py-3 tracking-tight'>Pricing</a></li>
          <li><a href="#" className='w-full block text-center font-medium text-DarkBlue hover:text-DarkGrayishBlue dark:text-white dark:hover:text-HoverBtn py-3 tracking-tight'>Product</a></li>
          <li><a href="#" className='w-full block text-center font-medium text-DarkBlue hover:text-DarkGrayishBlue dark:text-white dark:hover:text-HoverBtn py-3 tracking-tight'>About Us</a></li>
          <li><a href="#" className='w-full block text-center font-medium text-DarkBlue hover:text-DarkGrayishBlue dark:text-white dark:hover:text-HoverBtn py-3 tracking-tight'>Careers</a></li>
          <li><a href="#" className='w-full block text-center font-medium text-DarkBlue hover:text-DarkGrayishBlue dark:text-white dark:hover:text-HoverBtn py-3 tracking-tight'>Community</a></li>
        </ul>
      </nav>
    </header>
  )
}
