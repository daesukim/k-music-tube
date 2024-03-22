import React from 'react'

import { kpopText } from '../../data/Kpop'
import { Link } from 'react-router-dom'

const Kpop = () => {
  return (
    <section id = "kpop">
      <h2> Creating Websites </h2>
      <div className="video_inner">
        {kpopText.map((video, key) => (
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

export default Kpop
