import React, { Component } from 'react';
import './Video.css';

class Video extends Component {

    componentWillMount(){
    }

  render() {
      console.log(this.props.video);
      if(this.props.video){
          var url = "https://www.youtube.com/embed/"+this.props.video.id.videoId+"?autoplay=1";
        return (
          <div className="Video col-sm-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="Video"
                            src={url} allow="autoplay; encrypted-media" 
                            allowFullScreen></iframe>
            </div>
            <div className="title">{this.props.video.snippet.title}</div>
            <div className="description">{this.props.video.snippet.description}</div>
          </div>
        );
      }else{
        return (
            <div className="Video col-sm-8">
            Cargando...
            </div>
          );
      }
  }
}

export default Video;
