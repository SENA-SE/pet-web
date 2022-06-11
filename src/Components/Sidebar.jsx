import React from 'react'
import styled from 'styled-components'
import Filter from './Common/Filter'
import { useState } from 'react'
import Divider from '@mui/material/Divider';
import Button from '../Components/Common/Button'
const Container = styled.div`
    width: 25%;
    padding: 10px;
    height: 90vh;
    position: relative;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;

`
const gender = [
    {
        name: "男",
        value: "male"
    },
    {
        name: "女",
        value: "female"
    },
    {
        name: "其他",
        value: "other"
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
function Sidebar({ setValue, handleFilter }) {
    const [selected, setSelected] = useState({});
    const handleSelect = (newObj) => {
        const updatedObj = { ...selected }
        updatedObj[newObj.queryName] = newObj.value
        setSelected({ ...updatedObj })
        handleFilter(updatedObj)

    }

    return (
        <Container>
            <Filter data={gender} handleSet={handleSelect} queryName="sex" label="宠物性别" />
            <Divider variant="middle" />
            <Filter data={size} handleSet={handleSelect} queryName="size" label="宠物尺寸" />
            {/* <Button style={{ width: '80%', marginTop: '8rem' }} onClick={() => window.location.reload()}>清除所有</Button> */}
        </Container>
    )
}

export default Sidebar
