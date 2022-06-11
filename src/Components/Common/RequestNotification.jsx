// TODO:使用redux储存状态和信息，在app.jsx插入notice
import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RequestNotification({ content = "default", type = "success" }) {

  return (
    <Alert severity={type} sx={{ width: '100%' }}>
      {content}
    </Alert>
  );
}
