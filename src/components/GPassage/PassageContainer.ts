import { styled } from '@mui/material';

const PassageContainer = styled('div')<{ backgroundImage: string | undefined }>`
    align-self: center;
    display: inherit;
    min-height: 100vh;
    flex-direction: inherit;
    width: 100%;
    max-width: 100%;
    background-image: ${props => props.backgroundImage ? `url("${props.backgroundImage}")` : null};
    background-repeat: no-repeat;
    background-size: cover;
    transition: background-image 0.2s ease-in-out;
`;

export default PassageContainer;
