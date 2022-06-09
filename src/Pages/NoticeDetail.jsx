import React, {useEffect, useState} from 'react';
import MainContainer from '../Components/Common/MainContainer'
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

import {publicRequest} from '../requestMethods';
import {useDispatch, useSelector} from 'react-redux';
import RequestNotification from '../Components/Common/RequestNotification';
import axios from 'axios';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';

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

function NoticeDetail() {
    const {id} = useParams()
    const [notice, setNotice] = useState([])
    useEffect(() => {
        const getNotice = async () => {
            const res = await publicRequest.post(`/notice/findById?id=${id}`); 
            console.log(res.data.data)
           setNotice(res.data.data)
        };
    getNotice()
}, [id]);
    return (
        <Container>
            <MainContainer style={{ minHeight: "50vh" }}>
                <Wrapper>
                    <Header title={notice.title} back>
                        <div></div>
                    </Header>
                    <Divider variant="middle" />

                    <ContentWrapper>
                        <span>发布时间：{notice.createTime}</span>
                        <p>{notice.content}</p>
                    </ContentWrapper>

                </Wrapper> 
            </MainContainer>
        </Container>
    )
}

export default NoticeDetail