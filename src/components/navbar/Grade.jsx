import React, { Component } from 'react';

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
            <td className="td-name">
              {this.state.id}
            </td>
            <td className="td-course">
              {this.state.name}
            </td>
            <td className="td-grade">
              {this.state.userType}
            </td>
            <td className="td-name">
              {this.state.createdDate}
            </td>
            <td className="td-course">
              {this.state.city}
            </td>
            <td className="td-grade">
              {this.state.address}
            </td>

            <td className="td-operation text-center">
              <button
                onClick={() => this.handleUpdateStart()}
                className="btn btn-outline-warning btn-update mr-2 ml-2"><i className="fas fa-pen">EDIT</i>
              </button>
              <button
                onClick={() => handleDelete(id)}
                className="btn btn-outline-info btn-delete mr-2 ml-2"><i className="far fa-trash-alt">DELETE</i>
              </button>
            </td>
          </tr>
        )
        : (
          <tr key={id}>
            <td className="td-name">
              <input
                autoFocus
                className="input-custom"
                type="text"
                value={this.state.id}
                onChange={this.handleIdChange}
              />
            </td>
            <td className="td-course">
              <input
                className="input-custom"
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </td>
            <td className="td-grade">
              <input
                className="input-custom"
                type="text"
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </td>

            <td className="td-name">
              <input
                autoFocus
                className="input-custom"
                type="text"
                value={this.state.userType}
                onChange={this.handleUserTypeChange}
              />
            </td>
            <td className="td-course">
              <input
                className="input-custom"
                type="text"
                value={this.state.createdDate}
                onChange={this.handleCreatedDateChange}
              />
            </td>
            <td className="td-grade">
              <input
                className="input-custom"
                type="text"
                value={this.state.city}
                onChange={this.handleCityChange}
              />
            </td>
            <td className="td-grade">
              <input
                className="input-custom"
                type="text"
                value={this.state.address}
                onChange={this.handleAddressChange}
              />
            </td>

            <td className="td-operation text-center">
              <button
                onClick={() => this.handleUpdate(id)}
                className="btn btn-danger btn-update mr-2 ml-2"><i className="fas fa-pen">update</i>
              </button>
              <button
                onClick={() => this.handleUpdateCancel()}
                className="btn btn-warning btn-cancel mr-2 ml-2"><i className="fa fa-ban">delete</i>
              </button>
            </td>
          </tr>
        )
    );
  }
}

export default Person;