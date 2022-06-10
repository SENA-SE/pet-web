import React, { useEffect } from 'react'
import { useState } from 'react'
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
import { KnowledgePost } from './Knowledge';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux/userRedux';
// import {userRequest} from '../requestMethods';
import axios from 'axios';
import RequestNotification from '../Components/Common/RequestNotification';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
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

// const selectData = [
//     {
//         name: "type",
//         label: "类型",
//         options: [
//             {
//                 value: "cat",
//                 name: "猫"
//             },
//             {
//                 value: "dog",
//                 name: "狗"
//             },
//         ]
//     },
//     {
//         name: "species",
//         label: "品种",
//         options: [
//             {
//                 value: "cat",
//                 name: "猫"
//             },
//             {
//                 value: "dog",
//                 name: "狗"
//             },
//         ]
//     },
//     {
//         name: "size",
//         label: "尺寸",
//         options: [
//             {
//                 value: "small",
//                 name: "小"
//             },
//             {
//                 value: "big",
//                 name: "大"
//             },
//         ]
//     },

// ]
// const inputData = [
//     {
//         name: "age",
//         label: "年龄",
//         placeholder: "请输入宠物年龄（必填）",
//     },
//     {
//         name: "petName",
//         label: "宠物昵称",
//         placeholder: "请输入宠物昵称（必填）",
//     },
//     {
//         name: "location",
//         label: "联系人地址",
//         placeholder: "请输入联系人地址（必填）",
//     },
//     {
//         name: "owner",
//         label: "联系人称呼",
//         placeholder: "请输入联系人称呼（必填）",
//     },
//     {
//         name: "email",
//         label: "联系人邮箱",
//         placeholder: "请输入联系人邮箱（必填）",
//     },
//     {
//         name: "description",
//         label: "宠物描述",
//         placeholder: "可填写宠物的性格特征等，200字以内（必填）",
//         multiline: true,
//     },
//     {
//         name: "condition",
//         label: "领养要求",
//         placeholder: "请输入领养要求，200字以内（必填）",
//         multiline: true,
//     },
//     {
//         name: "gender",
//         label: "性别",
//         radioOptions: [{ label: "男", value: "male", name: "gender" },
//         { label: "女", value: "female", name: "gender" },
//         { label: "其他", value: "other", name: "gender" },]
//     }
// ]


