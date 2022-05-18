import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MainSearch from '../Components/MainSearch'
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({theme})=>theme.palette.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`
function Home(props) {
  return (
    <Container>
        <MainSearch/>
    </Container>
  )
}

Home.propTypes = {}

export default Home
