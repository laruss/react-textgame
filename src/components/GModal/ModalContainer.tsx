import { css, styled } from '@mui/material';

const ModalContainer = styled('div')(({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.palette.background.default};
    box-shadow: ${theme.shadows[24]};
    max-width: 95vw;
    max-height: 90vh;
    overflow: auto;
    padding: ${theme.spacing(4)};
    border-radius: 2px;
    
    ${theme.breakpoints.down('sm')} {
        max-width: 100vw;
        max-height: 100vh;
    }
`);

export default ModalContainer;
