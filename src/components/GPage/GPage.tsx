import { Fade } from '@mui/material';
import render from 'app/passages/render.tsx';
import settings from 'app/settings/settings.ts';
import GPassage from 'components/GPassage';
import useWindowSize from 'hooks/useWindowSize';
import { useRef } from 'react';

import ContentWrapper from './ContentWrapper.ts';
import PageWrapper from './PageWrapper.ts';
import { NodeRef } from './types.ts';
import usePassageChanged from './usePassageChanged.ts';

let timeout = settings.defaults?.transitionTimeout;

const GPage = () => {
    const { height } = useWindowSize();
    const nodeRef: NodeRef = useRef(null);
    timeout = timeout || 300;
    const { passageChanged, currentPassage } = usePassageChanged({ nodeRef, timeout });

    const background = currentPassage && currentPassage[0].backgroundImage
        ? currentPassage[0].backgroundImage : undefined;

    return (
        <PageWrapper height={height}>
            <ContentWrapper ref={nodeRef}>
                <Fade in={!passageChanged} timeout={timeout}>
                    <div>
                        <GPassage
                            backgroundImage={background}
                            width={currentPassage && currentPassage[0].fullWidth ? 'max' : 'default'}
                        >
                            {
                                currentPassage == null ?
                                    <h3 style={{ color: 'red' }}>passage is undefined</h3>
                                    : render(currentPassage)
                            }
                        </GPassage>
                    </div>
                </Fade>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default GPage;
