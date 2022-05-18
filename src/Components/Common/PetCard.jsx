import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid black;
    width: 200px;
    height: 300px;
    overflow: hidden;
`
const ImgContainer = styled.div`
    width: 100%;
    background: gray;
    height: 190px;
    margin-bottom: 10px;
`
const InfoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;justify-content: center;
    font-size: 16px;
    margin-bottom: 8px;
`
function PetCard({data}) {
    // usestate储存favorite,点击favorite传送data
    return (
        <Container>
            <ImgContainer>
            
            </ImgContainer>
            <InfoContainer style={{fontSize: '18px'}}>
                <FavoriteIcon color="secondary" fontSize="small" sx={{cursor: 'pointer'}}/>
                {data.name}
            </InfoContainer>
            <InfoContainer>
                {data.age}
                <Divider orientation="vertical" variant="middle" flexItem />
                {data.species}
                <Divider orientation="vertical" variant="middle" flexItem />
                {data.gender==="female"? <FemaleIcon color="primary" fontSize="small"/>
                :
<MaleIcon color="primary" fontSize="small"/>
                }
            </InfoContainer>
            <InfoContainer>
                {data.location}
            </InfoContainer>
        </Container>
    )
}

export default PetCard
