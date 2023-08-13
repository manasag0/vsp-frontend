import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Gallery from '../Components/Gallery'
import { useState,useEffect } from 'react';
import axios from "axios";
const Home = () => {
  const [searchKeyword, setsearchKeyword] = useState('');
  const [firstVideo,setfirstVideo]=useState([]);
  const [allVideo,setAllVideo]=useState([]);
  useEffect(() => {
    const fetchData=async()=>{
      try{
        const response=await axios.get('http://localhost:4000/api/videos/');
        setfirstVideo(response.data[0]);
        setAllVideo(response.data);
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []);
  return (
    <div className="home">
      <NavBar setSearchKeyword={setsearchKeyword}/>
      <Hero firstVideo={firstVideo}/>
      <Gallery allVideo={allVideo} searchKeyword={searchKeyword}/>
    </div>
  );
};

export default Home;
