import React, {Component} from 'react';
import './Login.css';
import { Button, Form, FormGroup, } from 'reactstrap';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    handleLogin = e => {
        localStorage.setItem('user', this.state.username);
        window.location.reload(); // Forces page to reload after login (un-mounts -> mounts)
    }

    handleChange = e => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
        <div className="login-container">
            <Form onSubmit={this.handleLogin}>
                <input type="text"
                    name='username' 
                    value={this.state.username} 
                    onChange={this.handleChange} 
                    placeholder='username'/>
                <input type="password" 
                    name='password' 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    placeholder='password'/>
                <button className='login-btn'>
                    Login
                </button>
            </Form>
        </div>
        )
    }
}

export default LoginPage;