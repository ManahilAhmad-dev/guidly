import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroll.scrollToTop({ duration: 500, smooth: true });
      }, 100);
    } else {
      scroll.scrollToTop({ duration: 500, smooth: true });
    }
  };

  return (
    <>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="Logo" className='logo' />
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link onClick={handleHomeClick}>Home</Link></li>
          <li><Link to='solution' smooth={true} offset={-70} duration={500}>Services</Link></li>
          <li><Link to='testimonial-container' smooth={true} offset={-200} duration={500}>Reviews</Link></li>
          <li><Link to='contact' smooth={true} offset={-80} duration={500} className='bim'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="Menu" className='menu-icon' onClick={() => setMobileMenu(!mobileMenu)} />
      </nav>
    </>
  );
};

export default Navbar;
