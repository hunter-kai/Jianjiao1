import React, { Component } from 'react';
import './App.css';
import Tabbar from './components/Tabbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabbar />
        {
          this.props.children
        }
      </div>
    )
  }
}

export default App;
