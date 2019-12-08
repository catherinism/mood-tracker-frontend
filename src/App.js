import React, { Component } from 'react';
  import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import MoodsContainer from './containers/MoodsContainer'
import QuotesContainer from './containers/QuotesContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/" component={MoodsContainer} />
          <Route path="/" component={QuotesContainer} />
        </div>
      </Router>
      
    );
  }
}

export default App;
