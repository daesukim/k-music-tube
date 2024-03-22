import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCard'
import { websiteText } from '../data/Website'

const Website = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const websitePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main title = "Website" description = "Welcome to Website">
      <section id='websitePage' className={websitePageClass}>
        <h2>😄 웹사이트의 기초는 이 강의로~</h2>
        <div className="video_inner">
            <VideoCards videos={websiteText} />
        </div>
      </section>
    </Main>
  )
}

export default Website
