
import axios from "axios";
import {MDBTable, MDBTableHead, MDBTableBody, MDBRow, MDBCol, MDBContainer, MDBBtn} from "mdb-react-ui-kit";
import React, { useState, useEffect } from 'react';


function Ssearch(){
  const [data,setData ]=useState([]);
  const [value,setValue ]=useState("");


  useEffect(()=>{
    loadUsersData();
  },[] );
   
    const loadUsersData= async()=>{
      return await axios.get("http://localhost:3000/person")
      //return await fetch("http://localhost:3000/person")
      .then((response)=>setData(response.data))
      .catch((err)=>console.log(err));
      
    };
      
    console.log("data", data);

    const handleSearch=async(e)=>{
    e.preventDefault();
    return await axios.get(`http://localhost:3000/person?q=${value}`)
    //return await fetch("http://localhost:3000/person")
    .then((response)=>{
     setData(response.data);
     setValue("");
    })
    .catch((err)=>console.log(err));
     };

   return(
    <div>
    <MDBContainer>
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
      <MDBButton type="submit" color="dark">Search</MDBButton>
        <div>
           <MDBRow>
              <MDBCol>
                <MDBTable>
                  <MDBTableHead>
                      <tr>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                        <th>Name</th>
                      </tr>
                  </MDBTableHead>
                  {data.length === 0 ? (
                    <MDBtableBody>
                    <tr>
                     <td>Nod Data Found</td>
                    </tr>
                    </MDBtableBody>
                  ):(
                    data.map((item,index)=>(
                      <MDBTableBody key={index}>
                      <tr> 
                       <th>{index+1}</th>
                       <td>{item.name}</td>
                       <td>{item.name}</td>
                       <td>{item.name}</td>
                       <td>{item.name}</td>
                       <td>{item.name}</td>
                       <td>{item.name}</td>
                       <td>{item.name}</td>
                      </tr>
                      </MDBTableBody>
                    ))
                  )}
                </MDBTable>
              </MDBCol>
          </MDBRow>
       </div>
    </MDBContainer>
    <div>
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
         <MDBButton type="submit" color="dark">Search</MDBButton>
        </form>   
        </div>
        </div>     
)
}
export default Ssearch; 

