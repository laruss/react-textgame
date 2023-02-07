import styled from "styled-components";
import {useWindowSize} from "react-use";
import {useSelector} from "react-redux";
import {RootState} from "../../../engine/redux/store";
import passages from "../../../engine/passages";
import {useEffect, useRef, useState} from "react";
import Fade from "../transitions/Fade";

const PageWrapper = styled.div<{height: number}>`
  overflow: auto;
  display: flex;
  max-height: ${props => props.height}px;
  width: 100%;
  align-content: center;
  flex-direction: column;
`;

const Content = styled.div`
  display: inherit;
  align-content: inherit;
  flex-direction: inherit;
`;

const Page = () => {
    const {height} = useWindowSize();
    const [passageChanged, setPassageChanged] = useState(false);
    const [currentPassage, setCurrentPassage] = useState(null);
    const game = useSelector((state: RootState) => state.game);
    const nodeRef = useRef<null | HTMLDivElement>(null);
    const timeout = 300;

    const getPassage = () => {
        const psgs = passages;
        nodeRef.current && nodeRef.current.scrollIntoView({ block: 'start' });
        setCurrentPassage(eval(`psgs.${game.present.passages.current}`));
    };

    useEffect(() => {
        setPassageChanged(true);
        setTimeout(() => getPassage(), timeout);
    }, [game.present.passages.current]);

    useEffect(() => {
        passageChanged && setTimeout(() => setPassageChanged(false), timeout);
    }, [passageChanged]);

    return (
        <PageWrapper height={height}>
            <Content ref={nodeRef}>
                <Fade out={passageChanged} timeout={timeout}>
                    {currentPassage}
                </Fade>
            </Content>
        </PageWrapper>
    );
};

export default Page;