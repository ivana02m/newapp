
//import Axios from "axios";
import React from 'react';

function Ssearch(){
 const [data,setData ]=useState("");
 const [value,setValue ]=useState("");
 
 consthandleSearch = async(e)=>{
    e.preventDefault();
    //return await axios
    //.get(‵http://localhost:3000/person?q=${value}‵)
    return await fetch
    .get(‵http://localhost:3000/person?q=${value}‵)
    .then((response)=>{
     setData(response.data);
     setValue("");
    })
    .catch((err)=>console.log(err));
     };

   return(
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
         <button type="submit" color="dark">Search</button>
 
         {data.length===0?(
           <tr>
            <td>No Data Found</td>
           </tr>
          )}  
        </form> 
    </div>>
    


}

export default Ssearch;