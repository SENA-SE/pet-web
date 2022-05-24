import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MainSearch from '../Components/MainSearch'
import bgImg from '../img/bg2.jpg'
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  // background: ${({ theme }) => theme.palette.primary.main};
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
function Home(props) {
  return (
    <Container >
      <MainSearch />
    </Container>
  )
}

Home.propTypes = {}

export default Home
