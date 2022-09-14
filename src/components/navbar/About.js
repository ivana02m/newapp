import React, { Component } from "react";
import Ssearch from "./Ssearch"
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <Ssearch></Ssearch>
      </div>
    );
  }
}
 
export default About;


/*t from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        id: "",
        name: "",
        surname: "",
        userType: "",
        createdDate: "",
        city: "",
         address: ""
      }
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("http://localhost:3000/person")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }

  handleChange(event) {
    var title = this.state.singledata.title;
    var author = this.state.singledata.author;
    var id=this.state.singledata.id;
    var name=this.state.singledata.name;
    var surname=this.state.singledata.surname;
    var userType=this.state.singledata.userType;
    var createdDate=this.state.singledata.createdDate;
    var city=this.state.singledata.city;
    var address=this.state.singledata.address;

    if (event.target.name === "title") title = event.target.value;
    else author = event.target.value;

    this.setState({
      singledata: {
        id:id ,
        name:name,
        surname:surname,
        userType:userType,
        createdDate:createdDate,
        city:city,
        address:address
      }
    });
  }

  createList() {
    fetch("http://localhost:3000/person", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
          id: "",
          name: "",
          surname: "",
          userType: "",
          createdDate: "",
          city: "",
          address: ""
        }
      })
    );
  }

  getList(event, id) {
    this.setState(
      /*{
        singledata: {
          title: "Loading...",
          author: "Loading..."
        }
      },*/
      /*() => {
        fetch("http://localhost:3000/person"+ id )
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                id:result.id,
                name:result.name,
               surname:result.surname,
               userType:result.userType,
               createdDate:result.createdDate,
               city:result.city,
               address:result.address,
              }
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch("http://localhost:3000/person/id", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            id: "",
            name: "",
            surname: "",
            userType: "",
            createdDate: "",
            city: "",
            address: ""
          }
        });
        this.getLists();
      });
  }

  deleteList(event, id) {
    fetch("http://localhost:3000/person" +id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            id: "",
            name: "",
            surname: "",
            userType: "",
            createdDate: "",
            city: "",
            address: ""
          }
        });
        this.getLists();
      });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <div className="container">
        <span className="title-bar">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.getLists}
          >
            Get Lists
          </button>
          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
      </div>
    );
  }
}

export default App;*/




/*import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
      </div>
    );
  }
}
 
export default About;*/









































