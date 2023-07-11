import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding ' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title={'Contact'} />
      <h1 className='headtext__cormorant' style={{marginBottom : '3rem'}}>Find Us</h1>
      <div className="app__wrapper_content">
        <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      </div>
      

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus}/>
    </div>
  </div>
);

export default FindUs;
