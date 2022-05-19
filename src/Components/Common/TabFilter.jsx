import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from 'styled-components'

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
export default function TabFilter({filters=["猫","狗","其他"], ...rest}) {
  const [value, setValue] = React.useState(filters[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        {...rest}
      >
        {filters.map(item=>
          <StyledTab value={item} label={item} />
          )}
      </StyledTabs>
  );
}
