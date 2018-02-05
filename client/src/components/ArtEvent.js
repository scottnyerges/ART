import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios'

const ArtEvent = (props) => {
  return (
    <div>
      <p>{props.headline}</p>
      <p>{props.summary}</p>
      <p>{props.URL}</p>
      <p>{props.venue}</p>
      <p>{props.date}</p>
      <br/><br/>
    </div>
  )
}

export default ArtEvent;