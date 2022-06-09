import React, {useEffect, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {
  Navigate,
  Link,
  MemoryRouter, Route, Routes, useLocation
} from "react-router-dom";

const StyledTabs = styled(Tabs)`
    & .MuiTabs-indicator {
        height: 100%;
        border-radius: 6px;
        z-index: -1;
    }
    & .Mui-selected {
        color: white;
        font-weight: 600;
    }
    & .MuiTabs-flexContainer {
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
`
const StyledTab = styled(Tab)`
    // margin-right: 50px;
`
export default function TabFilter({ filters = [
  {
    value: "1",
    name: "猫",
    href: "/category=1"
  },
  {
    value: "2",
    name: "狗",
    href: "/category=2"
  },
  {
    value: "3",
    name: "其他",
    href: "/category=3"
  },
], ...rest }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get('category');
  const [value, setValue] = useState(category);
  const navigate = useNavigate();
  useEffect(() => {
    setValue(category);
    navigate(`?category=${category}`);
}, [category]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`?category=${newValue}`);
  };

  return (
    <StyledTabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="category tabs"
      {...rest}
    >
      {filters.map(item =>

        <StyledTab value={item.value} label={item.name} key={item.value}/>

      )}
    </StyledTabs>
  );
}
