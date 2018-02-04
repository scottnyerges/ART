import React from "react";
import axios from "axios";

class Gallery extends React.Component {

    //     state = {
    //     username:"",
    //     password:"",
    //     website:"",
    //     image:"",
    //     medium:"",
    // };

    constructor() {
        super();

        // this sets the initial state, an empty array of members
        this.state = {
            members: [],
        };
    }

    componentWillMount() {
        // CALL THE API, our list of users; trying to call from the model account.js, which should be where userdata is....
        fetch(
            '/api/account'
        ).then(
            results => results.json()
            ).then(
            data => {

                // this maps over the data
                let members = data.map((member, index) => {
                    return (
                        <div key={member.results}>
                            {/*SELECT WHAT DATA TO RETURN*/}
                            <ul>Name: {member.username}</ul>
                            <ul>ID: {member._id}</ul>
                            <ul>Website: {member.website}</ul>
                            <ul>Image: {member.image}</ul>
                            <ul>Medium: {member.medium}</ul>
                            <br/><br/>
                        </div>
                    )
                });





                // here, we reset the member array state from empty to "full"
                console.log("state", this.state.members);
                this.setState({ members: members });
            }
            );
    }

    render() {
        return (
            <div>
                {/*render the data list here; what goes to the gallery page*/}
                <h2>Member gallery</h2>
                {this.state.members}
            {/*This is a button to send you to the home page*/}
                {/*<br/><br/>
               <form action="/home"><input type="submit" value="Home"/></form>  */}
            </div>
        )
    }
}

export default Gallery


    render() {
        return (
            <div>
                {/*render the data list here; what goes to the gallery page*/}
                {this.state.members}
            </div>
        )
    }
}

export default Gallery
