import styled from 'styled-components'
import React from 'react'
import Divider from '@mui/material/Divider';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
const Container = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
`

function PetInfo({ data = { age: "年龄", sex: "male" }, ...rest }) {
    return (
        <Container {...rest}>
            {data.age}
            <Divider orientation="vertical" variant="middle" flexItem />
            {/* {data.species}
            <Divider orientation="vertical" variant="middle" flexItem /> */}
            {data.sex === "female" ? <FemaleIcon color="primary" fontSize="small" />
                :
                data.sex === "other" ?
                    <TransgenderIcon color="primary" fontSize="small" />
                    :
                    <MaleIcon color="primary" fontSize="small" />
            }
        </Container>
    )
}

export default PetInfo