import React from 'react'
import PropTypes from 'prop-types'
import PetList from '../Components/Common/PetList'
import styled from 'styled-components'
import Sidebar from '../Components/Common/Sidebar'
const Container = styled.div`
  width: 100%;
  display: flex;
`
function Adoption(props) {
  return (
    <Container style={{marginTop: '10vh'}}>
      <Sidebar/>
      <PetList/>
      </Container>
  )
}

Adoption.propTypes = {}

export default Adoption
