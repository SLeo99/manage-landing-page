import Logo from '../../src/assets/logo.svg'
import Hamburger from '../../src/assets/icon-hamburger.svg'
import CloseMenu from '../../src/assets/icon-close.svg'
import { useState } from 'react'
import OrangeBtn from './OrangeBtn'


export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='pt-[41px] xl:pt-[56px] font-vietnam'>
      <nav className='flex items-center justify-between w-[87.5%] mx-auto min-h-[28px] xl:w-[77.25%]'>
        <div className='w-4/12 xl:w-auto xl:translate-y-1'>
          <img src={Logo} alt="navigation logo"/>
        </div>
        <ul className='hidden xl:flex xl:gap-9 text-[12px] mt-1 mr-2'>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Community</a></li>
        </ul>
        <OrangeBtn />
        <div 
        className='relative flex flex-col min-h-[18px] gap-[3px] w-[26px] xl:hidden'
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
