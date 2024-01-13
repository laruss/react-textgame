import { ReactNode, useMemo } from 'react';
import { PassageProps } from 'components/GPassage/types.ts';
import { v4 as uuid } from 'uuid';

const wrapChild = (child: ReactNode, key: number|string = uuid()): ReactNode => {
    return typeof child === 'string' ? <span key={key}>{child}</span> : child;
};

const useWrappedChildren = (children: PassageProps['children']) => {
    const wrappedChildren = useMemo(() => (
        Array.isArray(children) ? children.map(wrapChild) : [wrapChild(children)]
    ), [children]);

    return { wrappedChildren };
};

export default useWrappedChildren;