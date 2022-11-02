import React, {useState, useEffect} from "react";
import axios from "axios";
import Post from "./Post";
import "./navbar.css";

const Pagination =()=>{
    const [persons, setPersons]= useState([]);
    const [loading, setLoading]= useState(false);
    const [currentPage, setCurrentPage]= useState(1);
    const [personPerPage]= useState(3);
    const [totalPersons, setTotalPersons]= useState(0);

   useEffect(()=> {
    const loadPerson= async ()=>{
        setLoading(true);
        const response=await axios.get("http://localhost:3000/persons");
        setPersons(response.data);
        setTotalPersons(response.data.length);
        setLoading(false);
    };
    loadPerson();
   }, []);

    const indexOfLastPerson= currentPage + personPerPage;
    const indexOfFirstPerson= indexOfLastPerson - personPerPage;
    const currentPersons=persons.slice(indexOfFirstPerson, indexOfLastPerson);

    const paginate= (pageNum)=> setCurrentPage(pageNum);

    const prevPage=()=> setCurrentPage(currentPage -1);
    const nextPage=()=> setCurrentPage(currentPage +1);

    const showPagination=()=>{
        return(
            <Post
            personPerPage={personPerPage}
            totalPersons={totalPersons}
            currentPage={currentPage}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
            />  
        );
    };
   console.log("persons ===>", persons);
   return(
    <>
    <ul className="list-group">
    {!loading 
    ? persons.map(person=>(
        <li key={person.id} className="list-group-item">{person.id}</li>
    )):"Loading..."}
    </ul>
    <div>{showPagination()}</div>
    </>
   );
   
   };
   export default Pagination;




