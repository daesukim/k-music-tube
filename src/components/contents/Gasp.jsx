import React from 'react'

import { gsapText } from '../../data/Gasp'
import { Link } from 'react-router-dom'

function Gasp() {
  return (
    <section id = "gsap">
      <h2> Creating Websites </h2>
      <div className="video_inner">
        {gsapText.map((video, key) => (
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

export default Gasp
