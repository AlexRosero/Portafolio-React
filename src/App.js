import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Portafolio from './pages/Portafolio';
import Home from './pages/Home';
import Error404 from './pages/Error404';




import './App.css';


function App() {
  return (

    <Router>
      <Switch>
      

        <Route path="/portafolio">
          <Portafolio />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Error404/>
        </Route>

      </Switch>

    </Router>
    



  );
}

export default App;


