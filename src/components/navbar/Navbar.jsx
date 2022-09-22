import React, { Component, } from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  NavLink,
  //HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./navbar.css";
 
class Navbar extends Component {
  render() {
    return (
        <div>
        <Router>
<div>
  <div className="navbar">
  <li><NavLink to="/" >Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
</div>
  <div className="content">
 
 <Routes><Route path="/" exact element={<Home/>}/> </Routes>
 <Routes><Route path="/about" element={<About/>}/></Routes>
 <Routes><Route path="/contact" element={<Contact/>}/></Routes>
  </div>
</div>
</Router>
        </div>
    );
  }
}
 
export default Navbar;



