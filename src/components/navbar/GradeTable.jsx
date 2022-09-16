import React, { Component } from 'react';
import Person from './Grade';

class PersonTable extends Component {
  render() {
    const {
      person,
      handleUpdatePerson,
      handleDelete
    } = this.props;

    return this.props.person.length
      ? (
        <table className="table table-hover table-bordered table-striped col-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col-sm td-name" className="text-center">id</th>
              <th scope="col-sm td-course" className="text-center">name</th>
              <th scope="col-sm td-grade" className="text-center">surname</th>
              <th scope="col-sm td-operation" className="text-center">userType</th>
              <th scope="col-sm td-course" className="text-center">createdDate</th>
              <th scope="col-sm td-grade" className="text-center">city</th>
              <th scope="col-sm td-operation" className="text-center">adddress</th>
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
        <table className="table table-striped col-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col-sm" className="text-center">Id</th>
              <th scope="col-sm" className="text-center">Name</th>
              <th scope="col-sm" className="text-center">Surname</th>
              <th scope="col-sm" className="text-center">usertype</th>
              <th scope="col-sm" className="text-center">createdDate</th>
              <th scope="col-sm" className="text-center">city</th>
              <th scope="col-sm" className="text-center">address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">No data is found</td>
            </tr>
          </tbody>
        </table>
      );
  }
}


export default PersonTable;
