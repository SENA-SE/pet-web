import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import {useState} from 'react'
const Container = styled.div`
width: 20%;
background: pink;
`
const filters=[
    {
        name:"萨摩耶",
    },
    {
        name:"哈士奇",
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
            <Filter data={filters}/>
        </Container>
    )
}

export default Sidebar
