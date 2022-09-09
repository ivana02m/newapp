import React, { Component } from "react";
import { useState } from "react";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
//import DisplayTable from "./components/navbar/DisplayTable";
//import Dropdown from "./components/Dropdown";
//import Searchfilter from "./search-filter";


export default function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
          <Header></Header>
          <Navbar></Navbar>
      

        
        

         
    </div>
  );
}

/*<Searchfilter></Searchfilter>*/

 /*{/* custom dropdown menu */
 /*  <Dropdown selected={selected} setSelected={setSelected} />
     <br />
     <br />
    <br />
     {selected}*/