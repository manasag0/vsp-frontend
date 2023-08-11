import Nav from '../Components/Nav';
import MainVideo from '../Components/MainVideo';
import Sidebar from '../Components/Sidebar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const MainVideoAndSidebar = () =>{
    const [allVideo, setAllVideo] = useState([]);
    useEffect(() =>{
        const getAllVideos = async () =>{
            try{
                const response = await axios.get('https://vsp-api.onrender.com/api/videos');
                setAllVideo(response.data);    
            }catch(error){
                console.error(error);
            }
        }
        getAllVideos();
    }, []);
    return(
        <>
            <Nav />
            <div className="main-sidebar">
                <MainVideo allVideo={allVideo} />
                <Sidebar allVideo={allVideo} />
            </div>
        </>

    )
}

export default MainVideoAndSidebar;