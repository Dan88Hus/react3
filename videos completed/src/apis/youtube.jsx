// import React from 'resact';
import axios from 'axios';


const KEY = 'AIzaSyB1gyfoB6hLZzaTx6rGuk-e_2JePCk4cKc'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    
  }
});
