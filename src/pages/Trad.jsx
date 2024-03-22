import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { tradText } from '../data/Trad'

const Trad = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const tradPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Korean Traditional Music" description = "Korean Traditional Music">
      <section id = 'tradPage' className={tradPageClass}>
        <h2> 😄 Korean Traditional Music </h2>
        <div className='video_inner'>
          <VideoCards videos={tradText} />
        </div>
      </section>
    </Main>
  )
}

export default Trad
