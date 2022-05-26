import React, { Component } from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { Nav, Button, Modal, Table } from 'react-bootstrap'
import './index.css';
import FirstOjtContent from './FirstOjtContent';
import SecondOjtContent from './SecondOjtContent';
import ThirdOjtContent from './ThirdOjtContent';
import { BrowserRouter as Router, Route, Link, browserHistory, IndexRoute, Switch, withRouter } from 'react-router-dom'

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booklist: [
        { bookname: 'Smooth of love', price: 1500, author: 'Su Myat Mon Mon', date: '1/8/2019' },
        { bookname: 'My Serious love', price: 1500, author: 'Yar Zar Ko', date: '1/9/2019' },
        { bookname: 'Forever PonePay', price: 3000, author: 'A Kyin Nar Mon', date: '1/4/2020' },
        { bookname: 'The Girl on the Train', price: 3500, author: 'Chan Myae Win', date: '2/2020' }
      ],
      bookdetail: [],
      show: false,
    }
  }
  showModal = (book) => {
    console.log('tsting')
    this.setState({
      show: true,
      bookdetail: book
    })
  }
  handleClose = () => { this.setState({ show: false }) }
  render() {
    console.log('show', this.state.show)
    return (
      <div className="booklist">
        <Table hover style={{border: '1px solid green'}}>
          <thead>
            <tr>
              <th>BookName</th>
              <th>Price</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.booklist.map(book => (
              <tr>
                <td onClick={() => this.showModal(book)}>{book.bookname}</td>
                <td>{book.price}</td>
                <td>{book.author}</td>
                <td>{book.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {this.state.show &&
          <Modal className="modal" show={this.state.show} bookdetail={this.state.bookdetail} onHide={this.handleClose}>
            <Modal.Header className="text-right" style={{ width: '100%' }} closeButton></Modal.Header>
            <Modal.Body>
              <form>
                <label className="mr-4 modal-label">BookName</label>
                <input type="text" value={this.state.bookdetail.bookname}></input><br></br>
                <label className="mr-4 mt-3 modal-label">Price</label>
                <input type="text" value={this.state.bookdetail.price}></input><br></br>
                <label className="mr-4 mt-3 modal-label">Author</label>
                <input type="text" value={this.state.bookdetail.author}></input><br></br>
                <label className="mr-4 mt-3 modal-label">Date</label>
                <input type="text" value={this.state.bookdetail.date}></input>
              </form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        }
      </div>
    )
  }
}

export default BookList
