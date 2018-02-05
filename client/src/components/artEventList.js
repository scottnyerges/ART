import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios'

class ArtEventList extends React.component {

  state = {
    artevents: []
  };

  componentDidMount(){
    axios.get("/api/artevents").then(res => {
    	console.log(res);
      // this.setState({artevents: res.data.artevents});
    })
  }

  render(){
    return (
      <div>
      this.state.artevents.map(artevents => (
        <ArtEventItem website={artevents.website} />
      ))
      </div>
    );
  }
}