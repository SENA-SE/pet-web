// TODO: 获取detail data
// TODO: 点击提交申请，进行权限验证，否弹通知（请至我的资料处进行实名认证），是弹弹窗，提交表格，发送请求
// redux管理当前filter tag，获取tag后过滤然后进行遍历渲染
// 或者直接获取tag后filter网络请求获取
// 数据： filter，page
// 提交时需要验证，并通知
import React from 'react'
import { Link } from 'react-router-dom';
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
import { Comment } from './Community';
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
        value: "search",
        name: "种类介绍"
    },
    {
        value: "question",
        name: "日常饮食"
    },
    {
        value: "story",
        name: "日常护理"
    },
    {
        value: "train",
        name: "行为训练"
    },
    {
        value: "others",
        name: "其他"
    },];
const posts = [
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasa facilisi. Phasellus sollicitudin . Aliquam eget icitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222",
        read: 60,
        favorite: 50,
        comment: 25,
    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "22",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,

    },
    {
        user: "用户名",
        createdAt: "05-11",
        title: "标题-标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,
    },
]
const Title = styled.h3`
    cursor: pointer;
`
export const KnowledgePost = ({ data = { ...posts[0] } }) => {
    return (
        <>
            <PostWrapper>
                <Link to={data.id}>
                    <Title>{data.title}</Title>
                </Link>
                <Paragraph expand info={{ read: data.read, favorite: data.favorite, comment: data.comment }}>
                    {data.content}
                </Paragraph>
            </PostWrapper>
            <Divider variant="middle" sx={{ marginTop: "15px", marginBottom: "20px" }} />
        </>
    )
}

function Knowledge() {
    return (
        <Container>
            <MainContainer>
                <FilterHeader tabData={tags} />
                <Divider variant="middle" sx={{ marginY: "15px" }} />
                <PostsContainer>
                    {posts.map(item =>
                        <KnowledgePost data={item} />
                    )}
                    <PaginationLink right path={"knowledge"} />
                </PostsContainer>
            </MainContainer>
            <Comment header label={"分类"} data={tags}/>
        </Container>
    )
}

export default Knowledge
