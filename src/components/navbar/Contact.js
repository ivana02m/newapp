import React, {Component}from "react";
import ForContact1 from "./ForContact1";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <ForContact1></ForContact1>
      
       
      </div>
    );
  }
}
 
export default Contact;




























/*import React, {Component}from "react";
import { useState,useEffect } from "react";


export default function Searchbar() {
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

  const [value, setValue] = useState("");



  const onChange = (event) => {
    setValue(event.target.value);
  }

  
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div >
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}*/

