import React from 'react'

import { developerText } from '../../data/Developer'
import { Link } from 'react-router-dom'

const Developer = () => {
  return (
    <section id = "developer">
      <h2>Favorite Developers</h2>
      <div className='developer_inner overflow'>
        {developerText.map((developer, key) => (
          <div className='developer' key={key}>
            <div className="developer_img play_icon">
              <Link to = {`/channel/${developer.channelId}`}>
                <img src={developer.img} alt={developer.name} />
              </Link>
            </div>
            <div className="developer_info">
              <Link to = {`/channel/${developer.channelId}`}>
                {developer.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Developer
