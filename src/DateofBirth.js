import React, { Component } from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";
import { Form, Row, Col } from "react-bootstrap";

class DateofBirth extends Component {
  handleChange = date => {
    this.props.onChangeDob(date)
  };

  render() {
    console.log("state", this.props.disabled)
    return (
      <Form.Row className="m-3">
        <Col lg="5" className="m-0">
          <Form.Row>
            <Col lg="5" className="mt-0 mb-0 ml-0 mr-0">
              <Form.Label>Date of Birth</Form.Label>
            </Col>
            <Col lg="7" className="m-0 p-0">
              <DatePicker className="react-datepicker p-2" name="dob"
                selected={this.props.dob}
                onChange={this.handleChange}
                peekNextMonth
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                yearDropdownItemNumber={9}
                dropdownMode="scroll"
                disabled={this.props.disabled}
              />
            </Col>
          </Form.Row>
        </Col>
        <Col lg="5" className="m-0">
          <Form.Row>
            <Col lg="2" className="m-0">
              <Form.Label className="pt-1">Age</Form.Label>
            </Col>
            <Col xs="5" className="m-0">
              <Form.Control readOnly type="text" value={getAge(this.props.dob)} style={{ backgroundColor: 'white' }}></Form.Control>
            </Col>
          </Form.Row>
        </Col>
      </Form.Row>
    )
  }
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default DateofBirth