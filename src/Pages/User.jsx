import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';
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

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const StyledListItemText = styled(ListItemText)`
    .MuiListItemText-primary {
        font-size: 16px;
    }
`

const IconContainer = styled.div`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.status.bg2}; 
    margin-top: 30px;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
const MenuItem = ({ title = "个人资料", options = [{ name: "已申请", path: "/info" }] }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <StyledListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        options.map(item =>
                            <Link to={`/user${item.path}`}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <StyledListItemText primary={item.name} />
                                </ListItemButton>
                            </Link>
                        )
                    }
                </List>
            </Collapse>
        </>
    );
}

const MenuList = ({user, data = [
    {
        title: "个人资料",
        options: [{ name: "基本资料", path: "/info/main" }, { name: "退出登陆", path: "/info/logout" }]
    },
    {
        title: "发布内容",
        options: [{ name: "送养发布", path: "/post/send" }, { name: "社区发布", path: "/post/community" }]
    },
    {
        title: "收藏夹",
        options: [{ name: "宠物", path: "/favorite/pets" },
        { name: "社区", path: "/favorite/community" },
        { name: "科普", path: "/favorite/knowledge" },
        ]
    },
    {
        title: "送养",
        options: [{ name: "待审核", path: "/send" },
        ]
    },
    {
        title: "领养",
        options: [{ name: "已申请", path: "/adoption/request" },
        ]
    },
], ...rest }) => {
    return (
        <ListContainer>
            <IconContainer>
                <img src={user.user.avatar} />
            </IconContainer>
            <List
                sx={{ width: '100%', maxWidth: 360, minHeight: '30vh', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                {...rest}
            >
                {
                    data.map(item =>
                        <MenuItem title={item.title} options={item.options} />
                    )
                }
            </List>
        </ListContainer>
    )
}

function User(user) {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuList user={user}/>
                </Left>
                <Right>
                    <Outlet user={user}/>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default User