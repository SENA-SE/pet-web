import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    // height: 120vh;
    padding: 20px;
    width: 70%;
    border-radius: 5px;
    box-shadow:
        0px 1.1px 4.1px rgba(0, 0, 0, 0.057),
        0px 3.6px 13.8px rgba(0, 0, 0, 0.083),
        0px 16px 10px rgba(0, 0, 0, 0.14);

    // border: 1px solid black;
    // background: black;
`
function MainContainer({ children, ...rest }) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}

export default MainContainer
