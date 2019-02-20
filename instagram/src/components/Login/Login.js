import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username='',
            password=''
        }
    }
    render() {
        return (
        <div className="login-container">
            <form onSubmit={props.onSubmit}>
                <input type="text" placeholder='username'/>
                <input type="text" placeholder='password'/>
                <button className='login-btn'>
                    Login
                </button>
            </form>
        </div>
        )
    }
}

export default Login;