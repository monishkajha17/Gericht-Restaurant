import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images} from '../../constants';

import './Gallery.css';

const galleryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direcrtion) => {
    const { current } = scrollRef;

    if(direcrtion === 'left'){
      current.scrolleft -= 300;

    }

    else{
      current.scrolleft += 300;

    }
  }
  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title = "Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style = {{ color: '#AAA', marginTop: '2 rem'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container  " ref ={scrollRef}>
          {galleryimages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery__image-${ index+1 }`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='gallery__image-icon'/>

            </div>
          ))}

        </div>

        <div className=".app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icons' onClick = {() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icons' onClick = {() => scroll('right')} />
          
          

        </div>
      </div>

    </div>
  );
}

export default Gallery;
