import React from 'react'

const Band = (props) => {
  return (
    <li>
      <h1 class="bandPageName">{props.name}</h1>
      <img class="bandImage" src={props.bandImage} alt="" />
      <h2 class="albumTitle">{props.albumTitle}</h2>
      <div class="albumSection">
        <img class="albumImage" src={props.albumImage} />
        <p class="albumInfo">{props.latestAlbumInfo}</p>
      </div>
    </li>
  )
}

export default Band
