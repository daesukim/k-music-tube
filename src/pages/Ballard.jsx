import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { ballardText } from '../data/Ballard'

const Port = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const ballardPageClass  = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Ballard" description = "Korean Ballard">
      <section id='ballardPage' className={ballardPageClass}>
        <h2>😄 Korean Ballard </h2>
        <div className="video_inner">
            <VideoCards videos={ballardText} />
        </div>
      </section>
    </Main>
  )
}

export default Port
