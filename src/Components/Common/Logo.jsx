import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: ${({w}) => w};
`
function Logo({w="250px", ...rest}) {

    return (
        <Container {...rest}>
            LOGO
        </Container>
    )
}

export default Logo
