import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import Paragraph from '../Components/Common/Paragraph';
import TextArea from '../Components/Common/TextArea';
import Button from '../Components/Common/Button';
import Header from '../Components/Common/Header';
import { Form, Field } from 'react-final-form';
import FormInput from '../Components/Common/FormInput';
import AutoSave from '../util/AutoSave';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormSelect from '../Components/Common/FormSelect';
import ImageUpload from '../Components/Common/ImageUpload';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormRadio from '../Components/Common/FormRadio';

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
const FormContainer = styled.div`
    width: 100%;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const initialData = {

}
const onSubmit = (e) => {
  console.log(e)
  debugger
}

const validate = (e) => {
  const errors = {}

  if (e.description?.length > 200) {
    errors.description = `字数超出限制 ${e.description?.length} / 200`
  }
  if (e.condition?.length > 200) {
    errors.condition = `字数超出限制 ${e.description?.length} / 200`
  }
  let emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (!emailReg.test(e.email)) {
    errors.email = "邮箱不符合格式"
  }
  if (!e.age) {
    errors.age = "不能为空"
  }
  if (!e.condition) {
    errors.condition = "不能为空"
  }
  if (!e.description) {
    errors.description = "不能为空"
  }
  if (!e.location) {
    errors.location = "不能为空"
  }
  if (!e.owner) {
    errors.owner = "不能为空"
  }
  if (!e.petName) {
    errors.petName = "不能为空"
  }
  if (!e.email) {
    errors.email = "不能为空"
  }
  if (!e.size) {
    errors.size = "不能为空"
  }
  if (!e.species) {
    errors.species = "不能为空"
  }
  if (!e.type) {
    errors.type = "不能为空"
  }
  if (!e.condition) {
    errors.condition = "不能为空"
  }



  return errors
}

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const save = async values => {
//   console.log('Saving', values)
//   await sleep(2000)
// }

const selectData = [
  {
    name: "type",
    label: "类型",
    options: [
      {
        value: "cat",
        name: "猫"
      },
      {
        value: "dog",
        name: "狗"
      },
    ]
  },
  {
    name: "species",
    label: "品种",
    options: [
      {
        value: "cat",
        name: "猫"
      },
      {
        value: "dog",
        name: "狗"
      },
    ]
  },
  {
    name: "size",
    label: "尺寸",
    options: [
      {
        value: "small",
        name: "小"
      },
      {
        value: "big",
        name: "大"
      },
    ]
  },

]
const inputData = [
  {
    name: "age",
    label: "年龄",
    placeholder: "请输入宠物年龄（必填）",
  },
  {
    name: "petName",
    label: "宠物昵称",
    placeholder: "请输入宠物昵称（必填）",
  },
  {
    name: "location",
    label: "联系人地址",
    placeholder: "请输入联系人地址（必填）",
  },
  {
    name: "owner",
    label: "联系人称呼",
    placeholder: "请输入联系人称呼（必填）",
  },
  {
    name: "email",
    label: "联系人邮箱",
    placeholder: "请输入联系人邮箱（必填）",
  },
  {
    name: "description",
    label: "宠物描述",
    placeholder: "可填写宠物的性格特征等，200字以内（必填）",
    multiline: true,
  },
  {
    name: "condition",
    label: "领养要求",
    placeholder: "请输入领养要求，200字以内（必填）",
    multiline: true,
  },
  {
    name: "gender",
    label: "性别",
    radioOptions: [{ label: "男", value: "male", name: "gender" },
    { label: "女", value: "female", name: "gender" },
    { label: "其他", value: "other", name: "gender" },]
  }
]

const PetForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={initialData}
    render={({ handleSubmit }) => (
      <StyledForm onSubmit={handleSubmit}>
        {/* <AutoSave debounce={800} save={save} /> */}
        {
          selectData.map(item => (
            <Field
              name={item.name}
              required={true}
              key={item.name}
              render={({ input, meta }) => (
                <FormSelect label={item.label} options={item.options} {...input} >
                  {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                </FormSelect>
              )}
            />
          ))
        }

        {
          inputData.map((item, index) => (
            !item.radioOptions ? <Field
              name={item.name}
              required={true}
              key={item.name}
              render={({ input, meta }) => (
                <FormInput
                  label={item.label}
                  placeholder={item.placeholder}
                  multiline={item.multiline}
                  rows={4}
                  {...input} >
                  {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                </FormInput>
              )}
            />
              :

              <FormRadio label={item.label} radioOptions={item.radioOptions} />

          ))
        }
        <Field
          name={"images"}
          render={({ input, meta }) => (
            <FormInput label={"宠物图片"} file {...input} >
              {meta.touched && meta.error && <span className="error">{meta.error}</span>}
            </FormInput>
          )}
        />


        <Button variants="secondary" type="submit" style={{ width: "60%", marginTop: "30px", marginLeft: "1rem" }}>提交</Button>
      </StyledForm>
    )}
  />
);


// TODO: notice
function SendPet() {
  return (
    <Container>
      <MainContainer style={{ width: " 40% ", minWidth: "610px" }}>
        <Header title="送养" />
        <Divider variant="middle" sx={{ marginY: "15px" }} />
        <FormContainer>
          <PetForm />
        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default SendPet