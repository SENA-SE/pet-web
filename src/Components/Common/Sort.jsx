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
export default function SelectVariants({...rest}) {
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
            <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }} {...rest}>
                <InputLabel id="demo-simple-select-standard-label" sx={{ fontSize: 16 }}>排序</InputLabel>
                <StyledSelect
                    labelId="demo-simple-select-standard-label"
                    id=""
                    value={sort}
                    onChange={handleChange}
                    label="sort"
                >
                    <MenuItem value="" sx={{fontSize: '16px'}}>
                        <em>默认</em>
                    </MenuItem>
                    <MenuItem value={"time"} sx={{fontSize: '16px'}}>按发布时间</MenuItem>
                    <MenuItem value={"age"} sx={{fontSize: '16px'}}>按年龄</MenuItem>
                    <MenuItem value={"size"} sx={{fontSize: '16px'}}>按尺寸</MenuItem>
                </StyledSelect>
            </FormControl>


    );
}
