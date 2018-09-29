import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    handleChange(){
        this.props.onVideoChange(this.refs.video.value);
    }

  render() {
    return (
      <div className="SearchBar col-sm-12">
      <input type="text" placeholder="Video" ref="video" className="form-control" onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default SearchBar;
