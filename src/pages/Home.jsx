import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Artist from '../components/contents/Artist'
import VideoSlider from '../components/videos/VideoSlider'
import { tradText } from '../data/Trad'
import { kpopText } from '../data/Kpop'
import { rnbText } from '../data/Rnb'
import { ballardText } from '../data/Ballard'
import { usePageTitle } from '../utils/usePageTitle'

const Home = () => {
    usePageTitle('Homepage');

    return (
        <Main>
            <Today />
            <Artist />
            <VideoSlider videos={tradText} title="Korean Traditional Music" id="trad" />
            <VideoSlider videos={kpopText} title="K-POP" id="kpop" />
            <VideoSlider videos={rnbText} title="Korean R&B" id="rnb" />
            <VideoSlider videos={ballardText} title="Korean Ballard" id="ballard" />
        </Main>
    )
}

export default Home
