import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main';
import ReactPlayer from 'react-player';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";


const Video = () => {

  const {videoID} = useParams();
  const [ videoDetail, setVideoDetail ] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoID}`)
    .then((data) => {
        console.log(data);
        setVideoDetail(data.items[0])
    })
  }, [videoID]);


  return (
    <Main title = "Video" description = "Welcome to Video">
      {videoDetail && (
        <div className="video_view">
          <div className="video_play">
            <ReactPlayer
              playing={true}
              url={`https://www.youtube.com/watch?v=${videoID}`} 
              width='100%'
              height='100%'
              style={{position:'absolute', top:0, left:0}}
            />
          </div>
          <div className="video_info">
            <h2 className='video_title'>
              {videoDetail.snippet.title}
            </h2>
            <div className="video_channel">
              <div className="id">
                <Link to='/channel/'>{videoDetail.snippet.channelTitle}</Link>
              </div>
              <div className="count">
                <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
              </div>
            </div>
            <div className="video_desc">
              {videoDetail.snippet.description}
            </div>
          </div>
        </div>
      )}
    </Main>
  )
}

export default Video
