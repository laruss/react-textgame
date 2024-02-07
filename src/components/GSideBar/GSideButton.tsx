import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import { GIcon } from 'react-textgame-components';

import { GSideButtonProps } from './types';

const GSideButton = ({ open, text, Icon, onClick, disabled }: GSideButtonProps) => {
    const theme = useTheme();

    return (
        <ListItem
            disablePadding
            sx={{ display: 'flex', width: 'initial', color: 'text.secondary' }}
            className="GSideButton"
        >
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                }}
                onClick={onClick}
                disabled={disabled}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <GIcon
                        onClick={() => null}
                        title={text}
                        IconComponent={Icon}
                        sx={{color: theme.palette.text.secondary}}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={text}
                    sx={{
                        opacity: open ? 1 : 0,
                        display: open ? 'flex' : 'none',
                        width: open ? '100%' : 0,
                        marginBottom: 0,
                    }}
                />
            </ListItemButton>
        </ListItem>
    );
};

export default GSideButton;
