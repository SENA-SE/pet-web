// TODO: 获取detail data
// TODO: 点击提交申请，进行权限验证，否弹通知（请至我的资料处进行实名认证），是弹弹窗，提交表格，发送请求
// redux管理当前filter tag，获取tag后过滤然后进行遍历渲染
// 或者直接获取tag后filter网络请求获取
// 数据： filter，page
// 提交时需要验证，并通知
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import MainContainer from '../Components/Common/MainContainer'
import FilterHeader from '../Components/FilterHeader';
import PostName from '../Components/Common/PostInfo';
import Paragraph from '../Components/Common/Paragraph';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import PaginationLink from '../Components/Common/Pagination';
import { publicRequest } from '../requestMethods';
import { useSelector } from 'react-redux';
import RequestNotification from '../Components/Common/RequestNotification';
import axios from 'axios';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
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


const FlexWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: ${({ column }) => column ? "column" : "row"};
    font-size: 18px;
`
const PostsContainer = styled.div``
const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 10px;
    position: relative;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &: hover {
        // padding: 0;
        border-radius: 5px;
        background: ${({ theme }) => theme.status.bg2};
    }
`;
const tags = [
    {
        value: "1",
        name: "#紧急寻宠",
        href: "/community?category=1"
    },
    {
        value: "2",
        name: "#提问求助",
        href: "/community?category=2"
    },
    {
        value: "3",
        name: "#萌宠故事",
        href: "/community?category=3"
    },
    {
        value: "4",
        name: "#其他",
        href: "/community?category=4"
    },];

export const Post = ({ data }) => {
    return (
        <>
            <PostWrapper>
                <Link to={`/community/${data.id}`}>
                    <PostName data={data} />
                </Link>
                <Paragraph expand info={{ read: data.hitCount, favorite: data.likeCount, comment: data.commentCount }}>
                    {data.content}
                </Paragraph>
            </PostWrapper>
            <Divider variant="middle" sx={{ marginTop: "15px", marginBottom: "20px" }} />
        </>
    )
}
export const Comment = ({ header, data, label, postId }) => {
    const [postCategory, setPostCategory] = useState("1")
    const [postContent, setPostContent] = useState("")
    const user = useSelector(state => state.user.currentUser);
    const [alert, setAlert] = useState({ on: false })
    const onSubmit = async () => {
        try {

            if (user) {
                const TOKEN = user.token;
                const userRequest = axios.create({
                    baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                    headers: { token: `${TOKEN}` }
                });
                if (postContent === "") {
                    throw new Error("请填写内容")
                }
                if (header) {
                    const post = { categoriesId: postCategory, content: postContent }
                    const res = await userRequest.post(`/post/add`, post);
                } else {
                    const postComment = { postId, content: postContent }
                    const res = await userRequest.post(`/comment/add`, postComment);
                    console.log(res)
                }
                setAlert({ on: true, content: "发布成功", type: "success" })
                setTimeout(() => setAlert({ on: false }), 3000)
            }
            else {
                throw new Error("请先登录")
            }

        }
        catch (e) {
            console.log(e)
            setAlert({ on: true, content: `${e.message || "发布失败， 请重试"}`, type: "error" })
            setTimeout(() => setAlert({ on: false }), 3000)

        } finally {
            window.location.reload()
        }
    }
    return (
        <MainContainer>
            {alert.on && <RequestNotification content={alert.content} type={alert.type} />}

            <FlexWrapper column>
                {header && <FlexWrapper style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3>发帖</h3>
                    <Selector setValue={setPostCategory} data={data} label={label} noDefault />
                </FlexWrapper>}
                <TextArea setValue={setPostContent} />
                <Button variants="secondary" style={{ alignSelf: 'flex-end', width: '200px' }} onClick={onSubmit}>提交</Button>
            </FlexWrapper>
        </MainContainer>
    )
}
function Community({ search, sort }) {
    const [posts, setPosts] = useState([]);
    const [pages, setPages] = useState(1);
    // const [keyword, setKeyWord] = useState("")
    // console.log(keyword)
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const category = parseInt(query.get('category') || '1', 10);
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await publicRequest.post(`/post/findPost?categoriesId=${category}&page=${page}&pageSize=10`)
                const getAll = await publicRequest.post(`/post/findPost?categoriesId=${category}&page=1&pageSize=50`)
                setPosts(res.data.data)
                setPages(Math.ceil(getAll.data.data.length / 10))
            } catch (e) {
                console.log(e)
            }
        };
        getPosts();
    }, [category, page]);
    return (
        <Container>
            <MainContainer>
                <FilterHeader filter={false} tabData={tags} />
                <Divider variant="middle" sx={{ marginY: "15px" }} />
                <PostsContainer>
                    {posts.map(item =>
                        <Post data={item} />
                    )}
                    <PaginationLink right path={"community"} pages={pages} />
                </PostsContainer>
            </MainContainer>
            <Comment header label={"话题"} data={tags} />
        </Container>
    )
}

export default Community
