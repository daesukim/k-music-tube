import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { youtubeText } from '../data/Youtube'

const Youtube = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const youtubePageClass  = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Youtube" description = "Welcome to Youtube">
      <section id='youtubePage' className={youtubePageClass}>
        <h2>😄 창의적 사이트를 만들고 싶다면!</h2>
        <div className="video_inner">
            <VideoCards videos={youtubeText} />
        </div>
      </section>
    </Main>
  )
}

export default Youtube