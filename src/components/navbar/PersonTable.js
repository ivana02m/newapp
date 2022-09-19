import React, { Component } from 'react';
import Person from './Person';
import "./person.css"

class PersonTable extends Component {
  render() {
    const {
      person,
      handleUpdatePerson,
      handleDelete
    } = this.props;

    return this.props.person.length
      ? (
        <table className="tablet">
          <thead >
            <tr>
              <th >id</th>
              <th >name</th>
              <th >surname</th>
              <th >userType</th>
              <th >createdDate</th>
              <th >city</th>
              <th >adddress</th>
            </tr>
          </thead>
          <tbody>
            {
              person.map(person => {
                return (
                  <Person
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    surname={person.surname}
                    userType={person.userType}
                    createdDate={person.createdDate}
                    city={person.city}
                    address={person.address}

                    handleUpdatePerson={handleUpdatePerson}
                    handleDelete={handleDelete}
                  />
                );
              })
            }
          </tbody>
        </table>
      )
      : (
        <table >
          <thead>
            <tr>
              <th >Id</th>
              <th >Name</th>
              <th >Surname</th>
              <th >usertype</th>
              <th >createdDate</th>
              <th >city</th>
              <th >address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No data is found</td>
            </tr>
          </tbody>
        </table>
      );
  }
}


export default PersonTable;
