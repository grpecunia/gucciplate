import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Roadmap from './components/Roadmap'
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/Contact" render={props => <Contact {...props} />} />
        <Route exact path="/About" render={props => <About {...props} />} />
        <Route exact path="/Roadmap" render={props => <Roadmap {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
