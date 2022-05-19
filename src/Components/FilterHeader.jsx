import Sort from './Common/Selector'
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
function FilterHeader({tabData, ...rest }) {
    return (
        <Container {...rest}>
            <Sort style={{ flex: 1 }} />
            <TabFilter filters={tabData} style={{ flex: 8 }} />
            <Search style={{ flex: 2 }} />
        </Container>
    )
}

export default FilterHeader