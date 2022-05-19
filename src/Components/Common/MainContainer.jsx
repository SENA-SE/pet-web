import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 120vh;
    padding: 20px;
    width: 70%;
    border-radius: 10px;
    box-shadow: 13px 12px 13px -8px rgba(0,0,0,0.1);
    border: 1px solid black;
    // background: black;
`
function MainContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default MainContainer
