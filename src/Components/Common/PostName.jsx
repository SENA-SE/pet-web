import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { flexbox } from '@mui/system';
const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Name = styled.span`
    font-size: 16px;
`;
const Time = styled.span`
    font-size: 16px;
    color:${({ theme }) => theme.palette.secondary.main};
`;

function PostName({data={user: "名字", createdAt:"2天前"}}) {
    return (
        <Container>
            <AccountCircleIcon sx={{ fontSize: 60 }} color='secondary' />
            <InfoContainer>
                <Name>{data.user}</Name>
                <Time>{data.createdAt}</Time>
            </InfoContainer>
        </Container>
    )
}

export default PostName