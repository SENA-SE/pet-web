import React from 'react'
import styled from 'styled-components'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const Container = styled.div`
    width: 300px;
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
function Search({...rest}) {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = React.useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(value)
    };
    return (
        <Container {...rest}>
            <Wrapper focus={isFocused}>
                <StyledInputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search "
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onFocus={() => { setIsFocused(true) }}
                    onBlur={() => { setIsFocused(false) }}
                    onChange={handleChange}
                    value={value}
                />
                {value &&
                    <IconButton sx={{ p: '10px' }} aria-label="delete">
                        <HighlightOffOutlinedIcon onClick={() => setValue("")} fontSize='small' />
                    </IconButton>}
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon fontSize='small' />
                </IconButton>
            </Wrapper>
        </Container>
    )
}

export default Search
