import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';

import './Intro.css';

const Intro = () => {
  const[playVideo, setPlayVideo]= React.useState(false)

  const vidRef = React.useRef();
  return(
    <div className='app__vedio'>
    <video
      src={meal}
      ref={vidRef}
      type="video.mp4"
      loop
      controls = {false}
      muted
    />
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex-center"></div>

    </div> 
  </div>
  )
}

export default Intro;
