import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { kpopText } from '../data/Kpop'

const Kpop = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const kpopPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "K-pop" description = "Recommended Korean Hip Hop">
      <section id='kpopPage' className={kpopPageClass}>
        <h2>😄 K-POP </h2>
        <div className="video_inner">
            <VideoCards videos={kpopText} />
        </div>
      </section>
    </Main>
  )
}

export default Kpop
