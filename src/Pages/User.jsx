import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import Paragraph from '../Components/Common/Paragraph';
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import Header from '../Components/Common/Header';
import { Form, Field } from 'react-final-form'
import { Post } from './Community';
import FormInput from '../Components/Common/FormInput';
import AutoSave from '../util/AutoSave';
const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
`
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    gap: 30px;
`
const Left = styled(MainContainer)`
    // width: 50px !important;
    flex: 0.9;
`
const Right = styled(MainContainer)`
    // width: 500px !important;
    flex: 2.5;
`

const Info = () => {
    return (
        <>
            <Header title={"编辑资料"} />
            <Divider sx={{ marginBottom: '15px' }} />
        </>
    )
}

const initialData = {
    firstName: "222",
    bio: "333"
}
const onSubmit = (e) => {
    console.log("submit")
    debugger
}

const validate = (e) => {
    const errors = {}

    // if (e.firstName && e.firstName.length < 5) {
    //     errors.firstName = 'Too Short'

    // }
    if (e.secondName && e.secondName.length < 5) {
        errors.secondName = 'Too Short'

    }
    return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const save = async values => {
    console.log('Saving', values)
    await sleep(2000)
}
const MyForm = () => (
    <Form
        onSubmit={save}
        validate={validate}
        initialValues={initialData}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                {/* <AutoSave debounce={800} save={save} /> */}

                {/* <div>
                    <label>First Name</label>
                    <Field name="firstName" component="input" placeholder="First Name" />
                </div>

                <div>
                    <label>Bio</label>

                    <Field
                        name="bio"
                        render={({ input, meta }) => (
                            <div>
                                <textarea {...input} />
                                {meta.touched && meta.error && <span>{meta.error}</span>}
                            </div>
                        )}
                    />
                </div> */}

                <div>
                    <Field
                        name="secondName"
                        render={({ input, meta }) => (
                            <div>
                                <FormInput label="性别" {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            </div>
                        )}
                    />
                </div>

                <div>
                    <Field
                        name="userName"
                        render={({ input, meta }) => (
                            <div>
                                <FormInput label="昵称" {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            </div>
                        )}
                    />
                </div>
                <div>
                    <Field
                        name="location"
                        render={({ input, meta }) => (
                            <div>
                                <FormInput label="常住地" {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            </div>
                        )}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )}
    />
)
function User() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    hi
                </Left>
                <Right>
                    <Info />
                    <MyForm />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default User