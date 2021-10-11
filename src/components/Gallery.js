import { useState } from 'react';
import './Gallery.css';
import arrow2 from '../assets/logos/arrow2.svg';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import image7 from '../assets/images/image7.png';
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import image11 from '../assets/images/image11.png';
import CarouselComponent from './CarouselComponent';

function Gallery() {
  const [carouselOpen, setCarouselOpen] = useState(false);

  const handleClick = () => setCarouselOpen(!carouselOpen);

  return (
    <div className='gallery_container'>
      <div className='gallery_navbar'>
        <div className='gallery_title'>
          <h4>TITLE</h4>
        </div>
        <div className='gallery_searchbar'>
          <div className='gallery_date'>
            <span>DATA</span>
            <div className='date_selection'>
              <span>Tutte le date</span>
              <img src={arrow2} alt='arrowdown logo' />
            </div>
          </div>
          <div className='gallery_activities'>
            <span>COSA</span>
            <div className='activities_selection'>
              <span>Tutte le attività</span>
              <img src={arrow2} alt='arrowdown logo' />{' '}
            </div>
          </div>
        </div>
      </div>
      {carouselOpen ? (
        <CarouselComponent handleClick={handleClick} />
      ) : (
        <div className='photo_container_1'>
          <div className='photo_wrapper'>
            <div className='photo first_photo' onClick={handleClick}>
              <img src={image1} alt='img1' />
              <div className='ghost_photo'>
                <img src={image11} alt='img11' />
              </div>
            </div>
            <div className='photo_description'>
              <span className='photo_title'>Gallery 01</span>
              <span className='photo_date'>Apr 17 - Nov 01, 2020</span>
            </div>
          </div>
          <div className='photo_wrapper'>
            <div className='photo'>
              <img src={image2} alt='img2' />
            </div>
            <div className='photo_description'>
              <span className='photo_title'>Gallery 02</span>
              <span className='photo_date'>Lug 01 - Ott 25, 2020</span>
            </div>
          </div>
        </div>
      )}
      <div className='photo_container_2'>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image3} alt='img3' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 03</span>
            <span className='photo_date'>Set 15 - Nov 22, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image4} alt='img4' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 04</span>
            <span className='photo_date'>Set 23 - Gen 17, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image5} alt='img5' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 05</span>
            <span className='photo_date'>Set 15 - Nov 22, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image6} alt='img6' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 06</span>
            <span className='photo_date'>Set 23 - Gen 17, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image7} alt='img7' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 07</span>
            <span className='photo_date'>Set 15 - Nov 22, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image8} alt='img8' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 08</span>
            <span className='photo_date'>Set 23 - Gen 17, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image9} alt='img9' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 09</span>
            <span className='photo_date'>Set 15 - Nov 22, 2020</span>
          </div>
        </div>
        <div className='photo_wrapper'>
          <div className='photo'>
            <img src={image10} alt='img10' />
          </div>
          <div className='photo_description'>
            <span className='photo_title'>Gallery 10</span>
            <span className='photo_date'>Set 23 - Gen 17, 2020</span>
          </div>
        </div>
      </div>
      <div className='gallery_load'>
        <span>LOAD MORE</span>
      </div>
    </div>
  );
}

export default Gallery;
