import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const fadeOut = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const Fade = styled.div<{out: boolean, timeout?: number}>`
  display: inherit;
  align-content: inherit;
  flex-direction: inherit;
  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} ${props => props.timeout}ms linear;
  transition: visibility 1s linear;
`;
Fade.defaultProps = {
    timeout: 1000
};

export default Fade;