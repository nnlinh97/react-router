import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        let { username, password } = this.state;
        let loggedInUser = localStorage.getItem('user');
        console.log(this.props.location)
        if (loggedInUser !== null) {
            let { location } = this.props;
            return (
                // làm như thế này để lấy những thông tin của location ra, redirec về lại trang trước đó khi cần thiết
                <Redirect
                    to={{
                        pathname: location.state ? location.state.from.pathname : "/",
                        state: {
                            from: location
                        }
                    }}
                />
            );
        }
        return (
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-lg-offset-4">
                    <form onSubmit={this.onLogin} >
                        <legend>LOGIN</legend>
                        <div className="form-group">
                            <label>Username</label>
                            <input onChange={this.onChange} value={username} type="text" className="form-control" name="username" />
                        </div>   
                        <div className="form-group">
                            <label>Password</label>
                            <input onChange={this.onChange} value={password} type="password" className="form-control" name="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onLogin = (event) => {
        event.preventDefault();
        let { username, password } = this.state;
        if (username === "admin" && password === "admin") {
            this.setState({ //setState lại để  conponent render lại và check ở localStorage để redirect qua trang Products
                username: username,
                password: password
            })
            localStorage.setItem('user', JSON.stringify(this.state));
        }
    }
}

export default Login;