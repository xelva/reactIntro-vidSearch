import React from 'react';
import './VideoItem.css';

const VideoItem = ({ vid, clickOnMe }) => {
    console.log(vid)
    return (
        <div className="item video-item" onClick={(event) => {clickOnMe(vid)}}> 
                <img className="ui image" alt="a great video" src={vid.snippet.thumbnails.medium.url}/>
                <div className="content">
                    <div className="header">{vid.snippet.title}</div> 
                    <div className="description">{vid.snippet.description}</div> 
                </div>
        </div>
    )
}

export default VideoItem;