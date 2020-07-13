import React from 'react';
import BreedList from './components/BreedList';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">

           
              <Link className="navlink" to="/">Home</Link>

              <Link className="navlink" to="/about">About</Link>
            
              <Link className="navlink" to="/breeds">Breeds</Link>

          	  <img className="logo" src="https://imageog.flaticon.com/icons/png/512/12/12638.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"/>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/breeds">
            <BreedList />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


