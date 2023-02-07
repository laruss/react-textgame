import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styled from "styled-components";
import React, {ReactElement} from "react";

import CancelIcon from '@mui/icons-material/Cancel';
import GIcon from "../GIcon";

const ModalBox = styled.div<{addStyle: string}>`
  outline: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: inherit;
  padding: 0 10px 10px;
  overflow-y: auto;
  overflow-x: hidden;
  ${props => props.addStyle}
`;

const CloseIconContainer = styled.div`
  color: inherit;
  position: fixed;
  top: -2px;
  right: -2px;
  width: 100%;
  display: flex;
  height: var(--modal-close-icon-width);
  max-height: var(--modal-close-icon-width);
  justify-content: flex-end;
`;

const ModalContent = styled.div`
  padding-top: var(--modal-close-icon-width);
  overflow: hidden;
  height: 100%;
  max-height: 100%;
`;

interface BaseModelProps {
    zIndex?: number;
    children?: (ReactElement|null)[];
    isOpened: boolean;
    onClose: () => void;
    style: string;
}

const BaseModal = ({zIndex, children, isOpened, onClose, style}: BaseModelProps): JSX.Element => {
    return (
        <div>
            <Modal
                open={isOpened}
                // @ts-ignore
                onClose={onClose}
                closeAfterTransition
                container={document.querySelector('.App')}
                BackdropComponent={Backdrop}
                style={{zIndex: zIndex ? zIndex : 5}}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isOpened}>
                    <ModalBox addStyle={style} className={'modal-box'}>
                        <CloseIconContainer>
                            <GIcon
                                onClick={onClose}
                                size={"var(--modal-close-icon-width)"}
                                title={"Close"}
                                IconComponent={CancelIcon}
                            />
                        </CloseIconContainer>
                        <ModalContent className='modal-container'>
                            {children}
                        </ModalContent>
                    </ModalBox>
                </Fade>
            </Modal>
        </div>
    );
};

export default BaseModal;