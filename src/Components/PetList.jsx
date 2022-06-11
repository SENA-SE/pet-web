import React from 'react'
import PetCard from './Common/PetCard'
import styled from 'styled-components'
const Container = styled.div`
    display: grid;
    width: 100%;
    padding: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
`

function PetList({ data=[], category, filters, sort, ...rest }) {
    return (
        <Container {...rest}>
            {data.map(item =>
                <PetCard data={item} key={item.id} />
            )}
        </Container>
    )
}

export default PetList
