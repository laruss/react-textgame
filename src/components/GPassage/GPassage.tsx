import PassageContainer from './PassageContainer.ts';
import PassageContent from './PassageContent.tsx';
import { PassageProps } from './types.ts';
import useWrappedChildren from './useWrappedChildren.tsx';

const GPassage = ({ children, width, backgroundImage }: PassageProps) => {
    const { wrappedChildren } = useWrappedChildren(children);

    return (
        <PassageContainer className="passage-container" backgroundImage={backgroundImage}>
            <PassageContent
                className="passage-content"
                width={width === undefined ? 'default' : width}
            >
                {wrappedChildren}
            </PassageContent>
        </PassageContainer>
    );
};

export default GPassage;
