import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { portfolioText  } from '../data/Portfolio'

const Port = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const portPageClass  = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Port" description = "Welcome to Port">
      <section id='portPage' className={portPageClass}>
        <h2>😄 창의적 사이트를 만들고 싶다면!</h2>
        <div className="video_inner">
            <VideoCards videos={portfolioText} />
        </div>
      </section>
    </Main>
  )
}

export default Port
