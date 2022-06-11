import React, { useEffect, useState } from 'react';
import { publicRequest } from '../requestMethods';
import { useDispatch, useSelector } from 'react-redux';
import RequestNotification from '../Components/Common/RequestNotification';
import axios from 'axios';
import { Link, MemoryRouter, Route, Routes, useLocation, useParams, useNavigate } from 'react-router-dom';
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
import DeleteDialog from '../Components/Common/DeleteDialog';
import PhoneIcon from '@mui/icons-material/Phone';
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

function PetDetail() {
    const { id } = useParams();
    const [pet, setPet] = useState({})
    const [like, setLike] = useState("0")
    const [operation, setOperation] = useState("apply")
    const user = useSelector(state => state.user.currentUser);
    const navigate = useNavigate()
    useEffect(() => {
        const query = {
            deleted: "0",
            id: id,
            page: 1,
            pagesize: 10
        }
        const queryDeleted = {
            deleted: "1",
            id: id,
            page: 1,
            pagesize: 10
        }
        const getPet = async () => {
            try {
                const res = await publicRequest.post(`/adopt/findAdopt`, query)
                const deleted = await publicRequest.post(`/adopt/findAdopt`, queryDeleted)
                console.log(res.data.data)
                setPet(res.data.data[0] || deleted.data.data[0])
                if (user.id === res.data.data[0].userId) {
                    setOperation("delete")
                }

            } catch (e) {
                console.log(e)
            }
        };
        getPet();
    }, [id]);
    const handleDelete = async () => {
        try {
            if (user) {
                const TOKEN = user.token;
                const userRequest = axios.create({
                    baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                    headers: { token: `${TOKEN}` }
                });
                const res = await userRequest.post(`/adopt/delete?id=${id}`);
                // console.log(res)
            }
        } catch (e) {
            console.log(e)
        } finally {
            navigate('/adoption?category=10')
        }
    }
    const handleLike = async () => {
        try {
            if (user) {
                const TOKEN = user.token;
                const userRequest = axios.create({
                    baseURL: 'http://cyjspace.5gzvip.91tunnel.com:80',
                    headers: { token: `${TOKEN}` }
                });
                const res = await userRequest.post(`/adopt/star?adoptId=${id}&value=${like === "1" ? "0" : "1"}`);
                // console.log(res)
                setLike(like === "1" ? "0" : "1")
            }
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <Container>
            <MainContainer>
                <Header title={pet?.name} back>
                    {user && <FavoriteIcon sx={{ cursor: 'pointer', transition: '0.25s' }} color={like === "0" ? "secondary" : "primary"} onClick={handleLike} />}
                </Header>
                <Divider variant="middle" sx={{ marginBottom: "15px" }} />
                <Carousel images={pet?.images} />
                <InfoContainer>
                    <FlexWrapper style={{fontSize: 16}}>创建时间： {pet?.createTime}</FlexWrapper>
                    <FlexWrapper style={{ width: "100%", justifyContent: "space-between" }}>
                        <PetInfo data={{ age: pet?.age, gender: pet?.sex }} style={{ fontSize: "20px" }} />
                        {/* <FlexWrapper>                       {
                            Object.keys(pet.status).map((key, index) => {
                                return <Status confirm={pet.status[key] && true} key={index}>{key}</Status>
                            })
                        }</FlexWrapper> */}
                        {console.log(pet?.status === "0")}
                        <Status confirm={parseInt(pet?.status)}>{pet?.status === "0" ? "未绝育" : "已绝育"}</Status>
                    </FlexWrapper>
                    <FlexWrapper>
                        <AccountCircleIcon color="secondary" />
                        {pet?.nickname}
                    </FlexWrapper>
                    <FlexWrapper>
                        <LocationOnOutlinedIcon color="secondary" />
                        {pet?.address}
                    </FlexWrapper>
                    <FlexWrapper>
                        <PhoneIcon color="secondary" />
                        {pet?.tel}
                    </FlexWrapper>
                    <FlexWrapper column>
                        <h3>主人描述： </h3>
                        {pet?.description}
                    </FlexWrapper>
                    <FlexWrapper column>
                        <h3>领养条件： </h3>
                        {pet?.requirement}
                    </FlexWrapper>
                    {operation === "delete" ?
                        // <Button variants="secondary" style={{ alignSelf: "flex-end", width: "initial" }} onClick={handleDelete}>删除该送养</Button>
                        <DeleteDialog style={{ alignSelf: "flex-end", width: "initial" }} handleDelete={handleDelete} />
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
