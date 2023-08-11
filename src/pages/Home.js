import React, { useState ,useEffect} from "react";
import NavBar from "../Components/NavBar";
import Hero from '../Components/Hero';
import Gallery from '../Components/Gallery'

const Home = () => {
  const [searchKeyword, setsearchKeyword] = useState("");
  const [hero_video, sethero_video] = useState({});
  const [allVideo, setAllVideo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/videos");
        if (response.ok) {
          const data = await response.json();
          sethero_video(data[0]);
          setAllVideo(data);
        } else {
          console.error(`HTTP error! Status: ${response.status}`);
          // Handle error
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <NavBar setsearchKeyword={setsearchKeyword} />
      <Hero hero_video={hero_video} />
      <Gallery allVideo={allVideo} searchKeyword={searchKeyword}/>
    </div>
  );
};

export default Home;
