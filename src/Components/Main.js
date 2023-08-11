const Main = ({firstVideo}) => {
    const {title, desc, videoURL, username, views, createdAt} = firstVideo;
    return(
        videoURL ?
        <div className="hero">
            <div className="video-container">
                <video controls>
                    <source src={`https://vsp-api.onrender.com/api/videos/video/${videoURL.slice(8)}`} />
                </video>
            </div>
            <div className="video-info">
                <h1 className="title">
                    <span>{title}</span>
                </h1>
                <p className="desc">{desc}</p>
                <p className="date-duration-views">
                    <span>{new Date().toDateString(createdAt)}</span>
                    <span>14 Minus</span>
                    <span>{views} Views</span>
                </p>
                <div className="publisher">
                    <p className="username">{username}</p>
                </div>
            </div>
        </div> :
        <h2>Loading</h2>
    )
}

export default Main;