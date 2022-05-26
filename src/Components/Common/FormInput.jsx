import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import ImageUpload from './ImageUpload';
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
const StyledInput = styled(TextField)`
    width: 100%;
    & .MuiOutlinedInput-root:hover  {
        .MuiOutlinedInput-notchedOutline {
            border-color: ${({ theme }) => theme.palette.primary.main};
        }
    }

    .Mui-focused {
        .MuiOutlinedInput-notchedOutline {
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
        }
    }
    input::-webkit-input-placeholder { 
        font-size: 16px;
    }
    input::-moz-input-placeholder { 
        font-size: 16px;
    }
    input::-ms-input-placeholder { 
        font-size: 16px;
    }

    textarea::-webkit-input-placeholder { 
        font-size: 16px;
    }
    textarea::-moz-input-placeholder { 
        font-size: 16px;
    }
    textarea::-ms-input-placeholder { 
        font-size: 16px;
    }


`
function FormInput({ label, file, children, ...rest }) {
    // const [value, setValue] = React.useState("");
    // const handleNumber = (e) => {
    //     let numberVal = e.target.value.replace(/[^\d]/, '');
    //     setValue(numberVal)
    // }
    return (
        <Container>
            <Wrapper>
                <label>{label}</label>
            </Wrapper>
            <Wrapper>
                {file ? <ImageUpload {...rest} />
                    :
                    <StyledInput size="small" type="outlined" {...rest}></StyledInput>
                }
            </Wrapper>
            <Wrapper>
                {children}
            </Wrapper>
        </Container>
    )
}

export default FormInput