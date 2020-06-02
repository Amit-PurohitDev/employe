import React, { Component } from 'react';
import { Loginwrapper, LoginForm, Logincaption, LoginFormBlock, LoginInputBlock, LoginButtonBlock, LoginSigin, LogonSignup, SignupButonBlock } from '../../GlobalComponent/Style';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            captionmsg: "",
            opac:0,
        };
    }
    signupHandler = (msg) => {
        this.setState({
            captionmsg: msg,
            opac:1
        })
    }

    mouseLeave = () =>{
        this.setState({
            opac:0
        })
    }
    render() {
        return (
            <Loginwrapper>
                <Logincaption>
                    <p>User Data...</p>
                    <h2><span style={{opacity:this.state.opac}}>{this.state.captionmsg}</span></h2>
                </Logincaption>
                <LoginForm>
                    <LoginButtonBlock
                        onMouseOver={() => {
                            this.signupHandler("Log in")
                        }}
                        onMouseLeave={() => { this.mouseLeave() }}>
                        <LoginSigin>Login</LoginSigin>
                    </LoginButtonBlock>
                    <LoginFormBlock
                        onMouseEnter={() => { this.signupHandler("Yeah!..., Let's enter some detail") }}
                        onMouseLeave={() => { this.mouseLeave() }}>
                        <LoginInputBlock>
                            <label htmlFor="">Your Name</label>
                            <input type="text" />
                        </LoginInputBlock>
                        <LoginInputBlock>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </LoginInputBlock>
                        <LoginInputBlock>
                            <label htmlFor="">User Name</label>
                            <input type="text" />
                        </LoginInputBlock>
                        <LoginInputBlock>
                            <label htmlFor="">Password</label>
                            <input type="text" />
                        </LoginInputBlock>
                        <LoginInputBlock>
                            <label htmlFor="">Confirm Password</label>
                            <input type="text" />
                        </LoginInputBlock>
                    </LoginFormBlock>
                    <SignupButonBlock onMouseEnter={(e) => { this.signupHandler("Sign up") }}
                    onMouseLeave={() => { this.mouseLeave() }}>
                        <LogonSignup>Sign Up</LogonSignup>
                    </SignupButonBlock>


                </LoginForm>
            </Loginwrapper>
        )
    }
}

export default Login;