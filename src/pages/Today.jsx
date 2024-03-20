import React from 'react'
import Main from '../components/section/Main'

import { todayText } from '../data/Today'
import { Link } from 'react-router-dom'

const Today = () => {
  return (
    <Main title = "Today" description = "Welcome to Today">
      

      <section id = "todayPage">
        <h2> Today's Recommended Videos</h2>
        {todayText.map((today, key) => (
          <div className='today_inner' key={key}>
            <div className='today_thumb play_icon'>
              <Link to = {today.page}>
                <img src = {today.img} alt={today.title} />
              </Link>
            </div>
            <div className='today_text'>
              <span className='today'>today!</span>
              <h3 className='title'>
                <Link to = {today.page}>
                  {today.title}
                </Link>
              </h3>
              <p className='desc'>{today.desc}</p>
              <div className='info'>
                <span className='author'>
                  <Link to = {`/channel/${today.channelId}`}>
                    {today.author}
                  </Link>
                </span>
                <span className='date'>{today.date}</span>
              </div>  
            </div>
          </div>
        ))}
      </section>
    </Main>
  )
}

export default Today
