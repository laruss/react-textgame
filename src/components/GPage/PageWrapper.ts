import { styled } from '@mui/material';

const PageWrapper = styled('div')<{ height: number }>`
    overflow: auto;
    display: flex;
    max-height: ${props => props.height}px;
    width: 100%;
    align-content: center;
    flex-direction: column;
`;

export default PageWrapper;
