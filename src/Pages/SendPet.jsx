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
import { Form, Field } from 'react-final-form';
import FormInput from '../Components/Common/FormInput';
import AutoSave from '../util/AutoSave';
const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 35px;
`
const initialData = {
  firstName: "222",
  bio: "333",
  secondName: "2"
}
const onSubmit = (e) => {
  console.log(e)
  debugger
}

const validate = (e) => {
  const errors = {}
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
const PetForm = () => (
  <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialData}
      render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
                {/* <AutoSave debounce={800} save={save} /> */}

              <div>
                  <Field
                      name="secondName"
                      render={({ input, meta }) => (
                          <div>
                              {/* <FormInput label="性别" {...input} >
                              {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                              </FormInput> */}
                              {/* <select {...select}>
                                <option>1</option>
                                <option>2</option>
                              </select> */}
                              <input type="checkbox" {...input} value="test"/>
                          </div>
                      )}
                  />
              </div>


                  <Field
                      name="userName"
                      render={({ input, meta }) => (
              
                              <FormInput label="昵称" {...input} >
                              {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                              </FormInput>
                          
                      )}
                  />
 <Field
                      name="secondName"
                      component="select"
                  >
<option>1</option>
<option>2</option>

                  </Field>

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
);
const FormContainer = styled.div`
      width: 80%;
`
// TODO: notice
function SendPet() {
  return (
    <Container>
      <MainContainer>
        <Header title="送养" />
        <Divider variant="middle" sx={{ marginY: "15px" }} />
        <FormContainer>
          <PetForm/>
        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default SendPet