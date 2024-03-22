import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { webdText } from '../data/Webd'

const Webd = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const webdPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Webd" description = "Welcome to Webd">
      <section id = 'webdPage' className={webdPageClass}>
        <h2> 😄 웹디자인기능사 한번에 따자! </h2>
        <div className='video_inner'>
          <VideoCards videos={webdText} />
        </div>
      </section>
    </Main>
  )
}

export default Webd
