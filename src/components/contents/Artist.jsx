import { ArtistText } from '../../data/Artist';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const Artist = () => {
    return (
        <section id='artist'>
            <div className='section-title'>
                <h2>Favorite Artists</h2>
            </div>
            <div className='artist_inner'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                        1640: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    {ArtistText.map((artist, key) => (
                        <SwiperSlide key={key}>
                            <div className='artist' key={key}>
                                <div className='artist_img play_icon'>
                                    <Link to={`/channel/${artist.channelId}`}>
                                        <img src={artist.img} alt={artist.name} />
                                    </Link>
                                </div>
                                <div className='artist_info'>
                                    <Link to={`/channel/${artist.channelId}`}>
                                        {artist.name}
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Artist