import axios from "axios";
import React, { useState, useEffect } from 'react';
//import UserDashboard from "./UserDashboard";

const AddUser= ()=>{const [data,setData ]=useState([{}]);
useEffect(()=>{
getUser();
console.log(data);
},[]);
const getUser=async()=>{
 await axios.get("http://localhost:3000/person")
 .then(res=> setData(res.data));
};
    const [formData, setFormData ]=useState({
        id: "",
        name: "",
        surname: "",
        userType: "",
        createdDate: "",
        city: "",
        address: ""
    });

    const [updateData, setUpdateData ]=useState({
        id: "",
        name: "",
        surname: "",
        userType: "",
        createdDate: "",
        city: "",
        address: ""
    });

    /*const getUser=async()=>{
        await axios.get("http://localhost:3000/person")
        .then(res=> setData(res.data));
      };*/
    const handleFormSubmit=async(e)=>{
       let response= await axios.person("http://localhost:3000/person", formData);

       if (response){
        alert("data submitted successfully")
       }else{
        alert ("something went wrong");
       }
        setFormData({
            id: "",
            name: "",
            surname: "",
            userType: "",
            createdDate: "",
            city: "",
            address: ""  
        });
        e.preventDefault();
        getUser();
    };  
    const handleDelete=async(id)=>{
        await axios.delete("http://localhost:3000/person/", +id)
        .then(res=> alert("deleted success"));
        getUser();
    };
    const handleUpdate=async()=>{
     await axios.put(`http//localhost:3000/person/${updateData.id}`,updateData)
     .then(res=> {alert("User updated success")
     getUser();
    });
    };
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col-md-7 ">
                    <h1 className="">Add User</h1>
                </div>
                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Id</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.id}
                    onChange={(e)=> setFormData({...formData, id: e.target.value})}
                    placeholder="name"/>
                </div>
                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Name</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.name}
                    onChange={(e)=> setFormData({...formData, name: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Surname</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.surname}
                    onChange={(e)=> setFormData({...formData, surname: e.target.value})}
                    placeholder="name"/>
                </div>


                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> User Type</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.userType}
                    onChange={(e)=> setFormData({...formData, userType: e.target.value})}
                    placeholder="name"/>
                </div>


                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Created Date</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.createdDate}
                    onChange={(e)=> setFormData({...formData, createdDate: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> City </label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.city}
                    onChange={(e)=> setFormData({...formData, city: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel">Address</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={formData.address}
                    onChange={(e)=> setFormData({...formData, address: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <button className="btn btn-success"
                    onClick={handleFormSubmit}>Add User</button>
                </div>
            </div>{" "}
           
           <div>
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

                      <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setUpdateData({
                        id:user.id,
                        name:user.name,
                        surname:user.surname,
                        userType:user.userType,
                        createdDate:user.createdDate,
                        city:user.city,
                        address:user.address,
                      })}>Edit</button>
                      <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>

                    </td>

                </tr>

                })
            }
            </tbody>
        </table>
     </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
             <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">Update User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
             </div>
             <div class="modal-body">
             
             <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Id</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.id}
                    onChange={(e)=> setUpdateData({...updateData, id: e.target.value})}
                    placeholder="name"/>
                </div>
                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Name</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.name}
                    onChange={(e)=> setUpdateData({...updateData, name: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Surname</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.surname}
                    onChange={(e)=> setUpdateData({...updateData, surname: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> User Type</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.userType}
                    onChange={(e)=> setUpdateData({...updateData, userType: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> Created Date</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.createdDate}
                    onChange={(e)=> setUpdateData({...updateData, createdDate: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel"> City </label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.city}
                    onChange={(e)=> setUpdateData({...updateData, city: e.target.value})}
                    placeholder="name"/>
                </div>

                <div class="mb-3">
                    <label for="examplefcinput1" class="formlabel">Address</label>
                    <input type="text"
                    class="f-c"
                    id="id"
                    value={updateData.address}
                    onChange={(e)=> setUpdateData({...updateData, address: e.target.value})}
                    placeholder="name"/>
                </div>
             </div>
             <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>handleUpdate()}>Update user</button>
             </div>
            </div>
         </div>
      </div>
     </div>
    );
};
export default AddUser