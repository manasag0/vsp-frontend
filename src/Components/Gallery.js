import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/gallery.css';

const VideoCard =({_id,title,desc,videoURL,username,categories,views,visibility,createdAt})=>{
    const navigate = useNavigate();
    return(
        videoURL ?
        <div className='card'>
            <video onClick={()=>navigate(`/video-stream/${_id}`)} >
                <source src={`${videoURL.slice(8)}`} type="video/mp4" />
            </video>
            <div className='video-info'>
                <p className='title'>{title}</p>
                <p className='username'>{username}</p>
            </div>
        </div>:
        <h2>Loading...</h2>
    )
}


export default function Gallery({allVideo,searchKeyword,setClickedVideoId}) {
    const [viewAll,setViewAll] = useState(false);
    let temp = null;
    if(searchKeyword){
        temp = allVideo.filter(video=>video.title.toLowerCase().includes)
    }
  return (
    <div className='gallery'>
        <p className='recent'>
            <span>Recent</span>
            <span onClick={()=>setViewAll(!viewAll)}>{viewAll ? 'View less': 'View All'}</span>
        </p>
        <div className='g-div'>
            { searchKeyword ?
            temp.map(video =><VideoCard key={video._id}{...video} setClickedVideoId={setClickedVideoId} />) :
            allVideo.slice(0,4).map(video => <VideoCard key={video._id}{...video} setClickedVideoId={setClickedVideoId} />)

            }
        </div>
    </div>
  )
}
