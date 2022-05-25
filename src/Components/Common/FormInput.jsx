import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
const Container = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

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
const StyledInput = styled(TextField)`

    & .MuiOutlinedInput-root:hover  {
        .MuiOutlinedInput-notchedOutline {
            border-color: ${({theme}) => theme.palette.primary.main};
        }
    }

    .Mui-focused {
        .MuiOutlinedInput-notchedOutline {
            border: 1px solid ${({theme}) => theme.palette.primary.main};
        }
    }
`
function FormInput({ label, children, ...rest }) {
    return (
        <Container>
            <Wrapper>
            <label>{label}</label>
            </Wrapper>
            <Wrapper>
            <StyledInput size="small" type="outlined" {...rest}></StyledInput>
            </Wrapper>
            <Wrapper>
            {children}
            </Wrapper>
        </Container>
    )
}

export default FormInput