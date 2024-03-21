import React from 'react'

import { portfolioText } from '../../data/Portfolio'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <section id = "portfolio">
      <h2> Creating Websites </h2>
      <div className="video_inner">
        {portfolioText.map((video, key) => (
          <div className="video" key={key}>
            <div className='video_thumb_play_icon'>
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

export default Portfolio
