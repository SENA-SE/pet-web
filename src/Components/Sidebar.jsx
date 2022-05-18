import React from 'react'
import styled from 'styled-components'
import Filter from './Common/Filter'
import { useState } from 'react'
import Divider from '@mui/material/Divider';

const Container = styled.div`
width: 25%;
padding: 10px;
// background: pink;
`
const species = [
    {
        name: "萨摩耶",
    },
    {
        name: "哈士奇",
    },
]
const size = [
    {
        name: "小",
    },
    {
        name: "中",
    },
]
function Sidebar() {
    // const [selected, setSelected] = React.useState(
    //     {
    //         species:["all"],
    //         age:100,
    //         gender:"all",
    //         size:"all",
    //         location:"all",
    //     }
    // );
    return (
        <Container>
            <Filter data={species} label="种类" />
            <Divider variant="middle" />
            <Filter data={size} label="尺寸" />
            <Divider variant="middle" />
            <Filter data={size} label="尺寸" />
            {/* //TODO: 清除所有 
            // 年龄*/}
        </Container>
    )
}

export default Sidebar
