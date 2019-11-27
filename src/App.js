import React, { Component } from 'react';
  import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import MoodsContainer from './containers/MoodsContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/" component={MoodsContainer} />
        </div>
      </Router>
      
    );
  }
}

export default App;
