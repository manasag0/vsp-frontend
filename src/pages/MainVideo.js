import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

function MainVideo() {
  const [allVideo, setallVideo] = useState([]);
  useEffect(() => {
    const getAllVideos = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/videos`);
        setallVideo(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllVideos();
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-sidebar">
        <MainVideo allVideo={allVideo} />
        <Sidebar allVideo={allVideo} />
      </div>
    </>
  );
}

export default MainVideo;
