import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import Paragraph from '../Components/Common/Paragraph';
import PaginationLink from '../Components/Common/Pagination';
import TabFilter from '../Components/Common/TabFilter';

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
        value: "announcement",
        name: "全部公告"
    },
    {
        value: "volunteer",
        name: "志愿服务"
    },
    {
        value: "rescueStation",
        name: "救助基地"
    },
];
const notices = [
    {
        id: "1",
        title: "标题标题",
        content: "Nulla facilisi. Phasellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        createdAt: "2001-01-08"
    },
    {
        id: "122",
        title: "标题2",
        content: "Nulla facilisi. Phasellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        createdAt: "2001-01-08"
    },
    {
        id: "133",
        title: "标题3",
        content: "Nulla facilisi. Phasellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        createdAt: "2001-01-30"
    },
]
// useEffect path改变时获取数据
function Notice() {
    return (
        <Container>
            <MainContainer>
                <TabFilter filters={filters} />
                <Divider variant="middle" sx={{ marginY: "15px" }} />
                <NoticeContainer>
                    {notices.map(item =>
                        <>
                            <Link to={item.id}>
                                <NoticeWrapper>
                                    <h3>{item.title}</h3>
                                    {/* <Paragraph info={{read: item.read, favorite: item.favorite, comment: item.comment}}>
                                    {item.content}
                                </Paragraph> */}
                                    <Paragraph>
                                        {item.content}
                                    </Paragraph>
                                    <FlexWrapper>
                                        <span>发布时间：{item.createdAt}</span>
                                    </FlexWrapper>
                                </NoticeWrapper>
                            </Link>
                            <Divider variant="middle" sx={{ marginTop: "15px", marginBottom: "20px" }} />
                        </>
                    )}

                </NoticeContainer>
                <PaginationLink right  path={"notice"}/>
            </MainContainer>

        </Container>
    )
}

export default Notice