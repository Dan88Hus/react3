import React from 'react';
import './videoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
  // console.log(video);
  return (
    <div onClick={() => onVideoSelect(video)}
    className='item'>
      <img 
      
      className='ui image' 
      src={video.snippet.thumbnails.medium.url} 
      alt={video.snippet.title}/>
      <div className='content'>
        <div className="header">
        {video.snippet.title}
        </div>
      </div>
    </div>
  )
}
export default VideoItem;
