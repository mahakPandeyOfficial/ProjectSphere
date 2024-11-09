import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/services', display: 'Service' },
  { path: '/projects', display: 'Projects' },
  { path: '/about', display: 'About Us' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="sticky__header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[500]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right-side buttons */}
          <div className="flex items-center gap-4">
            <Link to="/contact">
              <button className="bg-[#FFA500] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[10px]">
                Contact
              </button>
            </Link>

            {/* Admin Button */}
            <Link to="/admin">
              <button className="bg-[#000] py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[10px]">
                Admin
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
