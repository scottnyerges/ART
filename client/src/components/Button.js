import React from "react";
import ReactDom from 'react-dom';
import axios from 'axios'

const buttonStyle = {
  margin: '10px 10px 10px 0'
};

class Button extends React.Component {

  handleClick = () => {
    console.log('it works');
  }

  handleArticleScrape = () => {
    console.log("ding");
    // This function handles the user clicking any "scrape new article" buttons
    axios.get("/api/fetch").then(function(data) {
    	console.log("check database");
    });
  }

  render() {
    return (
      <button
        className="btn btn-default scrape-new"
        style={buttonStyle}
        onClick={this.handleArticleScrape}>Scrape</button>
    );
  }
};

export default Button