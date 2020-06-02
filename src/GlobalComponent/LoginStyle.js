import styled from 'styled-components';

export const Loginwrapper = styled.div`
    display:flex;
    justify-content:space-between;
    height:100vh;
    width:100vw;
    background: -webkit-linear-gradient(to right, #360033, #0b8793); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #360033, #0b8793); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const LoginForm = styled.div`
    height:100vh;
    width:40vw;
    background: rgba(0,0,0,0.2);
`
export const Logincaption = styled.div`
    box-sizing:border-box;
    p{
        font-size: 5rem;
        font-weight: 800;
        color: #fff;
        padding: 1em;
    }
    span{
        font-size: 2rem;
        font-weight: 800;
        color: #fff;
        padding:0px 5rem;
        transition:1s;
        span{
            font-size: 2rem;
        font-weight: 800;
        transition:1s;
        }
    }
`
export const LoginFormBlock = styled.div`
        position:relative;
        top:15%;
`



export const LoginInputBlock = styled.div`
        margin:20px 0px;
        label{
            display:block;
            color:#fff;
            text-align:right;
            padding-right:10px;
            margin: 10px 0px 20px 0px;
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 1px;
            word-spacing: 2px;
        }
        input{
            text-align:right;
            font-size: 18px;
            display:block;
            margin: 0 0 0 auto;
            border: 0;
            outline: none;
            padding: 5px 10px;
            border-bottom-left-radius: 10px;
            border-top-left-radius: 10px;
            width: 60%;
            background: #fbf9f9;
        }
`

export const LoginButtonBlock = styled.div`
        position: fixed;
        top: 0;
`
export const SignupButonBlock = styled.div`
        position: fixed;
        bottom: 0;
`
export const LogonSignup = styled.div`
background: #fff;
    height: 100px;
    width: 100px;
    border-top-right-radius: 100%;
    cursor:pointer;
    overflow:hidden;
`
export const LoginSigin = styled.div`
    background: #fff;
    height: 100px;
    width: 100px;
    border-bottom-right-radius: 100%;
    cursor:pointer;
    overflow:hidden;
`