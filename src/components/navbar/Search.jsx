
import axios from "axios";
//import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn} from "mdb-react-ui-kit";
import React, { useState, useEffect } from 'react';


function Search(){
  const [data,setData ]=useState([]);
  const [value,setValue ]=useState("");


  useEffect(()=>{
    loadUsersData();
  },[] );
   

    const loadUsersData= async()=>{
      return await axios
      .get("http://localhost:3000/person")
      .then((response)=>setData(response.data))
      .catch((err)=>console.log(err));
    };
    console.log("data", data);

    const handleSearch=async(e)=>{
    e.preventDefault();
    return await axios.get(`http://localhost:3000/person?q=${value}`)
   
    .then((response)=>{
     setData(response.data);
     setValue("");
    })
    .catch((err)=>console.log(err));
     };


   return(
    <div>
      <div>
      <form style={{ 
     margin:"auto" ,
      padding:"15px",
      maxWidth:"400px",
      alignContent:"center",  
      }}
      className="cs"
       onSubmit={handleSearch}
      />
      <input
      type="text"
      className="csc"
      placeholder="search..."
      value={value}
      onChange={(e)=> setValue(e.target.value)}
      />
      <button type="submit" color="dark">Search</button>
        <div>
           <div>
              <div>
                <table>
                  <thead>
                      <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>surname</th>
                        <th>userType</th>
                        <th>createdDate</th>
                        <th>city</th>
                        <th>address</th>
                      </tr>
                  </thead>
                  {data.length === 0 ? (
                    <tbody>
                    <tr>
                     <td>No Data Found</td>
                    </tr>
                    </tbody>
                  ):(
                    data.map((item,id)=>(
                      <tbody key={id}>
                      <tr> 
                       <td>{item.id}</td>
                       <td>{item.name}</td>
                       <td>{item.surname}</td>
                       <td>{item.userType}</td>
                       <td>{item.createdDate}</td>
                       <td>{item.city}</td>
                       <td>{item.address}</td>
                      </tr>
                      </tbody>
                    ))
                  )}
                </table>
              </div>
          </div>
       </div>
    </div>
       <form style={{ 
         margin:"auto" ,
         padding:"15px",
         maxWidth:"400px",
         alignContent:"center",  
         }}
         className="cs"
         onSubmit={handleSearch}
         >  
            <input
            type="text"
            className="csc"
            placeholder="search..."
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            />
         <button type="submit" color="dark">Search</button>
        </form>   
        </div>
             
)
}
export default Search;

