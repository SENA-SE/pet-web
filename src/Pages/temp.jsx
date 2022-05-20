import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import PostName from '../Components/Common/PostName';
import Paragraph from '../Components/Common/Paragraph';
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
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
function PostDetail() {
  return (
    <Container>
            <MainContainer>
        hi
    </MainContainer>
    </Container>
  )
}

export default PostDetail