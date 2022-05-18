import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList({data}) {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState(["all"]);
    //handle clear，点击all触发
  const handleClick = () => {
    setOpen(!open);
  };
  const handleFilter=(name) => {
      console.log(selected)
    setSelected(selected.push(name))
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} >
                        <ListItemText primary={"all"} />
                        <ListItemIcon>
                          <StarBorder color={selected.includes("all")? "primary": "secondary"}/>
                        </ListItemIcon>
                      </ListItemButton>
                    </List>
          {data.map(item=>
                      <List component="div" disablePadding>
                      <ListItemButton sx={{ pl: 4 }} onClick={()=>handleFilter(item.name)}>
                        <ListItemText primary={item.name} />
                        <ListItemIcon>
                          <StarBorder color={selected.includes(item.name)? "primary": "secondary"}/>
                        </ListItemIcon>
                      </ListItemButton>
                    </List>
          )}
      </Collapse>
    </List>
  );
}
