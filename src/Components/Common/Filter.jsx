import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
const StyledList = styled(List)`
  background: none;
  color: ${({ theme }) => theme.palette.secondary.main};

  & .MuiTypography-root{
    font-size: 18px;
  }
`;
export default function NestedList({ data, label = "title" }) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(["all"]);
  //handle clear，点击all触发
  const handleClick = () => {
    setOpen(!open);
  };
  const handleFilter = (name) => {
    let newArr = selected;
    if (newArr.includes(name)) {
      newArr = selected.filter((item) => item !== name)
    } else {
      newArr = selected.filter((item) => item !== "all")
      newArr = [...newArr, name]
    }
    setSelected(newArr)
  };
  const handleAll = () => {
    setSelected(["all"])
  }
  return (
    <StyledList
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary={label} />
        {open ? <RemoveIcon fontSize="16" /> : <AddIcon fontSize='16' />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={handleAll} fontSize="16">
            <ListItemText primary={"全部"} />
            <ListItemIcon>
              <CheckIcon fontSize="16" color={selected.includes("all") ? "primary" : "secondary"} />
            </ListItemIcon>
          </ListItemButton>
        </List>
        {data.map(item =>
          <List component="div" disablePadding key={item.name}>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleFilter(item.name)}>
              <ListItemText primary={item.name} />
              <ListItemIcon>
                <CheckIcon fontSize="16" color={selected.includes(item.name) ? "primary" : "secondary"} />
              </ListItemIcon>
            </ListItemButton>
          </List>
        )}
      </Collapse>
    </StyledList>
  );
}
