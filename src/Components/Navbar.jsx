import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components'
import {
    Router,
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import Logo from './Common/Logo';
import Button from './Common/Button';

const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 6px 16px rgba(0,0,0,.12);
    background: ${({theme}) => theme.status.bg};
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Logo style={{flex: 1}} />
            <TabContainer value={value} onChange={handleChange} sx={{ width: "100%", flex:4, justifyContent:'center' }}>
                <LinkTab label="首页" href="/home" />
                <LinkTab label="领养" href="/adoption" />
                <LinkTab label="送养" href="/send" />
                <LinkTab label="科普" href="/knowledge" />
                <LinkTab label="社区" href="/community" />
                <LinkTab label="公告" href="/notice" />
            </TabContainer>
            <ItemContainer>
                <Button>登录</Button>
                <Button type="secondary">注册</Button>
            </ItemContainer>
        </Container>
    );
}
