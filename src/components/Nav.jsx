import Logo from '../../src/assets/logo.svg'
import Hamburger from '../../src/assets/icon-hamburger.svg'
import CloseMenu from '../../src/assets/icon-close.svg'
import { useState } from 'react'


export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='pt-[41px] font-vietnam'>
      <nav className='flex items-center justify-between w-[87.5%] mx-auto min-h-[28px] lg:w-9/12'>
        <div className='w-4/12 lg:w-auto'>
          <img src={Logo} alt="navigation logo"/>
        </div>
        <ul className='hidden lg:flex lg:gap-9 text-[12px]'>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Community</a></li>
        </ul>
        <a href="#" className='hidden lg:block'>Get Started</a>
        <div 
        className='relative flex flex-col min-h-[18px] gap-[3px] w-[26px] lg:hidden'
        onClick={() => setIsOpen(isOpen => !isOpen)}>
          <img src={isOpen ? Hamburger : CloseMenu} alt="" className='' />
        </div>
        <ul className='hidden'>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </nav>
    </header>
  )
}
