import React from "react";
import axios from "axios";

class Gallery extends React.Component {

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
                            <li>{member.username}</li>
                            
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
                {this.state.members}
            </div>
        )
    }
}

export default Gallery
