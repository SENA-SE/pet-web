import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: 250px;
`
function Logo({...rest}) {

    return (
        <Container {...rest}>
            LOGO
        </Container>
    )
}

export default Logo
