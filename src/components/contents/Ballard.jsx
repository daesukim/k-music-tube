import React from 'react'

import { ballardText } from '../../data/Ballard'
import { Link } from 'react-router-dom'

function Ballard() {
  return (
    <section id = "ballard">
      <h2> Korean Ballard </h2>
      <div className="video_inner">
        {ballardText.map((video, key) => (
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

export default Ballard
