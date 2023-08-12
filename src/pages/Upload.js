import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';


export default function Upload() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [categories, setCategories] = useState([]);
    const [visibility, setVisibility] = useState([]);
    const [videoURL, setVideoURL] = useState(null);
    const hadleTitleChange = event => {
        setTitle(event.target.value)
    }
    const handleDescChange = event => {
        setDesc(event.target.value)
    }
    const handleCategoryChange = event => {
        setCategories(event.target.value)
    }
    const handleVisibilityChange = event => {
        setVisibility(event.target.value)
    }
    const hadleVideoFileChange = event => {
        setVideoURL(event.target.files[0])
    }


    const onSubmitHandle = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('videoURL', videoURL);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('categories', categories);
        formData.append('visibility', visibility);
        formData.append('username', localStorage.getItem('username'));
        formData.append('views', 0);
        try {
            const res = await axios.post('', formData);
            console.log(res)

        } catch (e) {
            console.error(e)
        }
        navigate('/')
        return (
            <>
                <NavBar indicator='userpage' />
                <form method="post" className="upload-form" onSubmit={onSubmitHandle}>
                    <div className='upload'>
                        <div className='video'>
                            <label htmlFor='upload-new-video'>Upload New Video</label>
                            <input onChange={hadleVideoFileChange} name='video' type='file' accept='video/*' id='upload-new-video' />
                        </div>
                        <div className='title'>
                            <label htmlFor='name'>Name</label>
                            <input onChange={hadleTitleChange} type="text" name='title' />

                        </div>
                        <div className='desc'>
                            <textarea rows="4" cols="50" placeholder="Description..." onChange={handleDescChange} />
                        </div>
                        <div className='category-and-visibility'>
                            <div className='category'>
                                <select onChange={handleCategoryChange} name='categories' id='category'>
                                    <option value="">Select Category</option>
                                    <option value="action">Action</option>
                                    <option value="comedy"> Come</option>
                                    <option value="horror">Horror</option>
                                    <option value="sci-fiction">Sci-Fiction</option>
                                    <option value="romance">Romance</option>
                                </select>
                            </div>
                            <div className='visiblility'>

                                <label htmlFor='visibility'>Visibility</label>
                                <select onChange={handleVisibilityChange} name='visibility' id='visibility'>
                                    <option value=''>Select visibility</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='btn'>
                        <button onClick={onSubmitHandle} type='submit'></button>
                    </div>
                </form>
            </>
        )
    }
}