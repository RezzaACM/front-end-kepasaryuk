import React, { Component } from 'react';
import AuthAdmin from '../../services/auth.services';

class TokenComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: 'admin',
            password: 'admin123'
        }
    }

    componentWillMount() {
        this.login();
    }

    login = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        AuthAdmin.login(data)
            .then(res => {
                localStorage.setItem('token', res.token)
            }, err => {
                console.log(err);
            })


    }


    render() {
        return (
            <div>
            </div>
        );
    }
}

export default TokenComponent;