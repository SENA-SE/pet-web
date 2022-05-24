import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import PostName from '../Components/Common/PostInfo';
import Paragraph from '../Components/Common/Paragraph';
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Header from '../Components/Common/Header';
import PostInfo from '../Components/Common/PostInfo';
import ViewInfo from '../Components/Common/ViewInfo';
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
`
const ContentWrapper = styled.div`
    width: 100%;
    min-height: 30vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
        align-self: flex-start;
        font-size: 16px;
        color:${({ theme }) => theme.palette.secondary.main};
    }
`

// useEffect path依赖更改时发送请求请求data

function NoticeDetail({ post = {
    id: "222",
    title: "标题",
    createdAt: "2002-05",
    content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
} }) {
    return (
        <Container>
            <MainContainer style={{ minHeight: "50vh" }}>
                <Wrapper>
                    <Header title={post.title} back>
                        <div></div>
                    </Header>
                    <Divider variant="middle" />

                    <ContentWrapper>
                        <span>发布时间：{post.createdAt}</span>
                        <p>{post.content}</p>
                    </ContentWrapper>
                    {/* <ViewInfo 
                data={{read: post.read, favorite: post.favorite, comment: post.comment}}
                style={{alignSelf: 'flex-start', marginLeft: '10px'}}
                /> */}
                </Wrapper>
            </MainContainer>
        </Container>
    )
}

export default NoticeDetail