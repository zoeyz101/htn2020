import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import FoodItems from './pages/FoodItems';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import NavBar from './components/NavBar';

function App(){
  return(
    <div>
      <Router>
      <NavBar/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/fooditems">
            <FoodItems/>
          </Route>

          <Route path="/recipes">
            <Recipes/>
          </Route>
          
          <Route path="/login">
            <Login/>
          </Route>
          
        </Switch>
      </Router>

    </div>
  )
}

export default App