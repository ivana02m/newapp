/*import React, {Component}from "react";


class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>

      
       
      </div>
    );
  }
}
 
export default Contact;*/

import React, { Component } from 'react';
//import './App.css';
//import { Container, Button, Alert } from 'react-bootstrap';
import PersonList from './PersonList';
import AddPerson from './AddPerson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddPerson: false,
      error: null,
      response: {},
      person: {},
      isEditPerson: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddPerson: true });
  }

  onFormSubmit(data) {
    let apiUrl;

    if(this.state.isEditPerson){
      apiUrl = 'http://localhost:3000/person';
    } else {
      apiUrl = 'http://localhost:3000/person';
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddPerson: false,
          isEditPerson: false
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  editPerson = personId => {

    const apiUrl = 'http://localhost:3000/person';
    const formData = new FormData();
    formData.append('perdonId', personId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            product: result,
            isEditPerson: true,
            isAddPerson: true
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {

    let personForm;
    if(this.state.isAddPerson || this.state.isEditPerson) {
      personForm = <AddPerson onFormSubmit={this.onFormSubmit} person={this.state.person} />
    }

    return (
      <div className="App">
        <div>
          <h1 style={{textAlign:'center'}}>React Tutorial</h1>
          {!this.state.isAddProduct && <button variant="primary" onClick={() => this.onCreate()}>Add Product</button>}
          {this.state.response.status === 'success' && <div><br /><alert variant="info">{this.state.response.message}</alert></div>}
          {!this.state.isAddProduct && <PersonList editPerson={this.editPerson}/>}
          { personForm }
          {this.state.error && <div>Error: {this.state.error.message}</div>}
        </div>
      </div>
    );
  }
}

export default App;


























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

