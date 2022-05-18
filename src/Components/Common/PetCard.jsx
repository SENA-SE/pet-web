import React, { useState } from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
// import Divider from '@mui/material/Divider';
// import FemaleIcon from '@mui/icons-material/Female';
// import MaleIcon from '@mui/icons-material/Male';
import { Link } from 'react-router-dom';
import PetInfo from './PetInfo';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 13px 12px 13px -8px rgba(0,0,0,0.1);
    width: 200px;
    min-height: 300px;
    overflow: hidden;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
        transform: scale(1.05);
    }
`
const ImgContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.status.bg2};
    height: 190px;
    margin-bottom: 10px;
`
const InfoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    margin-bottom: 8px;

    &:last-child{
        margin-bottom: 15px;
    }
`
function PetCard({ data }) {
    // usestate储存favorite,点击favorite传送data
    const [collected, setCollected] = React.useState(data.isCollected)
    const handleCollect = () => {
        setCollected(!collected)
    }
    return (
        <Container>
            <ImgContainer>
                <Link to={data.id}>
                    {/* img */}
                </Link>
            </ImgContainer>
            <InfoContainer style={{ fontSize: '18px' }}>
                <FavoriteIcon color={collected ? "primary" : "secondary"} fontSize="small" sx={{ cursor: 'pointer', transition: '0.3s' }} onClick={handleCollect} />
                <Link to={data.id}>
                    {data.name}</Link>

            </InfoContainer>
            {/* <InfoContainer>
                {data.age}
                <Divider orientation="vertical" variant="middle" flexItem />
                {data.species}
                <Divider orientation="vertical" variant="middle" flexItem />
                {data.gender === "female" ? <FemaleIcon color="primary" fontSize="small" />
                    :
                    <MaleIcon color="primary" fontSize="small" />
                }
            </InfoContainer> */}
            <PetInfo data={data} style={{ marginBottom: "6px" }} />
            <InfoContainer>
                {data.location}
            </InfoContainer>
        </Container>
    )
}

export default PetCard
