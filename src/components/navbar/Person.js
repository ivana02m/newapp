
import React, { useState } from "react";
import "./person.css"

export const Person = ({ id, name, surname, userType, createdDate, city, address, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.surname.value, evt.target.userType.value, evt.target.createdDate.value, evt.target.city.value, evt.target.address.value,);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="name" name="name" defaultValue={name} />
          <input placeholder="surname" name="surname" defaultValue={surname} />
          <input placeholder="userType" name="userType" defaultValue={userType} />
          <input placeholder="createdDate" name="createdDate" defaultValue={createdDate} />
          <input placeholder="city" name="city" defaultValue={city} />
          <input placeholder="address" name="address" defaultValue={address} />

          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="main_">
          <table className="m">
            <tr>
            <th>id</th>
            <th>name</th>
            <th>surname</th>
            <th>user type</th>
            <th>created date</th>
            <th>city</th>
            <th>address</th>
            </tr>
             <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{surname}</td> 
              <td>{userType}</td>
              <td>{createdDate}</td>
              <td>{city}</td> 
              <td>{address}</td> 
             </tr>   
          <div>
            <button className="ed" onClick={handleEdit}>Edit</button>
            <button className="del"onClick={handleDelete}>Delete</button>
          </div>
          </table>

        </div>
      )}
    </div>
  );
};

