// TODO: 获取detail data
// TODO: 点击提交申请，进行权限验证，否弹通知（请至我的资料处进行实名认证），是弹弹窗，提交表格，发送请求
import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import styled, { css } from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import PetInfo from '../Components/Common/PetInfo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Carousel from '../Components/Common/Carousel'
import InfoForm from '../Components/InfoForm'
import TabFilter from '../Components/Common/TabFilter';
import FilterHeader from '../Components/FilterHeader';
import PostName from '../Components/Common/PostName';
import Paragraph from '../Components/Common/Paragraph';
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button'
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
    border: 1px solid ${({ theme, confirm }) => confirm ? theme.palette.secondary.main : "none"};
    color:${({ theme }) => theme.palette.secondary.main};
    background: ${({ theme, confirm }) => confirm ? theme.status.bg2 : "none"};
    border-radius: 10px;
    padding: 5px 10px;
`
const FlexWrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: ${({ column }) => column ? "column" : "row"};
    font-size: 18px;

`
const PostsContainer = styled.div``
const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
`;
const tags = [
    {
        value: "search",
        name: "#紧急寻宠"
    },
    {
        value: "question",
        name: "#提问求助"
    },
    {
        value: "story",
        name: "#萌宠故事"
    },
    {
        value: "others",
        name: "#其他"
    },];
const posts = [
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasa facilisi. Phasellus sollicitudin . Aliquam eget icitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222"
    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulsellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "22"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#紧急寻宠",
        id: "222"

    },
    {
        user: "用户名",
        createdAt: "05-11",
        content: "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
        tag: "#提问求助",
        id: "222"
    },
]
// redux管理当前filter tag，获取tag后过滤然后进行遍历渲染
// 或者直接获取tag后filter网络请求获取
// 数据： filter，page
// 提交时需要验证，并通知
function Community() {
    return (
        <Container>
            <MainContainer>
                <FilterHeader tabData={tags} />
                <Divider variant="middle" sx={{ marginY: "15px" }} />
                <PostsContainer>
                    {posts.map(item =>
                        <>
                            <PostWrapper>
                                <PostName data={item} />
                                {/* link */}
                                <Paragraph >
                                    {item.content}
                                </Paragraph>
                            </PostWrapper>
                            <Divider variant="middle" sx={{ marginTop: "15px", marginBottom: "20px" }} />
                        </>
                    )}
                    <Pagination right path={"community"} />
                </PostsContainer>
            </MainContainer>
            <MainContainer>
                <FlexWrapper column>
                    <FlexWrapper style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <h3>发帖</h3>
                        <Selector data={tags} label={"话题"} noDefault/>
                    </FlexWrapper>
                    <TextArea />
                    <Button type="secondary" style={{alignSelf: 'flex-end', width: '200px'}}>提交</Button>
                </FlexWrapper>
            </MainContainer>
        </Container>
    )
}

export default Community
