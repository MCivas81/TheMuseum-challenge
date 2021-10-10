import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../assets/images/image1.png';
import image11 from '../assets/images/image11.png';
import image12 from '../assets/images/image12.jpeg';
import image13 from '../assets/images/image13.jpeg';
import image14 from '../assets/images/image14.jpeg';
import './CarouselComponent.css';

function CarouselComponent() {
  return (
    <div class='carousel_wrapper'>
      <div className='carousel_header'>
        <div className='carousel_description'>
          <span className='carousel_title'>GALLERY 01</span>
          <span className='carousel_close'>X</span>
        </div>
        <div className='carousel_paragraph'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit etiam id blandit elementum
            lectus mauris ut cursus adipiscing. Egestas nam mattis adipiscing velit fermentum et.
          </p>
        </div>
      </div>
      <Carousel showThumbs={false}>
        <div className='carousel_photo'>
          <img src={image1} alt='img1' />
        </div>
        <div className='carousel_photo'>
          <img src={image11} alt='img11' />
        </div>
        <div className='carousel_photo'>
          <img src={image12} alt='img12' />
        </div>
        <div className='carousel_photo'>
          <img src={image13} alt='img13' />
        </div>
        <div className='carousel_photo'>
          <img src={image14} alt='img14' />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
