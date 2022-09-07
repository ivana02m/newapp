import React, { Component } from "react";


import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

 
class Main extends Component {
  render() {
    return (
        <div>
          
          <Header></Header>

          <Navbar></Navbar>
        </div>
    );
  }
}
 
export default Main;