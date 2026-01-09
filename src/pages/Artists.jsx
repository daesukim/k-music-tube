import Main from '../components/section/Main'
import { ArtistText } from '../data/Artist'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../utils/usePageTitle'

const Artists = () => {
  usePageTitle('Artist');

  return (
    <Main>
      <section id = "artistPage">
        <div className='section-title'>
            <h2>Favorite Artists</h2>
        </div>
        <div className='artist_inner'>
          {ArtistText.map((artist, key) => (
            <div className='artist' key={key}>
              <div className="artist_img play_icon">
                <Link to = {`/channel/${artist.channelId}`}>
                  <img src={artist.img} alt={artist.name} />
                </Link>
              </div>
              <div className="artist_info">
                <Link to = {`/channel/${artist.channelId}`}>
                  {artist.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Artists
