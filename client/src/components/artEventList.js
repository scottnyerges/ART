import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios';

class ArtEventList extends React.Component {

  state = {
    artevents: []
  };

  componentDidMount(){
    axios.get("/api/artevents").then(res => {
    	console.log(res);
		this.setState({artevents: res.data});
    })
  };

  render(){
    return (
      <div>
     
     <p></p>
      </div>
    );
  }
}

export default ArtEventList;