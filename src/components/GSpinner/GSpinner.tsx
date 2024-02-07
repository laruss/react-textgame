import { CircularProgress, styled } from '@mui/material';
import { useAppSelector } from 'app/redux/hooks.ts';
import { selectSpinner } from 'app/redux/slices/systemSlice.ts';
import { useEffect } from 'react';

const SpinnerContainer = styled('div')<{ isShown: boolean }>`
    visibility: ${props => props.isShown ? 'inherit' : 'hidden'};
    opacity: ${props => props.isShown ? '100' : '0'};
    transition: visibility 300ms, opacity 300ms;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    cursor: wait;
`;

const GSpinner = () => {
    const { show, zIndex } = useAppSelector(selectSpinner);

    const handleKeyPress = (e: KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();
    };

    useEffect(() => {
        if (show) {
            document.addEventListener('keydown', handleKeyPress);
        } else {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, []);

    return (
        <SpinnerContainer isShown={show} style={{ zIndex }}><CircularProgress /></SpinnerContainer>
    );
};

export default GSpinner;
