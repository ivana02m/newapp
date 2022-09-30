
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
       
        const updatePersons = persons.map((person) => {
          if (person.id === id) {
            
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
