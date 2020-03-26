import React from 'react'

const Band = (props) => {
  return (
    <li>
      <h1 class="bandName">{props.name}</h1>
      <img src={props.image} alt="" />
      <p class="albumInfo">{props.latestAlbumInfo}</p>
    </li>
  )
}

export default Band
