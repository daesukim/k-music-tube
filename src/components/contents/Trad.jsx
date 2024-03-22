import React from 'react'

import { tradText } from '../../data/Trad'
import { Link } from 'react-router-dom'


const Trad = () => {
  return (
    <section id = "tradPage">
      <h2> Korean Traditional Music </h2>
      <div className="video_inner">
        {tradText.map((video, key) => (
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

export default Trad
