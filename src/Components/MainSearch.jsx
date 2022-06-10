import React from 'react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import logo from '@mui/icons-material/LocationOnOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import logo1 from '../img/logo1.png'
const Container = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 100%;
    background:${({ theme }) => theme.status.bg};
    border-radius: 10px;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow:  ${({ focus }) => focus && "0 2px 6px 0 rgba(0,0,0,0.24)"};
    border:${({ focus, theme }) => focus && "1px solid" + theme.palette.primary.main || "1px solid transparent"};
`
const StyledInputBase = styled(InputBase)`

`
function MainSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const [values, setValues] = React.useState({
    location: [""],
    keyword: ""
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(values)
  };

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/adoption?search=${values.keyword}&category=10`)
  }
  return (
    <Container>
      <Wrapper focus={isFocused}>
        <IconButton sx={{ p: 0, m: 0.5, height: 35, cursor: 'initial' }} aria-label="menu">
          <img src={logo1} style={{ height: "100%" }} />
        </IconButton>
        <StyledInputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="开始寻宠之旅"
          inputProps={{ 'aria-label': 'search pet' }}
          onFocus={() => { setIsFocused(true) }}
          onBlur={() => { setIsFocused(false) }}
          onChange={handleChange("keyword")}
          value={values.keyword}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <HighlightOffOutlinedIcon onClick={() => setValues({
            location: [""],
            keyword: ""
          })} />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={handleSearch}>
          <TravelExploreIcon />
        </IconButton>
      </Wrapper>
    </Container>
  )
}

export default MainSearch
