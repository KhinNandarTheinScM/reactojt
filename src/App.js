import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Nav, Button, Modal, Table } from 'react-bootstrap'
import './index.css';
import Header from './Header';
import FirstOjtContent from './FirstOjtContent';
import SecondOjtContent from './SecondOjtContent';
import ThirdOjtContent from './ThirdOjtContent';
import Footer from './Footer';
import AppRouter from './AppRouter';
import BookList from './BookList'
import FinalTutorial from "./FinalTutorial";
import Registerpage from './Registerpage'
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch, withRouter } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="header"><Header title="Final Project" /></div>
        <div className="mt-2 mb-2 content">
          {/* <AppRouter /> */}
          <Router>
            <div>
              <Route exact path='/' component={FinalTutorial} /> 
              <Route path='/userList' component={Registerpage} />
            </div>
          </Router>
        </div>
        <div className="footer"><Footer /></div>
      </div >
    )
  }
}

export default App