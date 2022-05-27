import React from 'react'
import MainContainer from '../Components/Common/MainContainer'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Divider from '@mui/material/Divider';
import FilterHeader from '../Components/FilterHeader';
import Paragraph from '../Components/Common/Paragraph';
import Pagination from '../Components/Common/Pagination';
import TextArea from '../Components/Common/TextArea';
import Selector from '../Components/Common/Selector';
import Button from '../Components/Common/Button';
import Header from '../Components/Common/Header';
import { Form, Field } from 'react-final-form'
import { Post } from './Community';
import FormInput from '../Components/Common/FormInput';
import AutoSave from '../util/AutoSave';

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

const Container = styled.div`
    width: 100%;
    padding: 20px;
    margin-top: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
`
const Wrapper = styled.div`
    width: 70%;
    display: flex;
    gap: 30px;
`
const Left = styled(MainContainer)`
    // width: 50px !important;
    flex: 0.9;
`
const Right = styled(MainContainer)`
    // width: 500px !important;
    flex: 2.5;
`

const StyledListItemText = styled(ListItemText)`
    	.MuiListItemText-primary {
            font-size: 16px;
        }
`
const MenuItem = ({title="个人资料", options=[{name:"已申请", path:"/info"}]}) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
<>
        <ListItemButton onClick={handleClick}>
          <StyledListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
              {
                  options.map(item => 
<Link to={`/user${item.path}`}>
<ListItemButton sx={{ pl: 4 }}>
                    <StyledListItemText primary={item.name} />
                  </ListItemButton>
</Link>
                    )
              }
          </List>
        </Collapse>
        </>
    );
  }

const MenuList = ({data=[
    {
        title:"个人资料", 
        options:[{name:"基本资料", path:"/info/main"}, {name:"实名认证", path:"/info/identification"}]
    },
    {
        title:"发布内容", 
        options:[{name:"送养发布", path:"/post/send"}, {name:"社区发布", path:"/post/community"}]
    },
    {
        title:"收藏夹", 
        options:[{name:"宠物", path:"/favorite/pets"},
         {name:"社区", path:"/favorite/community"},
         {name:"科普", path:"/favorite/knowledge"},
         {name:"公告", path:"/favorite/notice"}
        ]
    },
    {
        title:"送养", 
        options:[{name:"审核", path:"/send"},
        {name:"已发布", path:"/identify"},
        {name:"已送养", path:"/identify"},
       ]
    },
    {
        title:"领养", 
        options:[{name:"已申请", path:"/info"},
       ]
    },
]}) => {

    return(
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
          {
              data.map(item => 
                <MenuItem title={item.title} options={item.options}/>
                )
          }
          </List>
    )
}
const Info = () => {
    return (
        <>
            <Header title={"编辑资料"} />
            <Divider sx={{ marginBottom: '15px' }} />
        </>
    )
}

const initialData = {

}
const onSubmit = (e) => {
    console.log("submit")
    debugger
}

const validate = (e) => {
    const errors = {}
    if (e.secondName && e.secondName.length < 5) {
        errors.secondName = 'Too Short'

    }
    return errors
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const save = async values => {
    console.log('Saving', values)
    await sleep(2000)
}
const MyForm = () => (
    <Form
        onSubmit={save}
        validate={validate}
        initialValues={initialData}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="secondName"
                        render={({ input, meta }) => (
                            <div>
                                <FormInput label="性别" {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            </div>
                        )}
                    />
                </div>

                <div>
                    <Field
                        name="userName"
                        render={({ input, meta }) => (
                            <div>
                                <FormInput label="昵称" {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            </div>
                        )}
                    />
                </div>
                <div>
                    <Field
                        name="location"
                        render={({ input, meta }) => (
                            <div>
                                <FormInput label="常住地" {...input} >
                                {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                                </FormInput>
                            </div>
                        )}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )}
    />
)
function User() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <MenuList/>
                </Left>
                <Right>
                    <Info />
                    <MyForm />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default User