import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import styled from 'styled-components'
const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    resize: none;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: .3s;
    padding: 10px;
    &:focus {
        border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    }

`;
export default function MinHeightTextarea({ setValue }) {
  const handleChange = (event) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };
  return (
    <StyledTextArea
      aria-label="minimum height"
      minRows={8}
      placeholder="请输入您想发表的内容"
      onChange={handleChange}
    />
  );
}
