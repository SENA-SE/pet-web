import React, { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import RequestNotification from '../Components/Common/RequestNotification';
import axios from 'axios';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import MainContainer from '../Components/Common/MainContainer'

import styled from 'styled-components'
import Divider from '@mui/material/Divider';

import Button from '../Components/Common/Button';
import Header from '../Components/Common/Header';
import { Form, Field } from 'react-final-form';
import FormInput from '../Components/Common/FormInput';
// import AutoSave from '../util/AutoSave';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import FormSelect from '../Components/Common/FormSelect';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import FormControlLabel from '@mui/material/FormControlLabel';
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


// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// const save = async values => {
//   console.log('Saving', values)
//   await sleep(2000)
// }

const selectData = [
  {
    name: "categoriesId",
    label: "类型",
    options: [
      {
        value: "10",
        name: "猫"
      },
      {
        value: "11",
        name: "狗"
      },
      {
        value: "12",
        name: "其他"
      }
    ]
  },
  {
    name: "size",
    label: "尺寸",
    options: [
      {
        value: "1",
        name: "小"
      },
      {
        value: "2",
        name: "中"
      },
      {
        value: "3",
        name: "大"
      },
    ]
  },
  {
    name: "status",
    label: "是否绝育",
    options: [
      {
        value: "1",
        name: "是"
      },
      {
        value: "0",
        name: "否"
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
    name: "name",
    label: "宠物昵称",
    placeholder: "请输入宠物昵称（必填）",
  },
  {
    name: "address",
    label: "联系人地址",
    placeholder: "请输入联系人地址（必填）",
  },
  {
    name: "nickname",
    label: "联系人昵称",
    placeholder: "请输入联系人昵称（必填）",
  },
  {
    name: "tel",
    label: "联系人电话",
    placeholder: "请输入联系人电话（必填）",
  },
  {
    name: "description",
    label: "宠物描述",
    placeholder: "可填写宠物的性格特征等，200字以内（必填）",
    multiline: true,
  },
  {
    name: "requirement",
    label: "领养要求",
    placeholder: "请输入领养要求，200字以内（必填）",
    multiline: true,
  },
  {
    name: "sex",
    label: "性别",
    radioOptions: [{ label: "男", value: "male", name: "sex" },
    { label: "女", value: "female", name: "sex" }, { label: "其他", value: "other", name: "sex" }]
  }
]

const PetForm = ({ setAlert }) => {
  const [images, setImages] = useState([])

  const user = useSelector(state => state.user.currentUser);

  const onSubmit = async (e) => {
    let url = `/adopt/add?address=${e.address}&age=${e.age}&categoriesId=${e.categoriesId}&description=${e.description}&name=${e.name}&nickname=${e.nickname}&requirement=${e.requirement}&sex=${e.sex}&size=${e.size}&status=${e.status}&tel=${e.tel}`
    // url = `/adopt/add?address=1&age=3&description=3&nickname=a&sex=male&size=a&tel=a&categoriesId=12`
    try {
      if (user) {
        const TOKEN = user.token;

        const files = images;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append("files", files[i]);
        }
        console.log(formData.get("files"))
        axios({
          url: `http://cyjspace.5gzvip.91tunnel.com:80${url}`,
          method: "post",
          data: formData,
          headers: {
            token: `${TOKEN}`,
          },
        })
          .then(res => {
            // console.log(res);
            setAlert({ on: true, content: "发布成功", type: "success" })
            setTimeout(() => setAlert({ on: false }), 3000);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          })
          .catch(err => {
            console.log(err);
            setAlert({ on: true, content: `${e.message || "发布失败， 请重试"}`, type: "error" })
            setTimeout(() => setAlert({ on: false }), 3000);
          });
      }
    } catch (e) {
      console.log(e)
    } finally {
      // window.location.reload()
    }
  }
  const validate = (e) => {
    const errors = {}

    if (e.description?.length > 200) {
      errors.description = `字数超出限制 ${e.description?.length} / 200`
    }
    if (e.requirement?.length > 200) {
      errors.condition = `字数超出限制 ${e.description?.length} / 200`
    }
    // let emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    // if (!emailReg.test(e.email)) {
    //   errors.email = "邮箱不符合格式"
    // }

    if (!e.categoriesId) {
      errors.categoriesId = "不能为空"
    }
    if (!e.size) {
      errors.size = "不能为空"
    }
    if (!e.status) {
      errors.status = "不能为空"
    }
    if (!e.age) {
      errors.age = "不能为空"
    }
    if (!e.name) {
      errors.name = "不能为空"
    }
    if (!e.description) {
      errors.description = "不能为空"
    }
    if (!e.address) {
      errors.address = "不能为空"
    }
    if (!e.nickname) {
      errors.nickname = "不能为空"
    }
    if (!e.tel) {
      errors.tel = "不能为空"
    }
    if (!e.requirement) {
      errors.requirement = "不能为空"
    }

    if (images.length === 0) {
      errors.images = "请上传至少1张图片"
    }

    return errors
  }

  const initialData = {

  }


  return (
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

                // <FormRadio label={item.label} radioOptions={item.radioOptions} />
                <FormRadio label='性别' />

            ))
          }
          <Field
            name={"images"}
            render={({ input, meta }) => (
              <FormInput label={"宠物图片"} file setValue={setImages} {...input} >
                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
              </FormInput>
            )}
          />


          <Button variants="secondary" type="submit" style={{ width: "60%", marginTop: "30px", marginLeft: "1rem" }}>提交</Button>
        </StyledForm>
      )}
    />
  )
};


// TODO: notice
function SendPet() {
  const [alert, setAlert] = useState({ on: false })
  return (
    <Container>
      <MainContainer style={{ width: " 40% ", minWidth: "610px" }}>
        <Header title="送养" />
        <Divider variant="middle" sx={{ marginY: "15px" }} />
        {alert.on && <RequestNotification content={alert.content} type={alert.type} />}
        <FormContainer>
          <PetForm setAlert={setAlert} />
        </FormContainer>
      </MainContainer>
    </Container>
  )
}

export default SendPet