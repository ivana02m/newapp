import React, { Component } from 'react';

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
    this.handleNameChange = this.handleIdChange.bind(this);
    this.handleCourseChange = this.handleNameChange.bind(this);
    this.handleGradeChange = this.handleSurnameChange.bind(this);
    this.handleNameChange = this.handleUserTypeChange.bind(this);
    this.handleCourseChange = this.handleCreatedDateChange.bind(this);
    this.handleGradeChange = this.handleCityChange.bind(this);
    this.handleGradeChange = this.handleAddressChange.bind(this);
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
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-user icon-custom"></i>
          </div>
          <input
            //required
            type="text"
            value={id}
            className="form-control"
            placeholder="id"
            onChange={handleIdChange} />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-list icon-custom"></i>
          </div>
          <input
           // required
            type="text"
            //value={name}
            className="form-control"
            placeholder="name"
            onChange={handleNameChange} />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-graduation-cap icon-custom"></i>
          </div>
          <input
           // required
            type="text"
            //value={surname}
            className="form-control"
            placeholder="surname"
            onChange={handleSurnameChange} />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-graduation-cap icon-custom"></i>
          </div>
          <input
            //required
            type="text"
            //value={userType}
            className="form-control"
            placeholder="userType"
            onChange={handleUserTypeChange} />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-graduation-cap icon-custom"></i>
          </div>
          <input
           // required
            type="text"
           // value={createdDate}
            className="form-control"
            placeholder="createdDate"
            onChange={handleCreatedDateChange} />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-graduation-cap icon-custom"></i>
          </div>
          <input
            //required
            type="text"
            //value={city}
            className="form-control"
            placeholder="city"
            onChange={handleCityChange} />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <i className="input-group-text fa fa-graduation-cap icon-custom"></i>
          </div>
          <input
            required
            type="text"
           //value={address}
            className="form-control"
            placeholder="address"
            onChange={handleAddressChange} />
        </div>
        <div className="form-btn-box">
          <button type="submit" className="btn btn-primary form-btn-add" onClick={handleSubmit}>Add</button>
          <button type="button" onClick={handleCancel} className="btn btn-warning form-btn-cancel">Cancel</button>
        </div>
      </form>
    );
  }
}

export default PersonForm;