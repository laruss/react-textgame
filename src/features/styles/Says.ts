import {css} from "styled-components";

type getCommonProps = {
    backgroundColor: string | undefined,
    textColor: string | undefined,
    nameColor: string | undefined,
    characterPictureRadius: string | undefined,
    position: 'right' | 'left'
};

const getCommon = ({
                       backgroundColor='#000',
                       textColor='#fff',
                       nameColor='#fff',
                       characterPictureRadius='50px',
                       position
}: getCommonProps) => css`
      display: flex;
      justify-content: ${position};
      padding: 10px;
      margin-bottom: 1%;
      gap: 10px;
      border-radius: 20px;
      border: black solid;
      background-color: ${backgroundColor};
      overflow: hidden;
      .char-info-delimiter {
        border: ${backgroundColor} solid;
        filter: invert(100%);
        mix-blend-mode: difference;
      };
      .char-info-container {
        display: flex;
        flex-direction: column-reverse;
        font-weight: bold;
        font-size: 150%;
        text-align: center;
        align-items: center;
        justify-content: center;
        min-width: 130px;
        max-width: 180px;
        gap: 10px;
        color: ${nameColor};
      };
      img {
        border-radius: ${characterPictureRadius};
      };
      .text-container {
        padding: 10px;
        width: 100%;
        color: ${textColor};
      };
`;

type getBigNameProps = {
    backgroundColor: string | undefined,
    position: 'right' | 'left',
    hasPicture: boolean,
    textColor: string | undefined,
    nameColor: string | undefined,
    characterPictureRadius: string | undefined
};

const getBigName = ({
                        backgroundColor='#60f0b2',
                        position,
                        hasPicture,
                        textColor='#fff',
                        nameColor='#000',
                        characterPictureRadius='50px'
}: getBigNameProps) => css`
  display: flex;
  justify-content: ${position};
  padding: 5px;
  gap: 10px;
  margin-top: 80px;
  position: relative;
  .char-info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 200px;
  };
  .char-info-name {
    position: absolute;
    font-size: 150%;
    color: ${nameColor};
    font-weight: bold;
    top: -50px;
    overflow: auto;
    border-bottom: black solid;
  };
  img {
    border-radius: ${characterPictureRadius};
    border: black solid;
  };
  .text-container {
    margin: ${hasPicture ? '50px' : 'auto'};
    border-radius: 15px;
    background: ${backgroundColor};
    color: ${textColor};
    padding: 20px;
    text-align: center;
    font-weight: 900;
    position: relative;
  };
  .text-container:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-top: 15px solid ${backgroundColor};
    border-bottom: 15px solid transparent;
    top: 20px;
    ${
      position === "left" ? css`
        border-left: 15px solid transparent;
        border-right: 15px solid ${backgroundColor};
        left: -30px;
      ` : css`
        border-left: 15px solid ${backgroundColor};
        border-right: 15px solid transparent;
        right: -30px;
      `
    }
  }
`;

type getMessengerProps = {
    backgroundColor: string | undefined,
    textColor: string | undefined,
    nameColor: string | undefined,
    characterPictureRadius: string | undefined,
    position: 'left'|'right',
};

const getMessenger = ({
                          backgroundColor='#effdde',
                          textColor='#000',
                          nameColor='#000',
                          characterPictureRadius='50%',
                          position

}: getMessengerProps) => css`
  display: flex;
  overflow: hidden;
  flex-direction: ${position === 'left' ? 'row' : 'row-reverse'};
  padding: 5px;
  gap: 10px;
  margin-top: 40px;
  position: relative;
  .char-info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  };
  .char-info-name {
    position: absolute;
    color: ${nameColor};
    top: -35px;
    overflow: auto;
    border-bottom: black solid;
  };
  .char-info-image {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: ${characterPictureRadius};
    border: black solid;
  }
  img {
    transform: scale(1.55);
  };
  .text-container {
    max-width: 70%;
    min-width: 200px;
    min-height: 100px;
    border-radius: 15px;
    background: ${backgroundColor};
    color: ${textColor};
    padding: 10px 20px;
    z-index: 2;
    box-shadow: 0 2px 1px 0 rgba(93,196,82,.5);
  };
  .text-container:before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-top: 15px solid ${backgroundColor};
    border-bottom: 15px solid transparent;
    top: 50px;
    ${
            position === "left" ? css`
              border-left: 15px solid transparent;
              border-right: 15px solid ${backgroundColor};
              left: 100px;
      ` : css`
              border-left: 15px solid ${backgroundColor};
              border-right: 15px solid transparent;
              right: 100px;
      `
    }
  }
`;

type getSaysStylesProps = {
    variant: string,
    position: 'left'|'right',
    backgroundColor: string | undefined,
    textColor: string | undefined,
    nameColor: string | undefined,
    characterPictureRadius: string | undefined,
    hasPicture: boolean,
    hasName: boolean
};

const getSaysStyles = ({variant, position, backgroundColor, textColor, nameColor, characterPictureRadius, hasPicture, hasName}: getSaysStylesProps) => {
    const common = getCommon({backgroundColor, textColor, nameColor, characterPictureRadius, position});

    if (variant === 'common') return common;
    if (variant === 'bigName') return getBigName({backgroundColor, textColor, nameColor, characterPictureRadius, position, hasPicture})
    if (variant === 'messenger') return getMessenger({backgroundColor, textColor, nameColor, characterPictureRadius, position});

    return common;
};

export default getSaysStyles;