import React, { Component } from 'react';
import './App.css';
import Tabbar from './components/Tabbar';
import Navbar from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        {
          this.props.children
        }
        <Tabbar />
        

        
      </div>
      
    )
  }
}

export default App;
