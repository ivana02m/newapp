import React, { useEffect, useState } from "react";
//import "./App.css";
import AddUser from "./ForContact2";
import User from "./ForContact3";

const ForContact1 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:3000/person")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("http://localhost:3000/person", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`http://localhost:3000/person/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);
  return (
    <div className="App">
      
      <br />
      <AddUser onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            surname={user.surname}
            userType={user.userType}
            createdDate={user.createdDate}
            city={user.city}
            address={user.address}

            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ForContact1;