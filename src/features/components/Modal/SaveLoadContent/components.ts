import styled from "styled-components";
import media from "../../../helpers/media";

export const SaveLoadMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

export const HeaderText = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-grow: 1;
  font-size: 40px;
  font-weight: bold;
  cursor: default;
`;

export const Body = styled.div`
  overflow: auto;
  display: inherit;
  flex-direction: inherit;
  height: 100%;
  max-height: 100%;
  margin-bottom: 20px;
  ${media.scrollHighlight.vertical}
`;

export const SaveItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid gray;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SaveItemName = styled.div<{isEditable: boolean}>`
  display: flex;
  text-align: center;
  align-items: center;
  flex-grow: 1;
  font-size: 20px;
  cursor: ${state => state.isEditable ? 'initial' : 'default'};
  overflow: auto;
  ${media.phone.portrait} {
    max-width: 90px;
    background-color: inherit;
    z-index: 2;
  };
`;