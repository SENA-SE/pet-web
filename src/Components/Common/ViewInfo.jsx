import React from 'react'
import styled from 'styled-components'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    user-select: none;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 3px;
`
function ViewInfo({ data = { read: 100, favorite: 50, comment: 25 }, ...rest }) {
    return (
        <Container {...rest}>
            <Wrapper>
                <VisibilityOutlinedIcon color="secondary" sx={{ fontSize: 18 }} />
                <span>{data.read}</span>
            </Wrapper>
            <Wrapper>
                <FavoriteBorderOutlinedIcon color="secondary" sx={{ fontSize: 18 }} />
                <span>{data.favorite}</span>
            </Wrapper>
            <Wrapper>
                <ChatBubbleOutlineIcon color="secondary" sx={{ fontSize: 18 }} />
                <span>{data.comment}</span>
            </Wrapper>
        </Container>
    )
}

export default ViewInfo
