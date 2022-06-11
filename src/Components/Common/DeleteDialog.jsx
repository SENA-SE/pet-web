// TODO:一样用redux全局调用储存
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteDialog({ handleDelete, ...rest }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div {...rest}>
      <Button variant="outlined" onClick={handleClickOpen} >
        结束该送养
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          结束该送养
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: 16 }}>
            结束该送养后，该送养信息将不再公开。您可以在 用户-送养-已结束 中查看已结束的送养。
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleDelete}>确定</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
