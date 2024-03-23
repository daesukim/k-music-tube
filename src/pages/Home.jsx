import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { tradText } from '../data/Trad'
import { kpopText } from '../data/Kpop'
import { rnbText } from '../data/Rnb'
import { ballardText } from '../data/Ballard'

const Home = () => {
    return (
        <Main 
            title = "Korean Music"
            description="Welcome to Korean Music website">

            <Today />
            <Developer />
            <VideoSlider videos={tradText} title="😁 Korean Traditional Music" id="trad" />
            <VideoSlider videos={kpopText} title="😆 K-POP" id="kpop" />
            <VideoSlider videos={rnbText} title="🤓 Korean R&B" id="rnb" />
            <VideoSlider videos={ballardText} title="🤤 Korean Ballard" id="ballard" />
        </Main>
    )
}

export default Home
