import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, FormLabel, Row, Col } from "react-bootstrap";
import validator from 'validator';
import 'bootstrap/dist/css/bootstrap.min.css';

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  console.log('valid;;', valid)
  return valid;
};
var cansubmit = false;
class ThirdOjtContent extends React.Component {
  validate = {
    fullName: true,
    email: true,
    url: true,
    phnumber: true,
  }
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      url: null,
      phnumber: null,
      errors: {
        fullName: '',
        email: '',
        password: '',
        url: '',
        phnumber: ''
      },
      validate: this.validate
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name
    let value = event.target.value
    let errors = this.state.errors;
    let validate = this.state.validate

    switch (name) {
      case 'fullName':
        if (validator.isEmpty(value)) {
          errors.fullName = 'This field must be filled';
          this.validate.fullName = true
        }
        else if (!validator.isAlpha(value)) {
          errors.fullName = 'Name must be characters';
          this.validate.fullName = true
        }
        else {
          errors.fullName = '';
          this.validate.fullName = false
        }
        break;

      case 'email':
        if (validator.isEmpty(value)) {
          errors.email = 'This field must be filled';
          this.validate.email = true
        }
        else if (!validator.isEmail(value)) {
          errors.email = 'Email is not valid';
          this.validate.email = true
        }
        else {
          errors.email = '';
          this.validate.email = false
        }
        break;

      case 'url':
        if (validator.isEmpty(value)) {
          errors.url = 'This field must be filled';
          this.validate.url = true
        }
        else if (!validator.isURL(value, { require_protocol: true })) {
          errors.url = 'URL is not valid';
          this.validate.url = true
        }
        else {
          errors.url = '';
          this.validate.url = false
        }
        break;

      case 'phnumber':
        if (validator.isEmpty(value)) {
          errors.phnumber = 'This field must be filled';
          this.validate.phnumber = true
        }
        else if (!validator.isMobilePhone(value)) {
          value = value.replace(/[^0-9,.]+/g, "");
          errors.phnumber = 'Phone number is not valid';
          this.validate.phnumber = true
        }
        else {
          errors.phnumber = '';
          this.validate.phnumber = false
        }
        break;

      default:
        break;
    }
    this.setState({
      errors,
      [name]: value,
      validate
    });
    cansubmit = true;
  }

  handleSubmit = (event) => {
    if (validateForm(this.state.errors) && !(this.value = null)) {
      console.info('Valid Form');
      document.getElementById("inputform").reset();
      let number = document.getElementById("phnumber");
      number.value = null;

    } else {
      console.error('Invalid Form');

    }
  }

  cancelHandle = () => {
    document.getElementById("inputform").reset();
    let name = document.getElementById("fullname");
    let email = document.getElementById("email");
    let url = document.getElementById("url");
    let number = document.getElementById("phnumber");

    name.value=null;
    email.value=null;
    url.value=null;
    number.value = null;
  }

  render() {
    const { errors } = this.state;
    console.log('state value;;', this.state.errors.fullName)
    return (
      <div className='wrapper'>
        <Form id="inputform" onSubmit={this.handleSubmit} noValidate>
          <FormGroup className="fullName" controlId="fullname">
            <Form.Row>
              <FormLabel column lg={3} className="pl-5">Name</FormLabel>
              <Col>
                <FormControl type="text" id="fullname" name='fullName' value={this.state.fullName} onChange={this.handleChange} isInvalid={!!errors.fullName} noValidate />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </FormGroup>
          <FormGroup className="email" controlId="email">
            <Form.Row>
              <Form.Label column lg={3} className="pl-5">Email</Form.Label>
              <Col>
                <Form.Control type="email" name='email' value={this.state.email} onChange={this.handleChange} isInvalid={!!errors.email} noValidate />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </FormGroup>
          <FormGroup className="url" controlId="url">
            <Form.Row>
              <Form.Label column lg={3} className="pl-5">URL</Form.Label>
              <Col>
                <Form.Control type="url" name='url' value={this.state.url} onChange={this.handleChange} isInvalid={!!errors.url} noValidate />
                <Form.Control.Feedback type="invalid">
                  {errors.url}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </FormGroup>
          <FormGroup className="phnumber" controlId="phnumber" >
            <Form.Row>
              <Form.Label column lg={3} className="pl-5">Phone Number</Form.Label>
              <Col>
                <Form.Control type="text" id="phnumber" name='phnumber' value={this.state.phnumber} onChange={this.handleChange} isInvalid={!!errors.phnumber} noValidate />
                <Form.Control.Feedback type="invalid">
                  {errors.phnumber}
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </FormGroup>
          <FormGroup className="text-center">
                <Button className="mr-5" variant="primary" value="cancel" onClick={this.cancelHandle}>Cancel</Button>
                <Button name="submit" id="submit" variant="primary" type="submit" disabled={this.state.validate.fullName || this.state.validate.email || this.state.validate.url || this.state.validate.phnumber}>Confirm</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default ThirdOjtContent