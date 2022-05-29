import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// import Divider from '@mui/material/Divider';

const Container = styled.div`
    position: relative;
    margin: 0 10px 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function Header({ title = "title", children, back, ...rest }) {
  return (
    <Container {...rest}>
      {back && <ArrowBackIosIcon
        color="secondary"
        sx={{ cursor: 'pointer', fontSize: 25 }}
        onClick={() => window.history.back()}
      />
      }
      <h3>{title}</h3>
      {children}
    </Container>

  )
}

export default Header