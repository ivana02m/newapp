import React from "react";

const Post=(props)=>{
    const {
    personPerPage,
    totalPersons,
    currentPage,
    paginate,
    prevPage,
    nextPage
    }=props;
    const pageNumbers=[];

    for(let i=1; i<=Math.ceil(totalPersons/personPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
           <div className="pagination justify-content-center">
           {currentPage !==1 && (
            <li>
                <button 
                style={{cursor: "pointer"}}
                type="primary"
                onClick={()=> prevPage()}
                >
                Previous
                </button>
            </li>
           )}
           {
            pageNumbers.map((num)=>(
                <li className="page-item" key={num}>
                 <a
                 onClick={()=> paginate(num)}
                 className="page-link"
                 style={{cursor: "pointer"}}
                 >
                {num}
                 </a>
                </li>
        ))}
        {pageNumbers.length !== currentPage &&(
            <li>
                 <button 
                style={{cursor: "pointer"}}
                type="primary"
                onClick={()=> nextPage()}
                >
                Next
                </button>
            </li>
        )}
            </div> 
        </nav>
    );
};

export default Post;