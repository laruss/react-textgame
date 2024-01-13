import { useMemo } from 'react';
import { GP, GSay } from 'react-textgame-components';

import { DialogPart } from './types';

// TODO
// type Components = {
//     [key in ComponentTypes]: ReactElement;
// };

type GDialogProps = {
    // components?: Components;
    parts: DialogPart[];
};

const GDialog = ({ parts }: GDialogProps) => {
    const Comment = useMemo(() => GP, [GP]);

    return (
        <GP>
            {
                parts.map((part, i) => {
                    return part.type === 'say' && (
                            <GSay key={i} characterName={part.author}>{part.text}</GSay>
                        )
                        || part.type === 'comment' && (
                            <Comment key={i}>{part.text}</Comment>
                        );
                })
            }
        </GP>
    );
};

export default GDialog;
