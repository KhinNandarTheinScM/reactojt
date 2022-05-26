import React, { useState } from 'react'
import SecondOjtContent from './SecondOjtContent'
import PropTypes from 'prop-types'

function SecondOjtMovie(props) {
  return (
    <>
      <ul>
        {props.movie.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default SecondOjtMovie

SecondOjtMovie.prototype = {
  movie: PropTypes.arr,
}

