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
const gender = [
    {
        name: "男",
        value: "1"
    },
    {
        name: "女",
        value: "2"
    },
    {
        name: "其他",
        value: "3"
    },
]
const size = [
    {
        name: "小",
        value: "1"
    },
    {
        name: "中",
        value: "2"
    },
    {
        name: "大",
        value: "3"
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
            <Filter data={gender} label="宠物性别" />
            <Divider variant="middle" />
            <Filter data={size} label="宠物尺寸" />

            {/* //TODO: 清除所有 
            // 年龄*/}
        </Container>
    )
}

export default Sidebar
