import React, {useEffect, useState} from "react";
import "./sf.css"

export default function Searchfilter(){
const[data,setData]=useState([]);

const[searchApiData, setSearchApiData]=useState([]);


const[filterVal,setFilterVal]=useState("");

useEffect(()=>{
const fetchData=()=>{
fetch("http://localhost:3000/person")
  .then(response=>response.json())
   .then(json=>{
    setData(json)
   setSearchApiData(json)
})
}
 fetchData();
},[])
const handleFilter=(e)=>{
if (e.target.value==""){
setData(searchApiData)
}else{
 const filterResult=searchApiData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.surname.toLowerCase().includes(e.target.value.toLowerCase()))
 if(filterResult.length>0){
    setData(filterResult)
 }else{
    setData([{"name":"No Data"}])
   }

}
setFilterVal(e.target.value)
}

return (
      
     <div className="tab">
      <div className="sb">
         <input type="search" placeholder="type..." value={filterVal} onInput={(e)=>handleFilter(e)}/>
         <button class="searchButton">Search</button>
        </div>
    <table>
     <th>ID</th>
    <th>Name</th>
    <th>Surname</th>
    <th>User type</th>
    <th>Created date</th>
    <th>City</th>
    <th>Address</th>
{
data.map(item=>{
return(
<tr>
  <td>{item.id}</td>
  <td>{item.name}</td>
   <td>{item.surname}</td>
   <td>{item.userType}</td>
   <td>{item.createdDate}</td>
   <td>{item.city}</td>
   <td>{item.address}</td>
   </tr>
 )
})
}
</table>
</div>
)
}