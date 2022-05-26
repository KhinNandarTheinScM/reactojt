import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SecondOjtMovie from './SecondOjtMovie';

class SecondOjtContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Welcome from movie list...",
      movie: ['Mone Swe', 'Me', 'Nga Duu', 'Mystrey of Burma', 'Phoe Shake', 'Mudra Calling', 'Deception']
    }
  }

  render() {
    return (
      <>
        <h2>{this.state.header}</h2>
        <SecondOjtMovie movie={this.state.movie} />
      </>
    )
  }
}
export default SecondOjtContent