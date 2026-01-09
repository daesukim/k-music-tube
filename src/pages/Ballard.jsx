import { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCard'
import { ballardText } from '../data/Ballard'
import { usePageTitle } from '../utils/usePageTitle'

const Port = () => {
  const [loading, setLoading] = useState(true); 

  usePageTitle('Ballard');

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 300);
  }, []);

  const ballardPageClass  = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main>
      <section id='ballardPage' className={ballardPageClass}>
        <div className='section-title'>
            <h2>Korean Ballard</h2>
        </div>
        <div className="video_inner">
            <VideoCards videos={ballardText} />
        </div>
      </section>
    </Main>
  )
}

export default Port
