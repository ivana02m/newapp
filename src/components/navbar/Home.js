import React, { Component } from "react";
import { useState } from "react";
import Dropdown from "../Dropdown";
import Search from "./Search";
import "./home.css"

//import DyTable from "./DyTable";
//import Searchfilter from "../../search-filter"; 



export default function Home() {
  const [selected, setSelected] = useState("UserType");
  return (
    <div className="App">
     {/* custom dropdown menu */}
      <p>User Type:</p> 
      <Dropdown selected={selected} setSelected={setSelected} />
      <Search></Search> 
      
      
    </div>
  );
}

   //













/*class Home extends Component {
  render() {
    const [selected, setSelected] = useState("Choose One");
    return (
      <div>
        <h2>Home</h2>
       {/* custom dropdown menu */
       /*<Dropdown selected={selected} setSelected={setSelected} />
          <br />
          <br />
         <br />
        {selected}

        <Searchfilter></Searchfilter>

        

      </div>
    );
  }
}
 
export default Home;*/


//
//{selected}
//<DyTable></DyTable>
