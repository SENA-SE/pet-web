import Sort from './Common/Sort'
import React from 'react'
import TabFilter from './Common/TabFilter'
import Search from './Common/Search'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
`
function PetsHeader({ ...rest }) {
    return (
        <Container {...rest}>
            <Sort style={{ flex: 1 }} />
            <TabFilter style={{ flex: 8 }} />
            <Search style={{ flex: 2 }} />
        </Container>
    )
}

export default PetsHeader