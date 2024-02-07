import GUtils from 'app/GUtils';
import { useEffect } from 'react';

import { GoToComponent } from '../types.ts';

type GoToComponentProps = {
    content: GoToComponent,
};

const GoToComponent = ({content}: GoToComponentProps) => {
    useEffect(() => {
        typeof content.goTo === 'string' ? GUtils.jumpTo(content.goTo) : GUtils.jumpTo(content.goTo());
    }, [content]);

    return null;
};

export default GoToComponent;
