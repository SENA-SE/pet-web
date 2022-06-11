import React, { useEffect, useState } from 'react';
import MainContainer from '../Components/Common/MainContainer'
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import Header from '../Components/Common/Header';
import { publicRequest } from '../requestMethods';
import { useParams } from 'react-router-dom';

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

function NoticeDetail() {
    const { id } = useParams()
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