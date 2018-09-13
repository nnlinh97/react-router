import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends Component {

    render() {
        let userLogged = localStorage.getItem('user');
        if (userLogged === null) {
            let {location} = this.props;
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            from: location
                        }
                    }}
                />
            )
        }
        return (
            <div>
                profile page
            </div>
        );
    }
}

export default Profile;