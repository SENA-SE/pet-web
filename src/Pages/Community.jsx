// TODO: 获取detail data
// TODO: 点击提交申请，进行权限验证，否弹通知（请至我的资料处进行实名认证），是弹弹窗，提交表格，发送请求
import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import PetInfo from '../Components/Common/PetInfo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Carousel from '../Components/Common/Carousel'
import InfoForm from '../Components/InfoForm'
const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Header = styled.div`
    padding:0 10px 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    padding: 20px 10px 10px 10px;
`
const Status = styled.div`
    border: 1px solid ${({ theme, confirm }) => confirm? theme.palette.secondary.main : "none"};
    color:${({ theme }) => theme.palette.secondary.main};
    background: ${({ theme, confirm }) =>confirm? theme.status.bg2: "none"};
    border-radius: 10px;
    padding: 5px 10px;
`
const FlexWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: ${({column}) => column? "column" : "row"};
    font-size: 18px;
`

function Community() {
    return (

    )
}

export default Community
