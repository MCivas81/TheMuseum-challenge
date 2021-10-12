import './Footer.css';
import fiat from '../assets/logos/footer-fiat.svg';
import socials from '../assets/logos/socials.svg';
import phone from '../assets/logos/phone.svg';
import mail from '../assets/logos/mail.svg';
import arrow from '../assets/logos/arrow.svg';

function Footer() {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <footer className='ft_container'>
      <section className='ft_main'>
        <div className='ft_main_items'>
          <div className='ft_main_details'>
            <div className='ft_main_address'>
              <h3>THE MUSEUM</h3>
              <span>Via Sant Ottavio, 44 - 10126 Torino</span>
            </div>
            <div className='ft_main_partner'>
              <img src={fiat} alt='fiat logo' />
              <span>MAIN PARTNER</span>
            </div>
            <div className='ft_main_socials'>
              <img src={socials} alt='socials logo' />
            </div>
          </div>
          <div className='ft_main_legal'>
            <ul className='ft_main_privacy'>
              <li>STAMPA</li>
              <li>STATUTO E CODICE ETICO</li>
              <li>PRIVACY</li>
            </ul>
            <ul className='ft_main_contacts'>
              <li>
                <img src={phone} alt='phone logo' />
                <span>011.0062713</span>
              </li>
              <li>
                <img src={mail} alt='mail logo' />
                <span>info@themuseum.it</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='ft_newsletter'>
          <div className='ft_newsletter_items'>
            <span>Resta sempre aggiornato su mostre, workshop ed eventi</span>
            <input placeholder='email ' type='email' id='email' name='email' />
            <div className='ft_newsletter_accept'>
              <input type='radio' id='accept' name='accept' value='accept' />
              <label>Accetto i termini e condizioni</label>
            </div>
            <div className='ft_newsletter_subscription'>
              <span>ISCRIVITI ALLA NEWSLETTER</span>
              <img src={arrow} alt='arrow logo' />
            </div>
          </div>
        </div>
      </section>
      <section className='ft_bottom'>
        <div className='ft_bottom_credits'>
          <span>{date} THE MUSEUM&copy;</span>
          <span>Publicis Sapient</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
