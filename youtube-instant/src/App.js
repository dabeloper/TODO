import React, { Component } from 'react';
import Video from './components/Video/Video';
import YTSearch from 'youtube-api-search';
import './App.css';
import SearchBar from './components/Video/SearchBar';
import VideoList from './components/Video/VideoList';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  componentWillMount(){
    this.searchVideo("tamos bien");
  }

  searchVideo(video){
    console.log("searchVideo",video);
    var API_KEY = "AIzaSyBC_oautl-oHWFlqb8b_nkMFWgb4epYWiA";
    YTSearch({key: API_KEY, term: video}, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  handleChangeSelectedVideo(video){
    this.setState({
      videos: this.state.videos,
      selectedVideo: video
    });
  }
  
  render() {
    return (
      <div className="App container">
      <SearchBar onVideoChange={this.searchVideo.bind(this)}></SearchBar>
      <div className="row">
        <Video video={this.state.selectedVideo}></Video>
        <VideoList onChangeSelectedVideo={this.handleChangeSelectedVideo.bind(this)} videos={this.state.videos}></VideoList>
      </div>
      </div>
    );
  }
}

export default App;
