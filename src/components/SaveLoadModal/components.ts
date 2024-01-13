import { styled } from '@mui/material';

export const SaveLoadMain = styled('div')(({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    color: ${theme.palette.text.primary};
    width: 65vw;
    margin: 1em 2em 0 2em;
    overflow: hidden;
    
    ${theme.breakpoints.down('sm')} {
        width: 100%;
        height: 100%;
        margin-left: 0;
        margin-right: 0;
    }
`,
);

export const Header = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 1em;
`;

export const HeaderText = styled('div')`
    display: flex;
    text-align: center;
    align-items: center;
    flex-grow: 1;
    font-size: 40px;
    font-weight: bold;
    cursor: default;
`;

export const Body = styled('div')`
    overflow: auto;
    display: inherit;
    flex-direction: inherit;
    height: fit-content;
    margin-bottom: 1em;
    min-height: 50vh;
`;

export const SaveItem = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    border-bottom: 1px solid gray;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const SaveItemName = styled('div')<{ isEditable: boolean }>(({ isEditable, theme }) => ({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexGrow: 1,
    fontSize: '20px',
    cursor: isEditable ? 'initial' : 'system',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '90px',
        backgroundColor: 'inherit',
        zIndex: 2,
    },
}));
