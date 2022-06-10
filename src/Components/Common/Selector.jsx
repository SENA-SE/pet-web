import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import styled from 'styled-components'
const StyledSelect = styled(Select)`
    &:after{
        border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    }

    &:hover:before{
        border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main} !important;
    }
    & .MuiSelect-select {
        font-size: 16px;
    }
    & .MuiSelect-select:focus {
        background: none;
    }
`
export default function Selector({ data = [
    {
        value: "gender",
        name: "按性别"
    },
    {
        value: "Sasc",
        name: "按尺寸"
    },
    {
        value: "Sdsc",
        name: "按尺寸（倒序）"
    },
    {
        value: "Tasc",
        name: "按发布时间"
    },
    {
        value: "Tdsc",
        name: "按发布时间（倒序）"
    },

], label = "排序", setSort, noDefault, ...rest }) {
    const [selected, setSelected] = React.useState('');

    const handleChange = (event) => {
        setSelected(event.target.value);
        if(setSort) {
            setSort(event.target.value);
        }
    };

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }} {...rest}>
            <InputLabel id="demo-simple-select-standard-label" sx={{ fontSize: 16 }}>{label}</InputLabel>
            <StyledSelect
                labelId="demo-simple-select-standard-label"
                id=""
                value={selected}
                onChange={handleChange}
                label="selected"
            >
                {!noDefault && <MenuItem value="" sx={{ fontSize: '16px' }}>
                    <em>默认</em>
                </MenuItem>}

                {data.map(item =>
                    <MenuItem value={item.value} sx={{ fontSize: '16px' }} key={item.value}>{item.name}</MenuItem>
                )}
            </StyledSelect>
        </FormControl>


    );
}
