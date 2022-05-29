import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import PostName from '../Components/Common/PostInfo';
import Paragraph from '../Components/Common/Paragraph';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Header from '../Components/Common/Header';
import PostInfo from '../Components/Common/PostInfo';
import ViewInfo from '../Components/Common/ViewInfo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Comment as WriteComment } from './Community'
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
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        padding:0 10px;
    }
`

const Comment = ({ comment }) => {

    return (
        <Wrapper>
            <PostInfo data={{ user: comment.user, createdAt: comment.createdAt }} />
            <p>{comment.content}</p>
            <Divider variant="middle" />

        </Wrapper>
    )
}
// const Header = styled.div`
//     position: relative;
//     margin: 0 10px 15px 10px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

//发送请求请求data

function PostDetail({ post = {
    user: "用户名",
    createdAt: "2002-05",
    content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",

    read: 100,
    favorite: 50,
    comment: 25,
    tag: "#提问求助",
    id: "222",
    comments: [
        {
            user: "用户名2",
            createdAt: "2天前",
            content: "评论内容2"
        },
        {
            user: "用户名3",
            createdAt: "3天前",
            content: "评论内容3"
        }
    ]
} }) {
    return (
        <Container>
            <MainContainer >
                <Wrapper>
                    <Header title={"查看帖子"} back>
                        <FavoriteIcon sx={{ cursor: 'pointer' }} />

                    </Header>
                    <Divider variant="middle" />
                    <PostInfo data={{ user: post.user, createdAt: post.createdAt }} />
                    <p>{post.content}</p>
                    <ViewInfo
                        data={{ read: post.read, favorite: post.favorite, comment: post.comment }}
                        style={{ alignSelf: 'flex-start', marginLeft: '10px' }}
                    />
                </Wrapper>
            </MainContainer>
            <MainContainer>
                <Wrapper>
                    <Header title={`评论 (${post.comments.length})`}>
                    </Header>
                    <Divider variant="middle" />


                    {post.comments.map(item =>
                        <Comment comment={item} />
                    )}

                </Wrapper>
            </MainContainer>
            <WriteComment />
        </Container>
    )
}

export default PostDetail