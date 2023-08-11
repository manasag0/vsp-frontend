import React from "react";const Sidebar = ({allVideo}) =>{
    return (
        <div className="sidebar">
            {
                allVideo.map(video =>{
                    return(
                        <div className="single-video-with-info">
                            <video controls>
                                <source src={`https://vsp-apionrender.com/api/videos/video/${video.videoURL.slice(8)}`} type="video/mp4" />
                            </video>
                            <p className="title">{video.title}</p>
                            <p className="desc">{video.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar;