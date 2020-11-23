import React from 'react';
import Home from './components/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/blog/api-documentation'
                component={() => { 
              window.location.href = 'https://medium.com/@stephenmcbride/how-i-use-githubs-wiki-feature-for-api-documentation-996a6407d270'; 
              return null;
            }}
          />
      </Switch>
    </Router>
  );
}

export default App;
