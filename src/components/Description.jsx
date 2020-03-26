import React from 'react'

const Description = (props) => {
  return (
    <li class>
      <h3 class="bandName">{props.name}</h3>
      <p class="bandDescription">{props.bandDescription}</p>
    </li>
  )
}

export default Description
