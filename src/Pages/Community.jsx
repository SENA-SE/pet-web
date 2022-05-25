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
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import PaginationLink from '../Components/Common/Pagination';
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
        name: "#紧急寻宠"
    },
    {
        value: "question",
        name: "#提问求助"
    },
    {
        value: "story",
        name: "#萌宠故事"
    },
    {
        value: "others",
        name: "#其他"
    },];
const posts = [
    {
        user: "用户名",
        createdAt: "05-11",
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
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222",
        read: 100,
        favorite: 50,
        comment: 25,
    },
]

export const Post = ({ data = { ...posts[0] } }) => {
    return (
        <>
            <PostWrapper>
                <Link to={data.id}>
                    <PostName data={data} />
                </Link>
                <Paragraph expand info={{ read: data.read, favorite: data.favorite, comment: data.comment }}>
                    {data.content}
                </Paragraph>
            </PostWrapper>
            <Divider variant="middle" sx={{ marginTop: "15px", marginBottom: "20px" }} />
        </>
    )
}

function Community() {
    return (
        <Container>
            <MainContainer>
                <FilterHeader tabData={tags} />
                <Divider variant="middle" sx={{ marginY: "15px" }} />
                <PostsContainer>
                    {posts.map(item =>
                        <Post data={item} />
                    )}
                    <Pagination right path={"community"} />
                </PostsContainer>
            </MainContainer>
            <MainContainer>
                <FlexWrapper column>
                    <FlexWrapper style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3>发帖</h3>
                        <Selector data={tags} label={"话题"} noDefault />
                    </FlexWrapper>
                    <TextArea />
                    <Button variants="secondary" style={{ alignSelf: 'flex-end', width: '200px' }}>提交</Button>
                </FlexWrapper>
            </MainContainer>
        </Container>
    )
}

export default Community
