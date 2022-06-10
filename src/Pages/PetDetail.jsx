import React, { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import RequestNotification from '../Components/Common/RequestNotification';
import axios from 'axios';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import MainContainer from '../Components/Common/MainContainer'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import PetInfo from '../Components/Common/PetInfo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Carousel from '../Components/Common/Carousel'
import InfoForm from '../Components/AdoptionRequest'
import Header from '../Components/Common/Header'
import Button from '../Components/Common/Button'
const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    padding: 20px 10px 10px 10px;
`
const Status = styled.div`
    border: 1px solid ${({ theme, confirm }) => confirm ? theme.palette.secondary.main : "none"};
    color:${({ theme }) => theme.palette.secondary.main};
    background: ${({ theme, confirm }) => confirm ? theme.status.bg2 : "none"};
    border-radius: 10px;
    padding: 5px 10px;
`
const FlexWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: ${({ column }) => column ? "column" : "row"};
    font-size: 18px;
`

function PetDetail({ data = {
    name: "名字",
    isCollected: true,
    species: "萨摩耶",
    age: "3个月",
    gender: "female",
    location: "福州",
    created: "2002-05-01",
    description: "格里芬大约45磅，大约2到3岁，他喜欢玩耍",
    condition: "1. 仅限同城 2. 不得遗弃、转让",
    imageUrl: ["1", "2"],
    status: {
        "已免疫": true,
        "已绝育": false,
        "已驱虫": false
    },
    owner: "主人昵称",
    id: "1",
} }) {
    const { id } = useParams();
    const [pet, setPet] = useState([])
    const [operation, setOperation] = useState("apply")
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        // const getPets = async () => {
        //     try {
        //         const res = await publicRequest.post(`/post/findById?id=${id}`);
        //         await publicRequest.post(`/post/hit?postId=${id}`);
        //         setPet(res.data.data)
        //     } catch (e) {
        //         console.log(e)
        //     }
        // };
        // getPets();
        // if (user.id === pet.userId) {
        //     setOperation("delete")
        // }
    }, [id]);
    const handleDelete = () => {
        console.log(1)
    }
    return (
        <Container>
            <MainContainer>
                <Header title={data.name} back>
                    <FavoriteIcon sx={{ cursor: 'pointer' }} />
                </Header>
                <Divider variant="middle" sx={{ marginBottom: "15px" }} />
                <Carousel />
                <InfoContainer>
                    <FlexWrapper style={{ width: "100%", justifyContent: "space-between" }}>
                        <PetInfo data={{ age: data.age, species: data.species, gender: data.gender }} style={{ fontSize: "20px" }} />
                        <FlexWrapper>                       {
                            Object.keys(data.status).map((key, index) => {
                                return <Status confirm={data.status[key] && true} key={index}>{key}</Status>
                            })
                        }</FlexWrapper>
                    </FlexWrapper>
                    <FlexWrapper>创建时间： {data.created}</FlexWrapper>
                    <FlexWrapper>
                        <AccountCircleIcon />
                        {data.owner}
                    </FlexWrapper>
                    <FlexWrapper>
                        <LocationOnOutlinedIcon />
                        {data.location}
                    </FlexWrapper>
                    <FlexWrapper column>
                        <h3>主人描述： </h3>
                        {data.description}
                    </FlexWrapper>
                    <FlexWrapper column>
                        <h3>领养条件： </h3>
                        {data.condition}
                    </FlexWrapper>
                    {operation === "delete" ?
                        <Button variants="secondary" style={{ alignSelf: "flex-end", width: "initial" }} onClick={handleDelete}>删除该送养</Button>
                        :
                        // <InfoForm style={{ alignSelf: "flex-end" }} />
                        <></>
                    }

                </InfoContainer>

            </MainContainer>
        </Container>
    )
}

export default PetDetail
