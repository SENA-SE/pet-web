import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import PetInfo from './PetInfo';
import logo1 from '../../img/logo1.png'

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
    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
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
    const [collected, setCollected] = React.useState(data.isCollected)
    const handleCollect = () => {
        setCollected(!collected)
    }
    return (
        <Container>
            <ImgContainer>
                <Link to={`/adoption/${data.id}`}>
                    <img src={data.images[0]} />
                </Link>
            </ImgContainer>
            <InfoContainer style={{ fontSize: '18px' }}>
                {/* <FavoriteIcon color={collected ? "primary" : "secondary"} fontSize="small" sx={{ cursor: 'pointer', transition: '0.3s' }} onClick={handleCollect} /> */}
                <img src={logo1} style={{ height: "20px" }} />

                <Link to={`/adoption/${data.id}`}>
                    {data.name || "无名"}</Link>

            </InfoContainer>
            <PetInfo data={data} style={{ marginBottom: "6px" }} />
            <InfoContainer>
                {data.address}
            </InfoContainer>
        </Container>
    )
}

export default PetCard
