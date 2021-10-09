import './Gallery.css';
import arrow2 from '../assets/logos/arrow2.svg';

function Gallery() {
  return (
    <div className='gallery_wrapper'>
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
      <div className='photo_wrapper'>
        <div className='photo first_photo'>
          <img src='' alt='' />
          <div className='ghost_photo'>
            <img src='' alt='' />
          </div>
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
        <div className='photo'>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
