import React, { Component } from 'react';
import "./person.css";

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      surname: '',
      userType: '',
      createdDate: '',
      city: '',
      address: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    this.handleCreatedDateChange = this.handleCreatedDateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);

    this.handleCancel = this.handleCancel.bind(this);
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


  handleSubmit(event) {
    event.preventDefault();
    const newPerson = {
      id: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      userType: this.state.userType,
      createdDate: this.state.createdDate,
      city: this.state.city,
      addres: this.state.address,

    };
    this.props.onSubmit(newPerson);
    this.setState({
      id: '',
      name: '',
      surname: '',
      userType: '',
      createdDate: '',
      city: '',
      address: ''
    });
  }

  handleCancel(event) {
    event.preventDefault();
    this.setState({
      id: '',
      name: '',
      surname: '',
      userType: '',
      createdDate: '',
      city: '',
      address: ''

    });
  }

  render() {
    const { id, name, surname, userType,createdDate, city, address} = this.state;
    const { handleSubmit, handleIdChange, handleNameChange, handleSurnameChange, handleUserTypeChange, handleCreatedDateChange, handleCityChange, handleAddressChange,  handleCancel } = this;
    return (
      <form className="main_content" onSubmit={handleSubmit}>
        <div >
          <div >
            <i ></i>
          </div>
          <input
            //required
            type="text"
            value={id}
            className="a"
            placeholder="id"
            onChange={handleIdChange} />
        </div>
        <div >
          <div >
            <i ></i>
          </div>
          <input
           // required
            type="text"
            value={name}
            className="b"
            placeholder="name"
            onChange={handleNameChange} />
        </div>
        <div >
          <div >
            <i ></i>
          </div>
          <input
           // required
            type="text"
            value={surname}
            className="c"
            placeholder="surname"
            onChange={handleSurnameChange} />
        </div>
        <div >
          <div >
            <i ></i>
          </div>
          <input
            //required
            type="text"
            value={userType}
            className="d"
            placeholder="userType"
            onChange={handleUserTypeChange} />
        </div>
        <div >
          <div >
            <i ></i>
          </div>
          <input
           // required
            type="text"
           value={createdDate}
            className="e"
            placeholder="createdDate"
            onChange={handleCreatedDateChange} />
        </div>

        <div >
          <div >
            <i ></i>
          </div>
          <input
            //required
            type="text"
            value={city}
            className="f"
            placeholder="city"
            onChange={handleCityChange} />
        </div>

        <div >
          <div >
            <i ></i>
          </div>
          <input
            required
            type="text"
            value={address}
            className="g"
            placeholder="address"
            onChange={handleAddressChange} />
        </div>
        <div className="form-btn-box">
          <button type="submit" className="btn-addd " onClick={handleSubmit}>Add</button>
          <button type="button" onClick={handleCancel} className=" btn-cancel">Cancel</button>
        </div>
      </form>
    );
  }
}

export default PersonForm;