import React from 'react';
//import { Row, Form, Col, Button } from 'react-bootstrap';

class AddPerson extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      id: '',
      name: '',
     surname: '',
      userType: '',
     createdDate:'',
      city:'',
     address:''
    }

    if(props.person){
      this.state = props.person
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({
      [id]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {

   /* let pageTitle;
    if(this.state.id) {
      pageTitle = <h2>Edit Product</h2>
    } else {
      pageTitle = <h2>Add Product</h2>
    }*/
//{pageTitle}
    return(
      <div>
        <table>
        <tr>
          
            <form onSubmit={this.handleSubmit}>
              <tr controlId="id"></tr> "
                <th>Id</th>
                 <td type="text"
                  name="id"
                  value={this.state.id}
                  onChange={this.handleChange}
                  placeholder="Id">
                  </td>
              </form>
              <form controlId="name">
                <th>Name</th>
                <td
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="name"/>
              </form>
              <form controlId="surname">
                <th>Price</th>
                <td
                  type="text"
                  name="surname"
                  value={this.state.price}
                  onChange={this.handleChange}
                  placeholder="surname" />
              </form>
            <form controlId="userType">
                <th>userType</th>
                <td
                  type="text"
                  name="userType"
                  value={this.state.userType}
                  onChange={this.handleChange}
                  placeholder="userType" />
              </form>
           <form controlId="createdDate">
                <th>CreatedDate</th>
                <td
                  type="text"
                  name="createdDate"
                  value={this.state.createdDate}
                  onChange={this.handleChange}
                  placeholder="createdDate" />
              </form>
            <form controlId="city">
                <th>City</th>
                <td
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                  placeholder="city" />
              </form>
           <form controlId="address">
                <th>address</th>
                <td
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="address" />
              </form>
              <form>
                <span type="hidden" name="id" value={this.state.id} />
                <button  type="submit">Save</button>
              </form>
          
          
          
          
          
          </tr>

      </table>
      
      </div>
      
    )
  }
}

export default AddPerson;