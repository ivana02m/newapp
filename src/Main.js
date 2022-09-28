import React, { Component } from "react";
import { useState } from "react";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";




export default function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
          <Header/>
          <Navbar/>
      


    </div>
  );
}

