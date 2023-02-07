import React, {useState} from 'react';
import styled from 'styled-components';

const StyledText = styled.p<{ isShown: boolean, showOnClick: boolean }>`
  font-size: inherit;
  color: inherit;
  filter: ${(props) => (props.isShown ? 'none' : 'blur(5px)')};
  transition: all 0.2s ease-in-out;
  cursor: ${(props) => props.showOnClick ? (props.isShown ? 'inherit' : 'pointer') : 'default'};
`;

interface Props {
    text: string;
    showOnClick?: boolean;
    style?: React.CSSProperties;
}

const GBlurText: React.FC<Props> = ({ text, showOnClick=false, style={} }) => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        showOnClick && setIsShown(true);
    };

    return (
        <StyledText isShown={isShown} showOnClick={showOnClick} style={style} onClick={handleClick}>{text}</StyledText>
    );
};

export default GBlurText;