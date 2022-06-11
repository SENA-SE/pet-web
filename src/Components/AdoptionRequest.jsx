
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components'
import { Form, Field } from 'react-final-form';
import FormInput from '../Components/Common/FormInput';

const FormContainer = styled.div`
    width: 100%;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const initialData = {

}
const onSubmit = (e) => {
  console.log(e)
  debugger
}

const validate = (e) => {
  const errors = {}
  if (e.note?.length > 200) {
    errors.note = `字数超出限制 ${e.description?.length} / 200`
  }
  // let phoneReg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/
  // if (!phoneReg.test(e.email)) {
  //   errors.phone = "错误格式"
  // }
  if (e.phone?.length < 5) {
    e.phone = e.phone + "d"
  }
  if (!e.name) {
    errors.name = "不能为空"
  }
  if (!e.location) {
    errors.location = "不能为空"
  }

  if (!e.contact) {
    errors.contact = "不能为空"
  }
  return errors
}
const inputData = [
  {
    name: "name",
    label: "收养人昵称",
    placeholder: "请输入您的昵称或姓名（必填）",
  },
  {
    name: "location",
    label: "收养人地址",
    placeholder: "请输入您的地址（必填）",
  },
  {
    name: "contact",
    label: "联系方式",
    placeholder: "请输入您的联系方式（必填）",
  },
  {
    name: "note",
    label: "备注",
    placeholder: "请输入您想对宠物主人说的话，200字以内",
    multiline: true,
  },
]
const InfoForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={initialData}
    render={({ handleSubmit }) => (
      <StyledForm onSubmit={handleSubmit}>
        <Field
          name={"images"}
          render={({ input, meta, handleSubmit }) => (
            inputData.map(item => (
              <Field
                name={item.name}
                required={true}
                key={item.name}
                render={({ input, meta }) => (
                  <FormInput label={item.label} placeholder={item.placeholder} multiline={item.multiline} rows={4} {...input} >
                    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                  </FormInput>
                )}
              />
            ))

          )}
        />
      </StyledForm>
    )
    }
  />
);
export default function FormDialog({ ...rest }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExternalSubmit = () => {
    // document
    //   .getElementById('infoForm')
    //   .dispatchEvent(new Event('submit', { cancelable: true }))
  }

  return (
    <div {...rest}>
      <Button variant="outlined" onClick={handleClickOpen} >
        提交送养信息
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>送养信息</DialogTitle>
        <DialogContent>
          <DialogContentText>
            请填写您的个人信息（只有宠物主人可以看到）
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
          <InfoForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleExternalSubmit}>发送申请</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
