import React from 'react'
import styled from 'styled-components'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    user-select: none;
    .error {
        color: #b30d0d;
        font-size: 16px;
        font-weight: 600;
    }
    // grid-auto-rows: 100px;
    // align-items: center;
    // justify-content: center;
    // gap: 20px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    label {
        font-size: 16px;
    }
`
const StyledSelect = styled(Select)`
    width: 100%;
    &.MuiOutlinedInput-root:hover  {
        .MuiOutlinedInput-notchedOutline {
            border-color: ${({ theme }) => theme.palette.primary.main};
        }
    }

    &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
        }
    }
`
function FormSelect({ label, options, children, ...rest }) {
    return (
        <Container>
            <Wrapper>
                <label>{label}</label>
            </Wrapper>
            <Wrapper>
                <StyledSelect size="small" type="outlined" {...rest}>
                    {options.map(item => (
                        <MenuItem value={item.value} key={item.value}> {item.name} </MenuItem>

                    ))}
                </StyledSelect>
            </Wrapper>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

export default FormSelect