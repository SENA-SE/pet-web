import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useWindowSize } from '../../util/useWindowSize';
import ViewInfo from './ViewInfo';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    allign-items: center;
`;
const StyledParagraph = styled.span`
  ${({ status }) =>
        status.ellipsis && css`
        text-overflow: ellipsis;
        // white-space: nowrap;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        `
    };
`;
const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({ info }) => info ? "space-between" : "flex-end"};
    height: 40px;
`
const Expand = styled.span`
    color: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;
    align-self: flex-end;
    // margin: 10px 10px 0 10px;
    user-select: none;

`;


function Paragraph({ info, expand, children, ...rest }) {
    const [status, setStatus] = useState({ ellipsis: true, });
    const handleExpand = () => {
        setStatus({ ...status, ellipsis: !status.ellipsis })
    }
    const { width } = useWindowSize();
    const containerWidth = width * 0.85;
    const maxWord = containerWidth / 10 * 3;
    return (
        <Container {...rest}>
            <StyledParagraph as="p" status={status} {...rest}>
                {children}
            </StyledParagraph>
            {expand &&
                <Bottom info={info}>
                    {info && <ViewInfo data={info} style={{ marginTop: '10px' }} />}
                    {children.length > maxWord && (status.ellipsis ? <Expand status={status} onClick={handleExpand}>展开</Expand>
                        :
                        <Expand status={status} onClick={handleExpand}>收回</Expand>)
                    }
                </Bottom>
            }
        </Container>
    );
}
export default Paragraph;