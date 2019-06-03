import React, {Component} from 'react';
import { Button, Form, FormText } from 'reactstrap';
import styled from 'styled-components';
import phones from '../../img/ig-login-phones.png';
import iglogo from '../../img/ig-name-logo.png';

const LoginCard = styled.div`
    width: 348px;
    border: 1px solid #E0E0E0;
    padding: 20px 40px;
    text-align: center;
    background: white;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #F8F8F8;
    min-height: 100vh;
`;

const CallToAction = styled.p`
    color: #909090;
    font-weight: 500;
`;

const PhonesImg = styled.div`
    background-image: url(${phones});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 540px;
    width: 380px;
    margin-right: 30px;
`;

const LogoImg = styled.div`
    background-image: url(${iglogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 55px;
    margin: 15px 0; 
`;

const FormInput = styled.input`
    background: #F8F8F8;
    border: 1px solid #E0E0E0;
    font-size: 0.8rem;
    padding: 8px 10px;
    width: 100%;
    margin: 5px 0;
`;

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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <PhonesImg></PhonesImg>
                <LoginCard>
                    <Form onSubmit={this.handleLogin}>
                        <LogoImg></LogoImg>
                        <CallToAction>
                            Sign up to see photos and videos from your friends.
                        </CallToAction>
                        <FormInput type="text"
                            name='username' 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                            placeholder='Username'/>
                        <FormInput type="password" 
                            name='password' 
                            value={this.state.password} 
                            onChange={this.handleChange} 
                            placeholder='Password'/>
                        <Button color='primary' 
                            size='sm' 
                            block 
                            style={{margin: '15px 0'}}> Sign Up </Button>
                        <FormText style={{width: '80%', 
                            alignText: 'center', 
                            margin: '0 auto',
                            marginBottom: '15px'}}>
                            By signing up, you agree to our <strong>Fake Terms</strong>, <strong>Fake Data Policy</strong>, and <strong>Fake Cookies Policy</strong>.
                        </FormText>
                    </Form>
                </LoginCard>
            </Container>
        )
    }
}

export default LoginPage;