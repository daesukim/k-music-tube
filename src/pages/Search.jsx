import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { useParams } from 'react-router-dom'
import VideoSearch from '../components/videos/VideoSearch';

const Search = () => {
  const { searchID }  = useParams();
  const[videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchID}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
    .then(response => response.json())
    .then(result => {
      console.log(result);
      setVideos(result.items)
    })
    .catch(error => console.log(error));
  }, [searchID]);

  return (
    <Main title = "Search" description = "Welcome to Search">
      <section id = 'searchPage'>
        <div className='video_inner search'>
          <VideoSearch videos = {videos} />
        </div>
      </section>
    </Main>
  )
}

export default Search