export const DataForm = () => {
    const user = useSelector(state => state.user.currentUser);
    const TOKEN = user.token;
    const userRequest = axios.create({
        baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
        headers: { token: `${TOKEN}` }
    });
    const initialData = {
        sex: user.sex,
        location: user.location,
        introduce: user.introduce,
        email: user.email,
    }
    const validate = (e) => {
        const errors = {}
        if (e?.username?.length > 18) {
            errors.username = `昵称不能超过18字`
        }
        return errors
    }

    const dispatch = useDispatch();
    const [alert, setAlert] = useState({ on: false })
    const onSubmit = async (e) => {
        try {
            if (!e.username) {
                e.username = user.username
            }

            // const updateRequest = userRequest(user.token)
            // try {
            //     const res = updateRequest.post(`/update`, e)
            //     console.log(res)
            // } catch (err) {
            //     console.log(err)
            // }
            const update = await userRequest.post(`/update`, e);
            const newInfo = await userRequest.post('/information');

            dispatch(loginSuccess({ ...newInfo.data.data, token: TOKEN }));
            setAlert({ on: true, content: "修改成功", type: "success" })
            setTimeout(() => setAlert({ on: false }), 3000)
        } catch (e) {
            console.log(e)
            setAlert({ on: true, content: "修改失败，请重试", type: "error" })
            setTimeout(() => setAlert({ on: false }), 3000)

        } finally {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }


    return (
        <Container>
            <>
                <Header title={"编辑资料"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            {alert.on && <RequestNotification content={alert.content} type={alert.type} />}
            <FormContainer>
                <IconContainer onClick={() => console.log('uploadImg')} />
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={initialData}
                    render={({ handleSubmit }) => (
                        <StyledForm onSubmit={handleSubmit}>

                            <Field
                                name={"username"}
                                required={true}
                                key={"username"}
                                render={({ input, meta }) => (
                                    <FormInput
                                        label={"昵称"}
                                        placeholder={user.username}
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
                                        placeholder={user.location}
                                        {...input} >
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                    </FormInput>
                                )}
                            />

                            <Field
                                name={"email"}
                                required={true}
                                key={"email"}
                                render={({ input, meta }) => (
                                    <FormInput
                                        label={"电子邮箱"}
                                        placeholder={user.email}
                                        {...input} >
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                    </FormInput>
                                )}
                            />

                            <Field
                                name={"introduce"}
                                required={true}
                                key={"introduce"}
                                render={({ input, meta }) => (
                                    <FormInput
                                        label={"自我介绍"}
                                        placeholder={user.introduce}
                                        multiline
                                        rows={3}

                                        {...input} >
                                        {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                    </FormInput>
                                )}
                            />

                            <FormInput
                                label={"电话号码"}
                                value={user.tel}
                                disabled >
                            </FormInput>

                            <FormInput
                                label={"账号创建于"}
                                value={user.createTime}
                                disabled >
                            </FormInput>

                            {/* <Field
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
                            /> */}

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
    )
};

export const LogOut = () => {
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(loginSuccess(null));
    }
    return (
        <Container>
            <Button variants="secondary" style={{ width: "initial" }} onClick={onLogout}>点此退出登录</Button>
        </Container>
    )
};

export const DeletedSend = ({ data }) => {
    const user = useSelector(state => state.user.currentUser);
    const [pets, setPets] = useState([])
    const query = {
        userId: user.id,
        deleted: 1,
        page: 1,
        pagesize: 1000
    }
    useEffect(() => {
        const getPets = async () => {
            try {
                if (user) {
                    const TOKEN = user.token;
                    const userRequest = axios.create({
                        baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                        headers: { token: `${TOKEN}` }
                    });
                    const res = await userRequest.post(`/adopt/findAdopt`, query)
                    // console.log(res.data.data)
                    setPets(res.data.data)
                }
            } catch (e) {
                console.log(e)
            }

        }
        getPets()
    }, [user])
    return (
        <Container>
            <>
                <Header title={"已删除"} />
                <span style={{ fontSize: 16, marginLeft: 10, color: "#6E6D7A" }}>已删除的送养仅自己可见</span>
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <PetList data={pets} style={{ gap: "18px" }} />
        </Container>
    )
}

export const CommunityPost = ({ data }) => {
    const user = useSelector(state => state.user.currentUser);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            try {
                if (user) {
                    const TOKEN = user.token;
                    const userRequest = axios.create({
                        baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                        headers: { token: `${TOKEN}` }
                    });
                    const res = await userRequest.post(`/post/queryMyPost?categoriesId=-1&page=1&pageSize=1000`)
                    console.log(res.data.data)
                    setPosts(res.data.data)
                }
            } catch (e) {
                console.log(e)
            }

        }
        getPosts();
    }, [user])
    return (
        <Container>
            <>
                <Header title={"社区发布"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            {/* <Post />
            <Post /> */}
        </Container>
    )
}

export const PetsFavorite = ({ data }) => {
    const user = useSelector(state => state.user.currentUser);
    const [pets, setPets] = useState([])
    useEffect(() => {
        const getPets = async () => {
            try {
                if (user) {
                    const TOKEN = user.token;
                    const userRequest = axios.create({
                        baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                        headers: { token: `${TOKEN}` }
                    });
                    const res = await userRequest.post(`/adopt/queryMyLike`)
                    // console.log(res.data.data)
                    setPets(res.data.data)
                }
            } catch (e) {
                console.log(e)
            }

        }
        getPets()
    }, [user])
    return (
        <Container>
            <>
                <Header title={"宠物"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            <PetList data={pets} style={{ gap: "18px" }} />
        </Container>
    )
}

export const CommunityFavorite = () => {
    const user = useSelector(state => state.user.currentUser);
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            try {
                if (user) {
                    const TOKEN = user.token;
                    const userRequest = axios.create({
                        baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                        headers: { token: `${TOKEN}` }
                    });
                    const res = await userRequest.post(`/post/queryMyLike?categoriesId=-1&page=1&pageSize=1000`)
                    setPosts(res.data.data)
                }
            } catch (e) {
                console.log(e)
            }

        }
        getPosts()
    }, [user])

    return (
        <Container>
            <>
                <Header title={"社区"} />
                <Divider sx={{ marginBottom: '15px' }} />
            </>
            {posts.map(item =>
                <Post data={item} />
            )}
            {/* <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} pages={pages} /> */}
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
            <KnowledgePost />
            <KnowledgePost />
            <PaginationLink right sx={{ marginTop: '10px', marginRight: '15px' }} />
        </Container>
    )
}

export const PetsSend = ({ data }) => {
    const user = useSelector(state => state.user.currentUser);
    const [pets, setPets] = useState([])
    const query = {
        userId: user.id,
        deleted: 0,
        page: 1,
        pagesize: 1000
    }
    useEffect(() => {
        const getPets = async () => {
            try {
                if (user) {
                    const TOKEN = user.token;
                    const userRequest = axios.create({
                        baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                        headers: { token: `${TOKEN}` }
                    });
                    const res = await userRequest.post(`/adopt/findAdopt`, query)
                    // console.log(res.data.data)
                    setPets(res.data.data)
                }
            } catch (e) {
                console.log(e)
            }

        }
        getPets()
    }, [user])
    return (
        <Container>
            <>
                <Header title={"已发布的送养"} />
                <span style={{ fontSize: 16, marginLeft: 10, color: "#6E6D7A" }}>请在详情页中进行操作</span>
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
            <PetList data={pets} style={{ gap: "18px" }} />
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