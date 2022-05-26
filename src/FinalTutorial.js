import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, FormLabel, Row, Col } from "react-bootstrap";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import validator from 'validator';
import nextId from "react-id-generator";
import DateofBirth from './DateofBirth'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const options = [
  { value: 'administrator', label: 'Administrator' },
  { value: 'user', label: 'User' },
  { value: 'admin', label: 'Admin' },
]
var cansubmit = false;
const nextid = nextId();
var list = JSON.parse(localStorage.getItem('userData'));
let clientsArr = [];
clientsArr = JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')) : [];

class FinalTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: new Date(),
      selectedOption: { value: 'administrator', label: 'Administrator' },
      userid: 'ID-00'+ (clientsArr.length + 1),
      username: '',
      gender: 'male',
      email: '',
      address: '',
      userrole: 'Administrator',
      errors: {
        userid: '',
        username: '',
        gender: '',
        email: '',
        address: '',
        dob: '',
        userrole: '',
      },
      validate: {
        userid: true,
        username: true,
        gender: true,
        email: true,
        address: true,
        userrole: this.selectedOption,
      },
      disabled: false,
      show: true
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    let errors = this.state.errors;
    let validate = this.state.validate

    switch (name) {
      case 'username':
        if (validator.isEmpty(value)) {
          errors.username = "This field must be filled";
          this.state.validate.username = true;
        }
        else {
          errors.username = '';
          this.state.validate.username = false;
        }
        break;

      case 'email':
        if (validator.isEmpty(value)) {
          errors.email = "This field must be filled";
          this.state.validate.email = true;
        }
        else if (!validator.isEmail(value)) {
          errors.email = "Email is invalid";
          this.state.validate.email = true;
        }
        else {
          errors.email = '';
          this.state.validate.email = false;
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
    console.log(name);
  }

  onClick(event) {
    this.setState({
      disabled: !this.state.disabled,
      show: !this.state.show,
    });
  }

  handleCancel = (event) => {
    event.preventDefault();
    // document.getElementById("info").reset();
    this.setState({
      dob: new Date(),
      gender: 'Male',
      validate: { username: true, email: true },
      username: '',
      email: '',
      address: '',
    });
  }

  handleOption = selectedOption => {
    console.log('select;', selectedOption)
    this.setState({ userrole: selectedOption.label, selectedOption: selectedOption });
  }

  handleRegister = (event) => {
    let param = {
      userid: this.state.userid,
      username: this.state.username,
      email: this.state.email,
      address: this.state.address,
      userrole: this.state.userrole,
      dob: this.state.dob.toLocaleDateString(),
      gender: this.state.gender
    }
    console.log('array', clientsArr)
    clientsArr.push(param);
    console.log('JJJJJJJJJJJJclientsArr',clientsArr)
    localStorage.setItem('userData', JSON.stringify(clientsArr));
    this.props.history.push('/userList')

    console.log("clientARR...", clientsArr)
  }

  handleChange = date => {
    this.setState({
      dob: date
    });
  };

  handleChangeDob = (childDob) => {
    this.setState({ dob: childDob })
  }

  handleChageGender = (event) => {
    console.log('gender;', event.target.value)
    this.setState({
      gender: event.target.value,
    })
  }

  handleBack = (event) => {
    this.setState({ disabled: !this.state.disabled, show: !this.state.show })
  }

  render() {
    const { errors } = this.state;
    const { selectedOption } = this.state;
    const { show } = this.state.show;
    console.log('select option;', selectedOption)
    return (
      <div class="final">
        <Form noValidate>
          <Form.Row className="m-3">
            <Col lg="2" className="m-0">
              <Form.Label >User Id</Form.Label>
            </Col>
            <Col lg="5" className="m-0">
              <Form.Control type="text" name="userid" value={this.state.userid} onChange={this.handleSubmit} disabled={(this.state.disabled) ? "disabled" : ""}></Form.Control>
              <Form.Control.Feedback type="invalid">{errors.userid}</Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row className="m-3">
            <Col lg="2" className="m-0">
              <Form.Label >User Name</Form.Label>
            </Col>
            <Col lg="5" className="m-0">
              <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleSubmit} disabled={(this.state.disabled) ? "disabled" : ""} isInvalid={!!errors.username} noValidate></Form.Control>
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row className="m-3">
            <Col lg="2" className="m-0">
              <Form.Label >Gender</Form.Label>
            </Col>
            <Col lg="5" className="m-0">
              <Form.Group>
                <Form.Check inline type="radio" name="gender" id="male" value="male" defaultChecked={true} onChange={this.handleChageGender} disabled={(this.state.disabled) ? "disabled" : ""} isInvalid={!!errors.gender} noValidate />
                <label for="male">Male</label>
                <Form.Check className="ml-5" inline type="radio" id="female" value="female" name="gender" onChange={this.handleChageGender} disabled={(this.state.disabled) ? "disabled" : ""} isInvalid={!!errors.gender} noValidate />
                <label for="female">Female</label>
              </Form.Group>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row className="m-3">
            <Col lg="2" className="m-0">
              <Form.Label >Email</Form.Label>
            </Col>
            <Col lg="5" className="m-0">
              <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleSubmit} disabled={(this.state.disabled) ? "disabled" : ""} isInvalid={!!errors.email} noValidate></Form.Control>
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row className="m-3">
            <Col lg="2" className="m-0">
              <Form.Label >Address</Form.Label>
            </Col>
            <Col lg="5" className="m-0">
              <Form.Control as="textarea" rows="3" name="address" value={this.state.address} onChange={this.handleSubmit} disabled={(this.state.disabled) ? "disabled" : ""} isInvalid={!!errors.address} noValidate></Form.Control>
              <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
            </Col>
          </Form.Row>

          <DateofBirth onChangeDob={this.handleChangeDob}
            disabled={this.state.disabled}
            dob={this.state.dob} />

          <Form.Row className="m-3 mb-5">
            <Col lg="2" className="m-0">
              <Form.Label >User Role</Form.Label>
            </Col>
            <Col lg="5" className="m-0">
              <Select
                name="userrole"
                value={selectedOption}
                onChange={this.handleOption}
                options={options}
                isDisabled={(this.state.disabled) ? "disabled" : ""}
              />
            </Col>
          </Form.Row>
          {this.state.show ?
            <FormGroup className="text-center mt-5">
              <Button className="mr-5" variant="primary" value="cancel" onClick={this.handleCancel} >Cancel</Button>
              <Button name="submit" id="submit" variant="primary" onClick={this.onClick.bind(this)} disabled={this.state.validate.username || this.state.validate.email}>Confirm</Button>
            </FormGroup>
            :
            <FormGroup className="text-center mt-5">
              <Button className="mr-5" variant="primary" onClick={this.handleBack} value="back">Back</Button>
              <Button name="submit" variant="primary" onClick={this.handleRegister.bind(this)}>Register</Button>
            </FormGroup>
          }
        </Form>
      </div >
    )
  }
}

export default FinalTutorial

FinalTutorial.propTypes = {
  history: PropTypes.any,
};

