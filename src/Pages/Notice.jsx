import React, { useEffect, useState } from 'react';
import MainContainer from '../Components/Common/MainContainer'
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import Paragraph from '../Components/Common/Paragraph';
import PaginationLink from '../Components/Common/Pagination';
import TabFilter from '../Components/Common/TabFilter';
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
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

const NoticeContainer = styled.div``
const NoticeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 10px;
    position: relative;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &: hover {
        border-radius: 5px;
        background: ${({ theme }) => theme.status.bg2};
    }
`;
const FlexWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: ${({ column }) => column ? "column" : "row"};
    font-size: 16px;
    
`;
const filters = [
    {
        value: "0",
        name: "全部公告"
    },
    {
        value: "1",
        name: "志愿服务"
    },
    {
        value: "2",
        name: "救助基地"
    },
];

// useEffect path改变时获取数据
function Notice() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);
    const category = parseInt(query.get('category') || '1', 10);
    const [notices, setNotices] = useState([])
    const [pages, setPages] = useState(1);
    useEffect(() => {
        const getNotice = async () => {
            try {
                const res = await publicRequest.post(`/notice/findNotice?${category === 0 ? "" : `categoriesId=${category}&`}page=${page}&pageSize=5`)
                const getAll = await publicRequest.post(`/notice/findNotice?${category === 0 ? "" : `categoriesId=${category}&`}page=1&pageSize=100`)
                setNotices(res.data.data)
                setPages(Math.ceil(getAll.data.data.length / 5))
            } catch (e) {
                console.log(e)
            }
        };
        getNotice();
    }, [category, page]);
    return (
        <Container>
            <MainContainer>
                <TabFilter filters={filters} />
                <Divider variant="middle" sx={{ marginY: "15px" }} />
                <NoticeContainer>
                    {notices.map((item, index) =>
                        <>
                            <Link to={`/notice/${item.id}`}>
                                <NoticeWrapper>
                                    <h3>{item.title}</h3>
                                    {/* <Paragraph info={{read: item.read, favorite: item.favorite, comment: item.comment}}>
                                    {item.content}
                                </Paragraph> */}
                                    <Paragraph>
                                        {item.content}
                                    </Paragraph>
                                    <FlexWrapper>
                                        <span>发布时间：{item.createTime}</span>
                                    </FlexWrapper>
                                </NoticeWrapper>
                            </Link>
                            <Divider variant="middle" sx={{ marginTop: "15px", marginBottom: "20px" }} />
                        </>
                    )}

                </NoticeContainer>
                <PaginationLink right path={"notice"} pages={pages} />
            </MainContainer>

        </Container>
    )
}

export default Notice