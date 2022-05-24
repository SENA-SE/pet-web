import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import Paragraph from '../Components/Common/Paragraph';
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import Header from '../Components/Common/Header';
import { Post } from './Community';
const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
`
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    gap: 30px;
`
const Left = styled(MainContainer)`
    // width: 50px !important;
    flex: 0.9;
`
const Right = styled(MainContainer)`
    // width: 500px !important;
    flex: 2.5;
`

const Info = () => {
    return (
        <>
            <Header title={"基本资料"} />
            <Divider sx={{marginBottom: '15px'}} />
        </>
    )
}
function User() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    hi
                </Left>
                <Right>
                    <Info />
                    <Post />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default User