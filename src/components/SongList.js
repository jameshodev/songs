// import React from 'react';
// class SongList extends React.Component {}
//        Is the same as this:
// import React, { Component } from 'react';
// class SongList extends Component {};
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    // console.log("this renderlist", this);
    // this.props === {songs: state.songs };
    // console.log("this.props is", this.props);
    // Anytime we click on the button, we are updating the state in the Redux store
    // therefore, causing mapStatetoProps to re-render
    return this.props.songs.map((song) => {
      return (
        
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    });
  };
  render() {
    // console.log(this.props);
    // console.log("hi");
    return <div className="ui divided list">{this.renderList()}</div>;
  }
};

// mapStateToProps is the naming convention
// state is all the data inside of redux store
// or it is the entire list of song, and selected song inside the reducers
// mapStateToProps is passing songs: state.songs as props inside of the Songlist component 
const mapStateToProps = (state) => {
  // console.log("state is", state);
  return {songs: state.songs };
}
// Invoking the second function and passing in SongList
// { selectSong: selectSong } can also be written as {selectSong} since the names are the same
// selectSong is the Action Creators
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
