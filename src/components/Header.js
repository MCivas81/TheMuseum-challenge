import './Header.css';
import headerImg from '../assets/images/image 77.png';
import facebook from '../assets/logos/facebook.svg';
import instagram from '../assets/logos/instagram.svg';
import twitter from '../assets/logos/twitter.svg';

function Header() {
  return (
    <header className='container'>
      <div className='company-name'>
        <h3>the</h3>
        <h3>museum</h3>
      </div>
      <nav className='topnav'>
        <ul>
          <li>visita</li>
          <li>cosa vedere</li>
          <li>chi siamo</li>
          <li>attività</li>
          <li>agenda</li>
          <div className='socials-container'>
            <div className='lang-wrapper'>
              <span>ENG</span>
            </div>
            <div className='logos-wrapper'>
              <img className='social-logo' src={facebook} alt='facebook logo' />
              <img className='social-logo' src={instagram} alt='instagram logo' />
              <img className='social-logo' src={twitter} alt='twitter logo' />
            </div>
          </div>
        </ul>
      </nav>
      <div className='title'>
        <h2>archivio</h2>
        <h2>storico</h2>
      </div>
      <div className='description'>
        <p>
          Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.
        </p>
      </div>
      <img className='header-img' src={headerImg} alt='Header Img' />
    </header>
  );
}

export default Header;
