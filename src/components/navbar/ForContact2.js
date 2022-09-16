import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.id.value,e.target.name.value,e.target.surname.value,e.target.userType.value,e.target.createdDate.value,e.target.city.value,e.target.address.value);
    e.target.id.value = "";
    e.target.name.value = "";
    e.target.surname.value = "";
    e.target.userType.value = "";
    e.target.createdDate.value = "";
    e.target.city.value = "";
    e.target.address.value = "";
   
}

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h3>Add User</h3>
        <input placeholder="id" name="id" />
        <input placeholder="name" name="name" />
        <input placeholder="surname" name="surname" />
        <input placeholder="userType" name="userType" />
        <input placeholder="createdDate" name="createdDate" />
        <input placeholder="city" name="city" />
        <input placeholder="address" name="address" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;