import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
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
    value: "cat",
    name: "猫"
  },
  {
    value: "dog",
    name: "狗"
  },
  {
    value: "others",
    name: "其他"
  },
], ...rest }) {
  const [value, setValue] = React.useState(filters[0].value);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    //TODO: 动态路由category
    // navigate(newValue);
  };

// useeffect 依赖tabvalue更改时跳转网址
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
