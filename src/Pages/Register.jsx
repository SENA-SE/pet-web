import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import Button from '../Components/Common/Button'
import {publicRequest} from '../requestMethods'
import {login} from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../redux/apiCalls';

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

    .error {
        color: #b30d0d;
        font-size: 16px;
        font-weight: 600;
    }
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
const StyledForm = styled.form`
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
    color:rgba(0,0,0,.7)
`;
const Agreement = styled.div`
    font-size:15px;
    margin:20px 0;
`;
const Error = styled.span`
    margin-top:10px;
    color: #b30d0d;
    font-size: 16px;
    font-weight: 600;
`

export default function Register() {
    const focusFn = (e) => {
        e.target.classList.add('selected');
    };
    const blurFn = (e) => {
        e.target.classList.remove('selected');
    }
    const dispatch = useDispatch();
    const { isFetching, isError, message } = useSelector(state => state.register);
    const onSubmit = async (e) => {
        try {
            // console.log(e)
            const {tel, password} = e
            register(dispatch,{tel,password})
            .then(() => login(dispatch,{tel, password}))
                // setAlert({on: true, content: "修改成功", type:"success"})
                // setTimeout(() => setAlert({on: false}), 3000)
        } catch (e) {
            // setAlert({on: true, content: "修改失败，请重试", type:"error"})
            //     setTimeout(() => setAlert({on: false}), 3000)
            console.log(e)
    
        } finally {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    
    }
    
    const validate = (e) => {
        const errors = {}
        if(!e.tel) {
            errors.tel = "不能为空"
        }
        if(!e.password) {
            errors.password = "不能为空"
        }
        if(!e.confirm) {
            errors.confirm = "不能为空"
        }
        if(e?.password?.length < 8) {
            errors.password = "密码长度应大于8位"
        } 
        if(e.password !== e.confirm) {
            errors.confirm = "前后密码不一致"
        }
        return errors
    }
    const initialData = {
        
    }
    return (
        <Container>
            <Wrapper>
                <Title>注册</Title>
                {isError && <Error>{message}</Error>}
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initialData}
                    render={({ handleSubmit }) => (
                        <StyledForm onSubmit={handleSubmit}>

                            <Field
                                name={"tel"}
                                required={true}
                                key={"tel"}
                                render={({ input, meta }) => (
                                    <>
                                        <Label for="tel">电话号码</Label>
                                        <Input id="tel" onFocus={focusFn} onBlur={blurFn} {...input} />
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}

                                    </>
                                )}
                            />

                            <Field
                                name={"password"}
                                required={true}
                                key={"password"}
                                render={({ input, meta }) => (
                                    <>
                                        <Label for="password">密码</Label><Input id="password" type="password" onFocus={focusFn} onBlur={blurFn} {...input} />
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}

                                    </>
                                )}
                            />

                            <Field
                                name={"confirm"}
                                required={true}
                                key={"confirm"}
                                render={({ input, meta }) => (
                                    <>
                                        <Label for="confirm password">确认密码</Label><Input id="confirm password" type="password" onFocus={focusFn} onBlur={blurFn} {...input} />
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}

                                    </>
                                )}
                            />

<Agreement>
                        通过创建该帐户，我同意根据<b>隐私政策</b>处理我的个人数据
                    </Agreement>
                            <Button variants="secondary" type="submit" disabled={isFetching} style={{ width: "100%", marginTop: "30px" }}>提交</Button>
                        </StyledForm>
                    )}
                />
                {/* <Form>

                    <Label for="email">电子邮箱</Label><Input id="email" onFocus={focusFn} onBlur={blurFn} />
                    <Label for="password">密码</Label><Input id="password" onFocus={focusFn} onBlur={blurFn} />
                    <Label for="confirm password">确认密码</Label><Input id="confirm password" onFocus={focusFn} onBlur={blurFn} />
                    <Agreement>
                        通过创建该帐户，我同意根据<b>隐私政策</b>处理我的个人数据
                    </Agreement>
                    <Button>创建账户</Button>
                </Form> */}
            </Wrapper>
        </Container>
    );
}