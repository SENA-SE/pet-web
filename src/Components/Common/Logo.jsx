import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    width: ${({ w }) => w};
    height: 100%;
    padding: 10px;
    img {
        height: 100%;
        object-fit: contain;
    }
`
function Logo({ w = "250px", src, ...rest }) {

    return (
        <Container {...rest}>
            <img src={src} />
        </Container>
    )
}

export default Logo
