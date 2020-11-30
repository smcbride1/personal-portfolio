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
          <Route path='/blog/action-cable-api-only'
                component={() => { 
              window.location.href = 'https://stephenmcbride.medium.com/how-to-use-action-cable-with-an-api-only-application-e1db58f1b7c6'; 
              return null;
            }}
          />
      </Switch>
    </Router>
  );
}

export default App;
