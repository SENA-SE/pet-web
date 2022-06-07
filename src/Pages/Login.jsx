import React, { useState } from 'react';
import styled from 'styled-components';
import {login} from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Components/Common/Button'
import { Link } from 'react-router-dom';

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Wrapper = styled.div`
    width:450px;
    padding:40px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
const Title = styled.h1`
    font-size:45px;
    font-weight:200;
`;
const Form = styled.form`
    margin-top:30px;
    display:flex;
    flex-direction:column;
`;
const Input = styled.input`
    flex:1;
    margin-bottom:20px;
    padding:10px;
    border:none;
    border-bottom:1px solid white;
    outline:none;
    font-size:18px;
    transition: .25s;
    &:hover{
        border-bottom:1px solid black;
    }
    &.selected{
        border-bottom:1px solid ${({ theme }) => theme.palette.primary.main};
    }
`;
const Label = styled.label`
    color:rgba(0,0,0,.7);
    user-select: none;
`;

// const Button = styled.button`
//     width:70%;
//     margin-top:30px;
//     margin-bottom:50px;
//     border:none;
//     padding:15px 20px;
//     background-color:${({ theme }) => theme.palette.primary.main};
//     color:white;
//     cursor:pointer;
//     align-self:center;
//     border-radius: 5px;

//     &:disabled{
//         cursor:not-allowed;
//         color:teal;
//         background-color:white;
//         border:1px solid teal;
//     }
// `;
const StyledLink = styled.a`
    margin:10px 0;
    font-size:15px;
    text-decoration:underline;
    cursor:pointer;
`;
const Error = styled.span`
    margin-top:10px;
    color:red;
`
export default function Login() {
    const [tel, setTel] = useState('');
    const [password, setPassword] = useState('');
    const focusFn = (e) => {
        e.target.classList.add('selected');
    };
    const blurFn = (e) => {
        e.target.classList.remove('selected');
    };

    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(tel, password)
        login(dispatch,{tel,password})
    }
    const { isFetching, isError, message } = useSelector(state => state.user);
    return (
        <Container>
            <Wrapper>
                <Title>登录</Title>
                {isError && <Error>{message}</Error>}
                <Form>
                    <Label for="tel">手机号码</Label><Input id="tel" onFocus={focusFn} onBlur={blurFn} onChange={(e) => setTel(e.target.value)} />
                    <Label for="password">密码</Label><Input id="password" onFocus={focusFn} onBlur={blurFn} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <Button onClick={handleLogin} disabled={isFetching} style={{ width: "100%" }}>登录</Button>
                    {/* <Link>DO NOT REMEMBER YOUR PASSWORD?</Link> */}
                    <Link to={"/register"}>
                        <StyledLink>
                            注册账号
                        </StyledLink>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
}