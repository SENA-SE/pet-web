import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form'
import Button from '../Components/Common/Button'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/apiCalls';
import bgImg from '../img/bg4.svg'

const Container = styled.div`
    // width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background: url(${bgImg}) no-repeat;
    background-position: left top;
    background-size: 1100px;
    .error {
        color: #b30d0d;
        font-size: 16px;
        font-weight: 600;
    }
`;
const Wrapper = styled.div`
    width:500px;
    padding:40px;
    display:flex;
    flex-direction:column;
    align-items:center;
    transform: translate(450px, 10px);
    background: rgba(255,255,255,.95);
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
    border-radius: 5px;
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
            const { tel, password } = e
            register(dispatch, { tel, password })
                .then(() => login(dispatch, { tel, password }))
        } catch (e) {
            console.log(e)

        } finally {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }

    }

    const validate = (e) => {
        const errors = {}
        if (!e.tel) {
            errors.tel = "????????????"
        }
        if (!e.password) {
            errors.password = "????????????"
        }
        if (!e.confirm) {
            errors.confirm = "????????????"
        }
        if (e?.password?.length < 8) {
            errors.password = "?????????????????????8???"
        }
        if (e.password !== e.confirm) {
            errors.confirm = "?????????????????????"
        }
        return errors
    }
    const initialData = {

    }
    return (
        <Container>
            <Wrapper>
                <Title>??????</Title>
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
                                        <Label for="tel">????????????</Label>
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
                                        <Label for="password">??????</Label><Input id="password" type="password" onFocus={focusFn} onBlur={blurFn} {...input} />
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
                                        <Label for="confirm password">????????????</Label><Input id="confirm password" type="password" onFocus={focusFn} onBlur={blurFn} {...input} />
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}

                                    </>
                                )}
                            />

                            <Agreement>
                                ???????????????????????????????????????<b>????????????</b>????????????????????????
                            </Agreement>
                            <Button variants="secondary" type="submit" disabled={isFetching} style={{ width: "100%", marginTop: "30px" }}>??????</Button>
                        </StyledForm>
                    )}
                />
                {/* <Form>

                    <Label for="email">????????????</Label><Input id="email" onFocus={focusFn} onBlur={blurFn} />
                    <Label for="password">??????</Label><Input id="password" onFocus={focusFn} onBlur={blurFn} />
                    <Label for="confirm password">????????????</Label><Input id="confirm password" onFocus={focusFn} onBlur={blurFn} />
                    <Agreement>
                        ???????????????????????????????????????<b>????????????</b>????????????????????????
                    </Agreement>
                    <Button>????????????</Button>
                </Form> */}
            </Wrapper>
        </Container>
    );
}