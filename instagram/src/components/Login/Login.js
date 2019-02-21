import React, {Component} from 'react';
import './Login.css';
import { Button, Form, FormGroup, Input, FormText} from 'reactstrap';
import styled from 'styled-components';
import phones from '../../img/ig-login-phones.png';

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
        <Container>
            <img src={phones} alt="phones"/>
            <LoginCard>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Input type="text"
                        name='username' 
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        placeholder='username'/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" 
                        name='password' 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        placeholder='password'/>
                    </FormGroup>
                    <Button className='login-btn'>
                        Sign Up
                    </Button>
                    <FormText>
                        By signing up, you agre to our <strong>Fake Terms</strong>, <strong>Fake Data Policy</strong>, and <strong>Fake Cookies Policy</strong>.
                    </FormText>
                </Form>
            </LoginCard>
        </Container>
        )
    }
}

const LoginCard = styled.div`
    width: 348px;
    border: 1px solid #E0E0E0;
    padding: 20px 40px;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default LoginPage;