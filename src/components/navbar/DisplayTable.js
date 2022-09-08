import React from "react";

class DisplayTable extends React.Component { 

    constructor(props){
        super(props)
        this.state={
            list:[]
         }
         this.callAPI=this.callAPI.bind(this)
         this.callAPI();
     }

    callAPI(){ 
        fetch("http://localhost:3000/person").then(
            (response)=>response.json()
        ).then((data)=>{ 
            console.log(data)
            this.setState({
                list:data.data
             } )
        } )

    }

     render(){ 
        let tb_data=this.state.list.map((person)=>{
            return (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.surname}</td>
                    <td>{person.userType}</td>
                    <td>{person.createdDate}</td>
                    <td>{person.city}</td>
                    <td>{person.address}</td>
                </tr>
            )
        })
        return (
            <div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>User type</th>
                    <th>City</th>
                    <th>Address</th>
                  </tr>
                </thead>
              <tbody>
               {tb_data}
              </tbody>
              </table>
            </div>
        )
     }
     
}

export default DisplayTable;
