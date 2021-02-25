import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// curly braces mean we want to specifically import
// the named export from this file
// import { selectSong } from '../actions/index';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  ) 
};

export default App;