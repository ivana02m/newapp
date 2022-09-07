import React, { Component, } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./navbar.css";
 
class Navbar extends Component {
  render() {
    return (
        <div>
       <HashRouter>
<div>
  <div className="navbar">
  <li><NavLink exact to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
</div>
  <div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/contact" component={Contact}/> 
  </div>
</div>
</HashRouter>
        </div>
    );
  }
}
 
export default Navbar;



