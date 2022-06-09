import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'
const typeVariants = {
  primary: css`
      background-color:${({ theme }) => theme.palette.primary.main};
      color:white; 
      &.MuiButton-root:hover {
          background: ${({ theme }) => theme.palette.primary.main};
      }
`, secondary: css`
        box-sizing: border-box;
        background: none;
        color:${({ theme }) => theme.palette.primary.main};
        border: 1px solid ${({ theme }) => theme.palette.primary.main};
`
};
const sizeVariants = {
  small: css`
    width: 73px;
    &.MuiButton-root {
        padding: 7px 15px;
      }
    `
}
const StyledButton = styled(Button)`
    border:none;
    outline: none;
    cursor:pointer;
    box-shadow: 0px 6px 12px rgba(0,0,0,.1);

   ${({ variants }) => typeVariants[variants]};
   ${({ size }) => sizeVariants[size]};

   &:disabled{
    cursor:not-allowed;
    color:black;
    background-color:white;
    border:1px solid black;
}
    // transform: scale(1);
    // transition:.4s;
    // &:hover{
    //   transform: scale(1.1);
    //   box-shadow: 0px 6px 16px rgba(0,0,0,.12);
    // }
`;

export default function CustomizedButton({ variants = "primary", href, size = "small", children, ...rest }) {
  return (

    <StyledButton variants={variants} size={size} {...rest}>
      {href ?
        <Link to={href}>
          {children}
        </Link>
        :
        <>{children}</>
      }
    </StyledButton>


  );
}
