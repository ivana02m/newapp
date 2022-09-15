/*import React from 'react';
import { useState, useEffect } from 'react';

const UserDashboard = ({data,setData})=>{
    const handleDelete = async(id)=>{
        await axios.delete("http://localhost:3000/person/", +id)
        .then(res=> alert("deleted success"));
        //getUser();
        };

    /*const [data,setData ]=useState([{}]);
     useEffect(()=> {
    getUser();
    console.log(data);
   },[]);
    const getUser=async()=>{
      await axios.get("http://localhost:3000/person")
      .then(res=> setData(res.data));
    };
  
  const handleDelete=async(id)=>{
    await axios.delete("http://localhost:3000/person/", +id)
    .then(res=> alert("deleted success"));
    getUser();
  };*/
    /*return(
        /*<div>
          <h1>UserDashboard</h1>
        <table class=" table th">
            <thead>
               <tr>
                 <th scope="col">Id</th>
                 <th>Name</th>
                 <th>Surname</th>
                 <th>userType</th>
                 <th>createdDate</th>
                 <th>city</th>
                 <th>address</th>
                 <th>Actions</th>
               </tr>
            </thead>
            <tbody>
            {
              data  && data.map(user=>{
                <tr>
                    <th scope="row">{user.id}</th>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.surname}</td>
                    <td>{user.userType}</td>
                    <td>{user.createdDate}</td>
                    <td>{user.city}</td>
                    <td>{user.address}</td>
                    <td style={{display:"flex", justifyContent:"space-between"}}>

                      <button className="btn btn-info">Edit</button>
                      <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>

                    </td>

                </tr>

                })
            }
            
            </tbody>
        </table>
     </div>*/
    

//<UserDashboard data={data} setData={setData}></UserDashboard>
//export default UserDashboard*/