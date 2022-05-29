import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import Button from '../Components/Common/Button';
import { Form, Field } from 'react-final-form'
import FormInput from '../Components/Common/FormInput';
import FormRadio from '../Components/Common/FormRadio';
import FormSelect from '../Components/Common/FormSelect';

import Header from '../Components/Common/Header';
import { Divider } from '@mui/material';
import PetList from '../Components/PetList';
import PaginationLink from '../Components/Common/Pagination';
import { Post } from './Community';
import TabFilter from '../Components/Common/TabFilter';
const Container = styled.div`

`
const FormContainer = styled.div`
    padding: 30px;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const IconContainer = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.status.bg2}; 
    cursor: pointer;
    margin: auto;
`

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
const initialData = {

}
const onSubmit = (e) => {
    console.log(e)
    debugger
}

const validate = (e) => {
    const errors = {}

    return errors
}
export const DataForm = ({ data = { userName: "user1" } }) => (
    <Container>
        <>
            <Header title={"编辑资料"} />
            <Divider sx={{ marginBottom: '15px' }} />
        </>
        <FormContainer>
            <IconContainer onClick={() => console.log(1)} />
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
                                <FormInput
                                    label={"昵称"}
                                    placeholder={data.userName}
                                    {...input} >
                                    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            )}
                        />
                        <FormRadio label='性别' />

                        <Field
                            name={"location"}
                            required={true}
                            key={"location"}
                            render={({ input, meta }) => (
                                <FormInput
                                    label={"常住地"}
                                    placeholder={""}
                                    {...input} >
                                    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            )}
                        />

                        <Field
                            name={"birthday"}
                            required={true}
                            key={"birthday"}
                            render={({ input, meta }) => (
                                <FormInput
                                    label={"生日"}
                                    placeholder={""}
                                    date
                                    {...input} >
                                    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            )}
                        />
                        {/* 
                    <Field
                        name={"iconFile"}
                        render={({ input, meta }) => (
                            <FormInput file {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                            </FormInput>
                        )}
                    /> */}


                        <Button variants="secondary" type="submit" style={{ width: "60%", marginTop: "30px", marginLeft: "1rem" }}>提交</Button>
                    </StyledForm>
                )}
            />
        </FormContainer>
    </Container>
);
export const Identification = ({ data = { name: "李刚", idNum: "350*******0000", phone: "135****4332", time: "2002-05-02" } }) => (
    <Container>
        <>
            <Header title={"实名认证"} />
            <Divider sx={{ marginBottom: '15px' }} />
        </>
        <FormContainer>
            <StyledForm>
                <FormInput
                    label={"昵称"}
                    value={data.name}
                    disabled >
                </FormInput>
                <FormInput
                    label={"身份证号"}
                    value={data.idNum}
                    disabled >
                </FormInput>
                <FormInput
                    label={"手机号"}
                    value={data.phone}
                    disabled >
                </FormInput>
                <FormInput
                    label={"认证时间"}
                    value={data.time}
                    disabled >
                </FormInput>
            </StyledForm>
        </FormContainer>
    </Container>
);


export const SendPost = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"送养发布"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <PetList style={{ gap: "18px" }} />
            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const CommunityPost = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"社区发布"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <Post />
            <Post />
            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const PetsFavorite = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"宠物"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <PetList style={{ gap: "18px" }} />
            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const CommunityFavorite = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"社区"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <Post />
            <Post />
            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const KnowledgeFavorite = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"科普"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <Post />
            <Post />
            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const PetsSend = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"待审核送养"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            {/* <TabFilter filters={[
                {
                    value: "toBeVerify",
                    name: "待审核"
                },
                {
                    value: "posted",
                    name: "已发布"
                },
            ]} /> */}
            <PetList style={{ gap: "18px" }} />

            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const AdoptionRequest = ({ data }) => {
    return (
        <Container>
            <>
                <Header title={"领养申请"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <PetList style={{ gap: "18px" }} />

            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}