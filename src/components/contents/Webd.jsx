import React from 'react'

import { webdText } from '../../data/Webd'

import { Link } from 'react-router-dom'


const Webd = () => {
  return (
    <section id = "webd">
      <h2> For Web Designs </h2>
      <div className="video_inner">
        {webdText.map((video, key) => (
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

export default Webd
