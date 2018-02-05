import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios';
import ArtEvent from './ArtEvent'

class ArtEventList extends React.Component {

  state = {
    artevents: []
  };

  componentDidMount(){
    axios.get("/api/fetch").then(data => {
      axios.get("/api/artevents").then(res => {
        this.setState({artevents: res.data});
      });
    });
  };

  render(){
    return (
      <div>
        {this.state.artevents.map((AE) => 
          <ArtEvent headline={AE.headline} summary={AE.summary} url={AE.url} date = {AE.date} venue={AE.venue}/>
        )}
      </div>
  )}
}

export default ArtEventList;