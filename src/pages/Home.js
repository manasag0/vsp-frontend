import React from 'react';
import Nav from '../Components/Nav';
import Gallery from '../Components/Gallery'
import Main from '../Components/Main';
import {useState, useEffect} from 'react';
import axios from 'axios';

// const Nav = require('../Components/Nav');
// const Gallery = require('../Components/Gallery');
// const Main = require('../Components/Main');
// const React = require('react');
// const { useState, useEffect } = require('react');
// const axios = require('axios');

const Home = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [firstVideo, setFirstVideo] = useState({});
    const [allVideo, setAllVideo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://vsp-api.nrender.com/api/videos');
                setFirstVideo(response.data[0]);
                setAllVideo(response.data);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };
        fetchData();
    }, []);

    return React.createElement('div', { className: 'home' },
        React.createElement(Nav, { setSearchKeyword: setSearchKeyword }),
        React.createElement(Main, { firstVideo: firstVideo }),
        React.createElement(Gallery, { allVideo: allVideo, searchKeyword: searchKeyword })
    );
};

export default Home;
