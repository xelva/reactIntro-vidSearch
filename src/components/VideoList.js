import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, videoSelect }) => {
    const vids = videos.map(video => {
        return <VideoItem key={video.id.videoId} vid={video} clickOnMe={videoSelect} />
    })
    return (
        <div className="ui relaxed divided list">
            {vids}
        </div>
    )
};

export default VideoList;