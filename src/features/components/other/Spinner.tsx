import styled, {keyframes} from "styled-components";

const spinnerA = keyframes`
  0%  {background-size: 20% 100%,20% 100%,20% 100%}
  33% {background-size: 20% 10% ,20% 100%,20% 100%}
  50% {background-size: 20% 100%,20% 10% ,20% 100%}
  66% {background-size: 20% 100%,20% 100%,20% 10% }
  100%{background-size: 20% 100%,20% 100%,20% 100%}
`;

const SpinnerInner = styled.div`
  width: 45px;
  height: 45px;
  aspect-ratio: 1;
  --c: no-repeat linear-gradient(#000 0 0);
  background:
          var(--c) 0    50%,
          var(--c) 50%  50%,
          var(--c) 100% 50%;
  background-size: 20% 100%;
  animation: ${spinnerA} 1s infinite linear;
`;

const SpinnerContainer = styled.div<{isShown: boolean}>`
  visibility: ${props => props.isShown ? 'inherit': 'hidden'};
  opacity: ${props => props.isShown ? '100': '0'};
  transition: visibility 300ms, opacity 300ms;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  cursor: wait;
`;

type SpinnerProps = {
    isShown: boolean;
    zIndex?: number;
};

const Spinner = ({isShown, zIndex}: SpinnerProps) => (
    <SpinnerContainer isShown={isShown} style={{zIndex}}><SpinnerInner/></SpinnerContainer>
);

export default Spinner;