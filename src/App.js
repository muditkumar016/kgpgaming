import React from 'react'
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import Home from "./components/Home";
import Body from './components/Body';
import Bottom from './components/Bottom';
import UserForm from './components/UserForm';

function App() {
  return (
   
    <Router>
      <Header />
      <Switch>
        <Route path='/cart'>
            <Cart />
        </Route>
        <Route path='/userForm'>
            <UserForm />
        </Route>
        <Route path='/'>
            <Body />
            <Home />
            <Bottom />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
