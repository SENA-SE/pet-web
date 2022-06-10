import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components'
import {
    Link
} from "react-router-dom";
import Logo from './Common/Logo';
import Button from './Common/Button';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../img/logo2.png'
const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 6px 16px rgba(0,0,0,.12);
    background: ${({ theme }) => theme.status.bg};
    z-index: 1000;
    // position: sticky;
    position: fixed;
    top: 0;
`
const ItemContainer = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    gap: 10px;
`
const TabContainer = styled(Tabs)`
    .MuiTabs-flexContainer {
        justify-content: center;
    }
`
function LinkTab({ href, ...rest }) {
    return (
        <Link to={href}>
            <Tab
                onClick={(event) => {
                    // event.preventDefault();
                }}
                sx={{ paddingX: 6, paddingY: 2 }}
                {...rest}
            />
        </Link>
    );
}

export default function NavTabs() {
    const location = useLocation();
    const tabKey = location.pathname.split('/')[1];
    const idxArr = ["home", "adoption", "send", "community", "notice"]
    const index = idxArr.indexOf(tabKey)
    const [value, setValue] = useState(index === -1 ? 0 : index);
    useEffect(() => {
        if (index === -1) {
            setValue(0);
        }
    }, [index]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const user = useSelector(state => state.user.currentUser);
    const userLogin = user === null ? false : true;
    return (
        <Container>
            <Logo src={logo} style={{ flex: 1 }} />
            <TabContainer value={value} onChange={handleChange} sx={{ width: "100%", flex: 4, justifyContent: 'center' }}>
                <LinkTab label="首页" href="/home" />
                <LinkTab label="领养" href="/adoption?category=1" />
                <LinkTab label="送养" href="/send" />
                {/* <LinkTab label="科普" href="/knowledge" /> */}
                <LinkTab label="社区" href="/community?category=1" />
                <LinkTab label="公告" href="/notice?category=0" />
            </TabContainer>
            <ItemContainer>
                {userLogin ?
                    <Button href="/user" variants="secondary" style={{ width: "initial" }}>{user.username}</Button>
                    :
                    <>
                        <Button href="/login">登录</Button>
                        <Button href="/register" variants="secondary">注册</Button>
                    </>
                }



            </ItemContainer>
        </Container>
    );
}
