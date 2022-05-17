import * as React from 'react';
import Box from '@mui/material/Box';
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

const Container = styled.div`
    width: 100vw;
    display: flex;
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
            <Tabs value={value} onChange={handleChange} sx={{ width: "100%" }}>
                <LinkTab label="首页" href="/home" />
                <LinkTab label="领养" href="/adoption" />
                <LinkTab label="送养" href="/send" />
                <LinkTab label="科普" href="/knowledge" />
                <LinkTab label="社区" href="/community" />
                <LinkTab label="公告" href="/notice" />
            </Tabs>
        </Container>
    );
}
