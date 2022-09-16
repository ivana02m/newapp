/*import React, { Component } from 'react';
import './App.css';
//import { Container, Button, Alert } from 'react-bootstrap';
import PersonList from './PersonList';
import AddPerson from './AddPerson';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddPerson: false,
      error: null,
      response: {},
      person: {},
      isEditPerson: false
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddPerson: true });
  }

  onFormSubmit(data) {
    let apiUrl;

    if(this.state.isEditPerson){
      apiUrl = 'http://localhost:3000/person';
    } else {
      apiUrl = 'http://localhost:3000/person';
    }

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(result => {
        this.setState({
          response: result,
          isAddPerson: false,
          isEditPerson: false
        })
      },
      (error) => {
        this.setState({ error });
      }
    )
  }

  editPerson = personId => {

    const apiUrl = 'http://localhost:3000/person';
    const formData = new FormData();
    formData.append('perdonId', personId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            product: result,
            isEditPerson: true,
            isAddPerson: true
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }

  render() {

    let productForm;
    if(this.state.isAddProduct || this.state.isEditProduct) {
      productForm = <AddProduct onFormSubmit={this.onFormSubmit} product={this.state.product} />
    }

    return (
      <div className="App">
        <Container>
          <h1 style={{textAlign:'center'}}>React Tutorial</h1>
          {!this.state.isAddProduct && <Button variant="primary" onClick={() => this.onCreate()}>Add Product</Button>}
          {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
          {!this.state.isAddProduct && <ProductList editProduct={this.editProduct}/>}
          { productForm }
          {this.state.error && <div>Error: {this.state.error.message}</div>}
        </Container>
      </div>
    );
  }
}

export default App;*/