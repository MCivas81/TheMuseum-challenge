import { useState } from 'react';
import './Header.css';
import headerImg from '../assets/images/image 77.png';
import facebook from '../assets/logos/facebook.svg';
import instagram from '../assets/logos/instagram.svg';
import twitter from '../assets/logos/twitter.svg';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <header className='header_container'>
      <nav className='navbar'>
        <div className='nav_logo'>
          <h3>the</h3>
          <h3>museum</h3>
        </div>
        <ul className={`nav_menu ${mobileMenu ? `active` : ''}`}>
          <li className='nav_item'>
            <span>visita</span>
          </li>
          <li className='nav_item'>
            <span>cosa vedere</span>
          </li>
          <li className='nav_item'>
            <span>chi siamo</span>
          </li>
          <li className='nav_item'>
            <span>attività</span>
          </li>
          <li className='nav_item'>
            <span>agenda</span>
          </li>
          <li className='nav_item box'>
            <div className='lang_wrapper'>
              <span>ENG</span>
            </div>
            <div className='socials_wrapper'>
              <img className='social_logo' src={facebook} alt='facebook logo' />
              <img className='social_logo' src={instagram} alt='instagram logo' />
              <img className='social_logo' src={twitter} alt='twitter logo' />
            </div>
          </li>
        </ul>
        <div className={`hamburger ${mobileMenu ? `active` : ''}`} onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
      <div className='header_title'>
        <h2>archivio</h2>
        <h2>storico</h2>
      </div>
      <div className='description'>
        <p>
          Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.
        </p>
      </div>
      <img className='header_img' src={headerImg} alt='Header Img' />
    </header>
  );
}

export default Header;
