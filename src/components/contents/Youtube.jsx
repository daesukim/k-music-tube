import React from 'react'

import { youtubeText } from '../../data/Youtube'
import { Link } from 'react-router-dom'

const Youtube = () => {
  return (
    <section id = "youtube">
      <h2> Creating Websites </h2>
      <div className="video_inner">
        {youtubeText.map((video, key) => (
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

export default Youtube
