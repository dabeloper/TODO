import React, { Component } from 'react';
import './VideoList.css';
import VideoItem from './VideoItem';

class VideoList extends Component {

    handleChange(vid){
        console.log("handleChange",vid)
        this.props.onChangeSelectedVideo(vid);
    }

  render() {
    

    return (
      <div className="VideoList col-sm-4">
        {this.props.videos.map( vid => {return <VideoItem onVideoChange={this.handleChange.bind(this)} video={vid}></VideoItem>})}
      </div>
    );
  }
}

export default VideoList;
