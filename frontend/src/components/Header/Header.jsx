
import { useEffect, useRef } from 'react'
import logo from '../../assets/images/logo.svg'
import { NavLink, Link} from 'react-router-dom'
import {BiMenu} from 'react-icons/bi' 
const navLinks = [
  {
    path:'/home',
    display: 'Home'
  },
  {
    path:'/services',
    display: 'Service'
  },
  {
    path:'/projects',
    display: 'Projects'
  },
  {
    path:'/about',
    display: 'About Us'
  },
  
]

const Header=() => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)


  const handleStickyHeader = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
    useEffect(()=>{
      handleStickyHeader()

      return ()=> window.removeEventListener('scroll', handleStickyHeader)
    })

    const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')
  

  return <header className='sticky__header flex items-center' ref={headerRef}>
     <div className="container">
      <div className="flex items-center justify-between">

        {/* =============Logo===========*/}
        <div>
          <img src={logo} alt="" />
        </div>

        {/** =============Menu========== */}
        <div className='navigation' ref={menuRef} onClick={toggleMenu}> 
           <ul className='menu flex items-center gap-[2.7rem]'>
            {
              navLinks.map((link, index)=> <li key={index}>
                <NavLink to={link.path} className={navClass=> navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500]'}>{link.display}</NavLink>
              </li>)
            }

           </ul>
        </div>

        {/** ============Nav right Contact button */}
        <div className='flex items-center gap-4'>
          <Link to='/contact'>
            <button className='bg-[#FFA500] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[10px]'>Contact</button>
          </Link>

          <span className='md:hidden' onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer'/>
          </span>
        </div>
      </div>
     </div>
  </header>
    
}

export default Header

/** 
const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-yellow-400">
      <div className="flex items-center">
        <div className="mr-4">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.5a2.5 2.5 0 002.5-2.5V10.88a2.5 2.5 0 00-2.5-2.5H12v.75A2.5 2.5 0 0014.5 10.88v6.62a2.5 2.5 0 002.5 2.5H21"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            PROJECT
            <br />
            SPHERE
          </h1>
        </div>
      </div>
      <nav className="flex space-x-6 text-lg font-medium text-gray-700">
        <a href="#" className="hover:text-yellow-600">
          HOME
        </a>
        <a href="#" className="hover:text-yellow-600">
          SERVICES
        </a>
        <a href="#" className="hover:text-yellow-600">
          ABOUT
        </a>
        <a href="#" className="hover:text-yellow-600">
          PROJECTS
        </a>
        <a href="#" className="hover:text-yellow-600">
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default Header;

*/