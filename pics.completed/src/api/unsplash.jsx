// import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
     'Client-ID nJ-aXkCdVKTT3lgO_1qzy49sAe0hZmpudD3u1eCXpYQ'

  }
}); 