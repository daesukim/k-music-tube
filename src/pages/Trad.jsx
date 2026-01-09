import { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCard'
import { tradText } from '../data/Trad'
import { usePageTitle } from '../utils/usePageTitle'

const Trad = () => {
  const [loading, setLoading] = useState(true); 

  usePageTitle('Traditional');

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const tradPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id = 'tradPage' className={tradPageClass}>
        <div className='section-title'>
            <h2>Korean Traditional Music</h2>
        </div>
        <div className='video_inner'>
          <VideoCards videos={tradText} />
        </div>
      </section>
    </Main>
  )
}

export default Trad
