import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList'
import './../App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <CharacterList />
        <HeroList />
      </div>
    );
  }
}

export default App;
