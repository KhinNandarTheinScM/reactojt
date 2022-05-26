import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class Registerpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: JSON.parse(localStorage.getItem('userData'))
    }
    console.log('UserData',JSON.parse(localStorage.getItem('userData')))
  }

  handleback = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date of birth</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map(item => (
              <tr>
                <td key={item}>{item.userid}</td>
                <td key={item}>{item.username}</td>
                <td key={item}>{item.gender}</td>
                <td key={item}>{item.email}</td>
                <td key={item}>{item.address}</td>
                <td key={item}>{item.dob}</td>
                <td key={item}>{item.userrole}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button className='new-register mt-2' name="submit" variant="primary" onClick={this.handleback}>Register New User</Button>
      </>
    )
  }
}
export default Registerpage