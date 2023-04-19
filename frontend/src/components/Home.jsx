import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import routes from '../routes.js';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId?.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userId'));

    if (!userId?.token) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    axios.get(routes.dataPath(), { headers: getAuthHeader() }).then((response) => {
      console.log(response.data); // => { channels: [{id: 1, name: 'general', removable: false},
      // {id: 2, name: 'random', removable: false}], currentChannelId: 1, messages: [] }
    });
  }, []);

  return <h2>Home</h2>;
};

export default Home;
