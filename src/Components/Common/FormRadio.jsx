
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components'

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
function FormRadio({ label="label", radioOptions=[{label: "男", value: "male", name: "gender"}, 
{label: "女", value: "female", name: "gender"},{label: "其他", value: "other", name: "gender"},], children, ...rest }) {
  return (
    <Container>
    <Wrapper>
        <label>{label}</label>
    </Wrapper>
    <Wrapper>
    <RadioGroup
            row>
            {radioOptions.map((item, index) => (
              <Field
              name={item.name}
              key={index}
              type="radio"        
              value={item.value}
              render={({ input, meta, values }) => (
                <FormControlLabel 
                value={item.value} 
                control={<Radio size="small" />} 
                label={item.label} 
                sx={{'& .MuiFormControlLabel-label':{fontSize: '16px'},
                '& .MuiSvgIcon-root': {
                  fontSize: 16,
                },
              }}
                {...input}/>

              )}
            />
            ))}
            </RadioGroup>
    </Wrapper>

</Container>
  )
}

export default FormRadio