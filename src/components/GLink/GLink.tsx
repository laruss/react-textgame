import { setCurrentPassage } from 'app/redux/slices/gameSlice';
import { useDispatch } from 'react-redux';
import { GLink as G_Link } from 'react-textgame-components';

import { GLinkProps } from './types.ts';

const GLink = ({ to, callback, children, variant, sx }: GLinkProps) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setCurrentPassage(to));
        callback && callback();
    };

    return (
        <G_Link
            onClick={onClick}
            variant={variant}
            sx={sx}
        >
            {children}
        </G_Link>

    );
};

export default GLink;
