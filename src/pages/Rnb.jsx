import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { rnbText } from '../data/Rnb'

const Rnb = () => {

  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const rnbPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "rnb" description = "Korean R&B">
      <section id='rnbPage' className={rnbPageClass}>
        <h2>😄 Korean R&B</h2>
        <div className="video_inner">
            <VideoCards videos={rnbText} />
        </div>
      </section>
    </Main>
  )
}

export default Rnb
