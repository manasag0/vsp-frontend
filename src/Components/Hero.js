
const Hero=({Hero_video})=>{
const {title,desc,videUrl,username,views,createdAt}=Hero_video
return(
    videUrl?
    <div className="hero">
        <div className="video-conatiner">
            <video controls>
                <source src={''}/>
            </video>
        </div>
        <div className="video-info"><h1 className="title">
            <span>{title}</span>
        </h1>
        <p className="desc">{desc}</p>
        <p className="date-duration-view">
            <span>{new Date().toDateString(createdAt)}</span>
            <span>14 Minus</span>
            <span>{views}Views</span>
        </p>
        <div className="publisher">
            <p className="username">{username}</p>
        </div>
        </div>
    </div>:
    <h2>Loading</h2>
)

}
export default Hero;