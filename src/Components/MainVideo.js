import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";


const MainVideo = ({allVideo}) =>{
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [singleVideo, setSingleVideo] = useState({});
    useEffect(() =>{
        setSingleVideo(allVideo.find(video => id === video._id));
    }, [allVideo, id]);
    return(
        <div className="main-video">
            {
                singleVideo?.videoURL ?
                <div className="video-info">
                    <video controls>
                        <source src={`http://localhost:4000/api/videos/video/${singleVideo.videoURL.slice(8)}`} type="video/mp4" />
                    </video>
                    <div className="info">
                        <p className="title">{singleVideo.title}</p>
                        <p className="desc">{singleVideo.desc}</p>
                        <p className="date-views">
                            <span className="date">{new Date().toDateString(singleVideo.createdAt)}</span>
                            <span className="views">{singleVideo.views} views</span>
                        </p>
                        <div className="categories-visibility">
                            <span className="category">{singleVideo.categories[0]}</span>
                            <span className="visibility">{singleVideo.visibility}</span>
                        </div>
                        <p className="username">{singleVideo.username}</p>
                    </div>
                </div> :
                <h2>Loading...</h2>   
            }
        </div>
    )
}
export default MainVideo;