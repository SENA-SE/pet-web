import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import MainContainer from '../Components/Common/MainContainer'

import Divider from '@mui/material/Divider';
import {publicRequest} from '../requestMethods';
import {useDispatch, useSelector} from 'react-redux';
import RequestNotification from '../Components/Common/RequestNotification';
import axios from 'axios';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';

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
            <PostInfo data={comment} />
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

function PostDetail() {
    const {id} = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
        const getPost = async () => {
            const res = await publicRequest.post(`/post/findById?id=${id}`); 
            await publicRequest.post(`/post/hit?postId=${id}`);
            // console.log(res.data.data)
           setPost(res.data.data)
        }
        const getComments = async () => {
        try {
            const res = await publicRequest.post(`/comment/findComment?postId=${id}`); 
            setComments(res.data.data)
        } catch (e) {
            console.log(e)
        }
    };
    getPost();
    getComments();
}, [id]);
const user = useSelector(state => state.user.currentUser);
const [like, setLike] = useState("1")
    const handleLike = async () => {
        try {
            if(user) {
                const TOKEN = user.token;
                const userRequest = axios.create({
                    baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                    headers:{token:`${TOKEN}`}
                });
            const res = await userRequest.post(`/post/like?postId=${id}&like=${like}`); 
            // const test = await userRequest.post(`/post/findMyLike?categoriesId=-1&page=1&pageSize=10`)
            setLike(like==="1"? "0" : "1")
            // console.log(res)
            } 
        } catch (e) {
            console.log(e)
        }
        
 }   
  return (
        <Container>
            <MainContainer >
                <Wrapper>
                    <Header title={"查看帖子"} back>
                        {user? <FavoriteIcon sx={{ cursor: 'pointer' }} color={like==="1" ? "gray" : "primary"} onClick={handleLike}/> : <></>}

                    </Header>
                    <Divider variant="middle" />
                    <PostInfo data={post} />
                    <p>{post.content}</p>
                    <ViewInfo
                        data={{ read: post.hitCount, favorite: post.likeCount, comment: comments.length }}
                        style={{ alignSelf: 'flex-start', marginLeft: '10px' }}
                    />
                </Wrapper>
            </MainContainer>
            <MainContainer>
                <Wrapper>
                    <Header title={`评论 (${comments.length})`}>
                    </Header>
                    <Divider variant="middle" />


                    {comments.map(item =>
                        <Comment comment={item} key={item.id}/>
                    )}

                </Wrapper>
            </MainContainer>
            <WriteComment postId={id}/>
        </Container>
    )
}

export default PostDetail