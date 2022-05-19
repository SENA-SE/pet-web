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
// const data = {
//         name: "名字",
//         isCollected: true,
//         species: "萨摩耶",
//         age: "3个月",
//         gender: "female",
//         location: "福州",
//         created:"2002-05-01",
//         description:"格里芬大约45磅，大约2到3岁，他喜欢玩耍",
//         condition:"1. 仅限同城 2. 不得遗弃、转让",
//         imageUrl:["1","2"],
//         status:{
//             "已免疫": true,
//             "已绝育": false,
//             "已驱虫": false
//         },
//         id: "1",
// }
function PetDetail({data = {
    name: "名字",
    isCollected: true,
    species: "萨摩耶",
    age: "3个月",
    gender: "female",
    location: "福州",
    created:"2002-05-01",
    description:"格里芬大约45磅，大约2到3岁，他喜欢玩耍",
    condition:"1. 仅限同城 2. 不得遗弃、转让",
    imageUrl:["1","2"],
    status:{
        "已免疫": true,
        "已绝育": false,
        "已驱虫": false
    },
    owner:"主人昵称",
    id: "1",
}}) {
    // console.log(data)
    return (
        <Container>
            <MainContainer>
            <Header>
                <ArrowBackIosIcon sx={{cursor: 'pointer'}}/>
                <h2>{data.name}</h2>
                <FavoriteIcon sx={{cursor: 'pointer'}}/>
                
            </Header>
            <Divider variant="middle" />
            <Carousel/>
            <InfoContainer>

                <PetInfo data={{age: data.age,species: data.species,gender: data.gender}}/>
<FlexWrapper>
{
                    Object.keys(data.status).map((key) => { 
                       return <Status confirm={data.status[key] && true}>{key}</Status>
                    })
                }
</FlexWrapper>
<FlexWrapper>创建时间： {data.created}</FlexWrapper>
<FlexWrapper>
    <AccountCircleIcon/>
    {data.owner}
</FlexWrapper>
<FlexWrapper>
    <LocationOnOutlinedIcon/>
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
            </InfoContainer>
            <InfoForm/>
            </MainContainer>
            </Container>
    )
}

export default PetDetail
