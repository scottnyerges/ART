import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios'

const ArtEvent = (props) => {
  return (
    <div>
      <p>{props.headline}</p>
      <p>{props.summary}</p>
      <p>{props.url}</p>
      <p>{props.venue}</p>
      <p>{props.date}</p>
      <p>---------------------------------</p>
      <br/>
    </div>
  )
}

export default ArtEvent;