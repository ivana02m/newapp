
import React, { useEffect, useState } from "react";
import { Person} from "./Person";
import  { PersonForm  } from "./PersonForm";
import "./person.css";

export default function PersonApp() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:3000/persons")
      .then((response) => response.json())
      .then((data) => setPersons(data))
      .catch((error) => console.log(error));
  };

  const onAdd = async (id, name, surname, userType, createdDate, city, address ) => {
    await fetch("http://localhost:3000/persons", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name,
        surname: surname,
        userType: userType,
        createdDate: createdDate,
        city: city,
        address: address
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setPersons((persons) => [...persons, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, name, surname, userType, createdDate, city, address) => {
    await fetch(`http://localhost:3000/persons${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id:id,
        name: name,
        surname: surname,
        userType: userType,
        createdDate: createdDate,
        city:city,
        address: address
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatePersons = persons.map((person) => {
          if (person.id === id) {
            //person.id=id
            person.name = name;
            person.surname = surname;
            person.userType=userType;
            person.createdDate = createdDate;
            person.city = city;
            person.address= address
          }

          return person;

        });

        setPersons((persons) => updatePersons);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:3000/persons/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setPersons(
            persons.filter((person) => {
              return person.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="main_content">
      <PersonForm onAdd={onAdd} />
      {persons.map((person) => (
        <Person
          id={person.id}
          key={person.id}
          name={person.name}
          surname={person.surname}
          userType={person.userType}
          createdDate={person.createdDate}
          city={person.city}
          address={person.address}

          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}






/*import React from 'react';
import PersonTable from './PersonTable';
import PersonForm from './PersonForm';
import "./person.css";

class PersonApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [],
      isUpdate: false
    };
    this.addPerson = this.addPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
    this.updateCompletePerson = this.updateCompletePerson.bind(this);
  }

  componentDidMount() {
    this.getPerson();
  }

  getPerson() {
    fetch('http://localhost:3000/person')
      .then(res => res.json())
      .then(data => {
        this.setState({
          person: data
        });
      })
      .catch(err => console.error(err.message));
  }

  addPerson(newPerson) {
    fetch('http://localhost:3000/person', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPerson)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          person: [...this.state.person, data]
        });
      })
      .catch(err => console.error(err.message));
  }

  deletePerson(id) {
    fetch(`http://localhost:3000/person/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(() => {
        this.setState(({ person }) => ({
          person: person.filter(person => id !== person.id)
        }));
      })
      .catch(err => console.error(err.message));
  }

  updateCompletePerson(updatedPerson) {
    fetch(`http://localhost:3000/person/${updatedPerson.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: updatedPerson.id,
        name: updatedPerson.name,
        surname: updatedPerson.surname,
        userType: updatedPerson.userType,
        createdDate: updatedPerson.createdDate,
        city: updatedPerson.city,
        address: updatedPerson.address,
      })
    })
      .then(res => res.json())
      .then(() => {
        this.setState(({ person }) => ({
          person: person.filter(person => {
            if (person.id === updatedPerson.id) {
              person.name = updatedPerson.name;
              person.surname = updatedPerson.surname;
              person.userType = updatedPerson.userType;
              person.createdDate = updatedPerson.createdDate;
              person.city = updatedPerson.city;
              person.address = updatedPerson.address;
            }
            return true;
          })
        }));
      })
      .catch(err => console.error(err.message));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="coll">
            <PersonTable
              person={this.state.person}
              handleUpdatePerson={this.updateCompletePerson}
              handleDelete={this.deletePerson}
            />
          </div>
          <div className="col-form">
            <PersonForm onSubmit={this.addPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default PersonApp;*/