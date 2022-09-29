
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



















/*import React, { Component } from 'react';
import "./person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:props.id,
      name: props.name,
      surname: props.surname,
      userType: props.userType,
      createdDate:props.createdDate,
      city:props.city,
      address:props.address,
      isUpdate: false
    };
    this.handleUpdateStart = this.handleUpdateStart.bind(this);
    this.handleUpdateCancel = this.handleUpdateCancel.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    this.handlCreatedDateChange = this.handleCreatedDateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleAdressChange = this.handleAddressChange.bind(this);
  }

  handleIdChange(event) {
    this.setState({
      id: event.target.value
    });
  } 
  
  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSurnameChange(event) {
    this.setState({
      surname: event.target.value
    });
  }

  handleUserTypeChange(event) {
    this.setState({
      userType: event.target.value
    });
  } 
  
  handleCreatedDateChange(event) {
    this.setState({
      createdDate: event.target.value
    });
  }

  handleCityChange(event) {
    this.setState({
      city: event.target.value
    });
  }
  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  handleUpdateStart() {
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  }

  handleUpdateCancel(event) {
    event.preventDefault();
    this.setState({
      id:this.props.id,  
      name: this.props.name,
      surname: this.props.surname,
      userType: this.props.userType,
      createdDate: this.props.createdDate,
      city: this.props.city,
      address: this.props.address,
      isUpdate: !this.state.isUpdate
    });
  }

  handleUpdate(id) {
    // event.preventDefault();
    const updatePerson = {
      id: id,
      id:this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      userType: this.state.userType,
      createdDate:this.state.createdDate,
      city: this.state.city,
      address: this.state.address,
    };
    this.props.handleUpdatePerson(updatePerson);
    this.setState({
      isUpdate: !this.state.isUpdate
    });
  }

  render() {
    const {
      id,
      handleDelete
    } = this.props;

    return (
      !this.state.isUpdate
        ? (
          <tr key={id}>
            <td >
              {this.state.id}
            </td>
            <td >
              {this.state.name}
            </td>

            <td >
              {this.state.surname}
            </td>
            <td >
              {this.state.userType}
            </td>
            <td >
              {this.state.createdDate}
            </td>
            <td >
              {this.state.city}
            </td>
            <td >
              {this.state.address}
            </td>

            <td >
              <button
                onClick={() => this.handleUpdateStart()}
                className="btn-upd "><i >EDIT</i>
              </button>
              <button
                onClick={() => handleDelete(id)}
                className=" btn-del"><i >DELETE</i>
              </button>
            </td>
          </tr>
        )
        : (
          <tr key={id}>
            <td >
              <input
                autoFocus
                type="text"
                value={this.state.id}
                onChange={this.handleIdChange}
              />
            </td>
            <td >
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </td>
            <td >
              <input
                type="text"
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </td>

            <td >
              <input
                autoFocus
                type="text"
                value={this.state.userType}
                onChange={this.handleUserTypeChange}
              />
            </td>
            <td >
              <input
                type="text"
                value={this.state.createdDate}
                onChange={this.handleCreatedDateChange}
              />
            </td>
            <td >
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleCityChange}
              />
            </td>
            <td >
              <input
                type="text"
                value={this.state.address}
                onChange={this.handleAddressChange}
              />
            </td>

            <td >
              <button
                onClick={() => this.handleUpdate(id)}
                className="btn-update"><i >Update</i>
              </button>
              <button
                onClick={() => this.handleUpdateCancel()}
                className=" btn-warning"><i >Delete</i>
              </button>
            </td>
          </tr>
        )
    );
  }
}

export default Person;*/