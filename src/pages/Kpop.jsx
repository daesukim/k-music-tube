import { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCard'
import { kpopText } from '../data/Kpop'
import { usePageTitle } from '../utils/usePageTitle'

const Kpop = () => {
  const [loading, setLoading] = useState(true);

  usePageTitle('K-pop');

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const kpopPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='kpopPage' className={kpopPageClass}>
        <div className='section-title'>
            <h2>K-POP</h2>
        </div>
        <div className="video_inner">
            <VideoCards videos={kpopText} />
        </div>
      </section>
    </Main>
  )
}

export default Kpop
