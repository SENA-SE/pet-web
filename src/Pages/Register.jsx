import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import Button from '../Components/Common/Button'
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

const onSubmit = (e) => {
    console.log(e)
}

const validate = (e) => {
    const errors = {}
    if(!e.userName) {
        errors.userName = "不能为空"
    }
    if(!e.password) {
        errors.password = "不能为空"
    }
    if(!e.confirm) {
        errors.confirm = "不能为空"
    }

    if(e.password !== e.confirm) {
        errors.confirm = "前后密码不一致"
    }
    return errors
}
const initialData = {
    
}
export default function Register() {
    const focusFn = (e) => {
        e.target.classList.add('selected');
    };
    const blurFn = (e) => {
        e.target.classList.remove('selected');
    }

    return (
        <Container>
            <Wrapper>
                <Title>注册</Title>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initialData}
                    render={({ handleSubmit }) => (
                        <StyledForm onSubmit={handleSubmit}>

                            <Field
                                name={"userName"}
                                required={true}
                                key={"userName"}
                                render={({ input, meta }) => (
                                    <>
                                        <Label for="username">用户名</Label>
                                        <Input id="username" onFocus={focusFn} onBlur={blurFn} {...input} />
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


                            <Button variants="secondary" type="submit" style={{ width: "100%", marginTop: "30px" }}>提交</Button>
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