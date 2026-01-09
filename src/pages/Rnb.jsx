import { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCard'
import { rnbText } from '../data/Rnb'
import { usePageTitle } from '../utils/usePageTitle'

const Rnb = () => {
  const [loading, setLoading] = useState(true); 

  usePageTitle('R&B');

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const rnbPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='rnbPage' className={rnbPageClass}>
        <div className='section-title'>
            <h2>Korean R&B</h2>
        </div>
        <div className="video_inner">
            <VideoCards videos={rnbText} />
        </div>
      </section>
    </Main>
  )
}

export default Rnb
