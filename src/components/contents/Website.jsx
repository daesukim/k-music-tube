import React from 'react'

import { websiteText } from '../../data/Website'
import { Link } from 'react-router-dom'

const Website = () => {
  return (
    <section id = "website">
      <h2> Creating Websites </h2>
      <div className="video_inner">
        {websiteText.map((video, key) => (
          <div className="video" key={key}>
            <div className='video_thumb play_icon'>
              <Link to = {`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Website
