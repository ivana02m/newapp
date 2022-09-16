
/*import React from 'react';
//import { Table, Button, Alert } from 'react-bootstrap';

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      person: [],
      response: {}
    }
  }

  componentDidMount() {
    const apiUrl = 'http://localhost:3000/person';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            person: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  deletePerson(personId) {
    const { person } = this.state;

    const apiUrl = 'http://localhost:3000/person';
    const formData = new FormData();
    formData.append('persontId', personId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            person: person.filter(person => person.id !== personId)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {
    const { error, person} = this.state;

    if(error) {
      return (
        <div>Error: {error.message}</div>
      )
    } else {
      return(
        <div>
          <h2>Pereson List</h2>
          {this.state.response.message && <alert variant="info">{this.state.response.message}</alert>}
          <table>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>user Type</th>
                <th>createdDateType</th>
                 <th>City</th>
                 <th>Address</th>
                 <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {person.map(person => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.surname}</td>
                  <td>{person.usertype}</td>
                   <td>{person.createdDate}</td>
                  <td>{person.city}</td>
                  <td>{person.address}</td>
                  <td>
                    <button variant="info" onClick={() => this.props.editPerson(person.id)}>Edit</button>
                    &nbsp;<button variant="danger" onClick={() => this.deletePerson(person.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default PersonList;*/