import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom'


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
    value: "10",
    name: "猫",
    href: "/category=10"
  },
  {
    value: "11",
    name: "狗",
    href: "/category=11"
  },
  {
    value: "12",
    name: "其他",
    href: "/category=12"
  },
], ...rest }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get('category');
  const search = query.get('search')
  const [value, setValue] = useState(category || "0");
  const navigate = useNavigate();
  useEffect(() => {
    setValue(category);
    navigate(`?${search ? `search=${search}&` : ""}category=${category}`);
  }, [category]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`?${search ? `search=${search}&` : ""}category=${newValue}`);
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

        <StyledTab value={item.value} label={item.name} key={item.value} />

      )}
    </StyledTabs>
  );
}
