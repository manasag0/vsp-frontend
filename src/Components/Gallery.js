import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const VideoCard = ({_id, title, desc, videoURL, username, categories, views, visibility, createdAt}) =>{
    const navigate = useNavigate();
    return(
        videoURL ?
        <div className="card">
            <video onClick={() => navigate(`/video-stream/${_id}`)}>
                <source src={`http://localhost:4000/api/videos/video/${videoURL.slice(8)}`} type="video/mp4" />
            </video>
            <div className="video-info">
                <p className="title">{title}</p>                
                <p className="username">{username}</p>
            </div>
        </div> :
        <h2>Loading...</h2>
    )
}

const Gallery = ({allVideo, searchKeyword, setClickedVideoId}) =>{
    const [viewAll, setViewAll] = useState(false);
    let temp = null;
    if(searchKeyword){
        temp = allVideo.filter(video => video.title.toLowerCase().includes(searchKeyword.toLowerCase()));
    }
    return(
        <div className="gallery">
            <p className="recent">
                <span>Recent</span>
                <span onClick={() => setViewAll(!viewAll)}>{viewAll ? 'View Less' : 'View All'}</span>
            </p>
            <div className="g-div">
                {   searchKeyword ?
                    temp.map(video => <VideoCard key={video._id} {...video} />) :
                    (
                        viewAll ?
                        allVideo.map(video => <VideoCard key={video._id} {...video} setClickedVideoId={setClickedVideoId} />) :
                        allVideo.slice(0, 4).map(video => <VideoCard key={video._id} {...video} setClickedVideoId={setClickedVideoId} />)
                    )
                }
            </div>
        </div>
    )
}

export default Gallery;