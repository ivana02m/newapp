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
      <input type="search" placeholder="type..." value={filterVal} onChange={(e)=>handleFilter(e)}></input>
      <button onClick={handleFilter}>Search</button>
      

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



//<input type="text" placeholder="type..."/>
//<button class="searchButton" value={filterVal} onClick={()=>handleFilter(filterVal)}>search</button>  






//<input type="text" placeholder="type..." value={filterVal} onInput={(e)=>handleFilter(e)}  />
//<button class="searchButton" onClick={()=>handleFilter(filterVal)}>search</button>  









//<button class="searchButton">Search</button>
// <button class="searchButton" type="button" value="search">Search</button>


// <input type="search" placeholder="type..." value={filterVal} <button> onInput={(e)=>handleFilter(e)}</button>/>
//<button class="searchButton" onClick={handleFilter}>search</button>




//<input type="text" onChange={e=>setValue(e.target.value)} />
//<button onClick={()=>setSearched(value)}>search</button>