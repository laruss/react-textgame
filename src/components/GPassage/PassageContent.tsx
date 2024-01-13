import { css, styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import GameSettings from 'app/settings';
import { PassageWidth } from 'components/GPassage/types.ts';
import { ReactNode } from 'react';

type PassageContentProps = {
    width?: PassageWidth;
    children?: ReactNode;
    className?: string;
};

const settings = GameSettings.getInstance().get();

const PassageGrid = styled(Grid2, {
    shouldForwardProp: (prop) => prop !== 'width',
})<{ width: PassageWidth }>(({ width }) => css`
    background-color: ${settings.passages?.backgroundColor};
    border-radius: 10px;
    padding: ${width === 'default' ? '1%' : '0'};
    text-align: justify;
    white-space: pre-wrap;
    word-break: break-word;
    font-size-adjust: 0.5;
    line-height: 1.5;
`);

const PassageContent = ({width = 'default', children, className}: PassageContentProps) => {
    if (width === 'max') {
        return (
            <PassageGrid width={width} height='100vh' className={className}>
                {children}
            </PassageGrid>
        )
    }

    return (
        <Grid2 container height='100vh' className={className}>
            <Grid2 xs={1} sm={1} md={2} />
            <PassageGrid width={width} xs={10} sm={10} md={8}>
                {children}
            </PassageGrid>
            <Grid2 xs={1} sm={1} md={2} />
        </Grid2>
    );
};

export default PassageContent;
