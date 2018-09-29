import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {

    componentWillMount(){
        console.log("VideoItem" , this.props.video);
    }

    handleClick(){
      console.log("handleClick" , this.props.video);
      this.props.onVideoChange(this.props.video);
    }

  render() {
    return (
      <div className="VideoItem media mb-3" onClick={this.handleClick.bind(this)}>
         <img className="mr-3" src={this.props.video.snippet.thumbnails.default.url}/>
        <div className="media-body">{this.props.video.snippet.title}</div>
      </div>
    );
  }
}

export default VideoItem;
