import { CustomComponent } from 'app/markdown/types';
import { ReactElement, ReactNode, useMemo } from 'react';
import GDialog from '../GDialog';

type _GEmProps = {
    components: CustomComponent[];
    children?: ReactNode;
};

const _GEm = (props: _GEmProps) => {
    const component = useMemo(() => {
        const componentTag = (props.children as ReactElement).props.children;
        return props.components.find(item => item.tag === componentTag);
    }, [props.components, props.children]);

    return (
        <>
            {
                component?.label === GDialog.tagName && (
                    GDialog.fromMarkdown({ rawText: component.insideText })
                )
            }
        </>
    );
};

export default _GEm;
