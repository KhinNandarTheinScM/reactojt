import React,{Component} from 'react'
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch, withRouter } from 'react-router-dom'
import { Nav, Button, Modal, Table } from 'react-bootstrap'
import FirstOjtContent from './FirstOjtContent';
import SecondOjtContent from './SecondOjtContent';
import ThirdOjtContent from './ThirdOjtContent';
import BookList from './BookList'
import SecondOjtMovie from './SecondOjtMovie';
import Registerpage from './Registerpage'

class AppRouter extends Component{
    render(){
        return(
            <Router>
            <div>
              <Nav justify>
                <Nav.Item className="mr-5 bg-light p-2" bgcolor="dark">
                  <Link to="/" style={{ textDecoration: 'none' }}>FirstOjtContent</Link>
                </Nav.Item>
                <Nav.Item className="mr-5 bg-light p-2">
                  <Link to="/SecondOjtMovie" style={{ textDecoration: 'none' }}>SecondOjtContent</Link>
                </Nav.Item>
                <Nav.Item className="mr-5 bg-light p-2">
                  <Link to="/ThirdOjtContent" style={{ textDecoration: 'none' }}>ThirdOjtContent</Link>
                </Nav.Item>
                <Nav.Item className="mr-5 bg-light p-2">
                  <Link to="/BookLists" style={{ textDecoration: 'none' }}>BookLists</Link>
                </Nav.Item>
              </Nav>

              <hr />
              <Switch>
                <Route exact path="/">
                  <FirstOjtContent />
                </Route>
                <Route path="/SecondOjtMovie">
                  <SecondOjtContent />
                </Route>
                <Route path="/ThirdOjtContent">
                  <ThirdOjtContent />
                </Route>
                <Route path="/BookLists">
                  <BookList />
                </Route>
                {/* <Route path="/Registerpage">
                  <Registerpage />
                </Route> */}
              </Switch>
            </div>
          </Router>
        )
    }
}

export default AppRouter