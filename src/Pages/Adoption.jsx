import React from 'react'
import PropTypes from 'prop-types'
import PetList from '../Components/PetList'
import styled from 'styled-components'
import Sidebar from '../Components/Sidebar'
import PetsHeader from '../Components/PetsHeader'
const Container = styled.div`
  width: 100%;
  display: flex;
`
const ListContainer = styled.div`
  width: 100%;
  padding: 20px 10px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
function Adoption(props) {
  return (
    <Container style={{ marginTop: '10vh' }}>
      <Sidebar />
      <ListContainer>
        <PetsHeader />
        <PetList />
      </ListContainer>
    </Container>
  )
}

Adoption.propTypes = {}

export default Adoption
