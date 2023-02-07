import styled, {FlattenSimpleInterpolation} from "styled-components";
import React from "react";
import GImage from "./GImage";
import GBlock, {Effect} from "./GBlock";
import userSettings from "../../Story/settings";
import getSaysStyles from "../styles/Says";

const Container = styled.div<{css: FlattenSimpleInterpolation}>`${props => props.css}`;

export type variantSayType = 'common'|'bigName'|'messenger';

interface GSayProps {
    blockEffect?: Effect;
    children: (React.ComponentType<any>|JSX.Element|string)[]|(React.ComponentType<any>|JSX.Element|string);
    characterName?: string;
    characterPicture?: string;
    characterPictureRadius?: string;
    side?: 'left'|'right';
    style?: React.CSSProperties;
    variant?: variantSayType;
    backgroundColor?: string;
    textColor?: string;
    nameColor?: string;
}

interface CharInfoProps {
    characterName: string | undefined;
    characterPicture: string | undefined;
    style: React.CSSProperties;
    variant: variantSayType;
    side: 'left'|'right';
}

const CharInfo = ({characterName, characterPicture, style, side, variant}: CharInfoProps) => {
    return (
        <div className='char-info-container' style={style}>
            { characterName !== undefined && <div style={{[side]: 0}} className='char-info-name'>{characterName}</div> }
            { characterPicture !== undefined && <GImage className='char-info-image' src={characterPicture}/> }
            { characterPicture === undefined && variant === 'messenger' && (
                <GImage className='char-info-image' src={'1234'} imageStyles={{transform: 'scale 2', marginTop: '15%'}} />
            ) }
        </div>
    );
};

const GSay = ({
                  characterName,
                  characterPicture,
                  characterPictureRadius,
                  side = 'left',
                  style = {},
                  variant,
                  backgroundColor,
                  textColor,
                  nameColor,
                  children,
                  blockEffect
}: GSayProps) => {
    variant = variant ? variant : userSettings.defaults.sayVariant;

    const styles = getSaysStyles({
        variant,
        position: side,
        backgroundColor,
        textColor,
        nameColor,
        characterPictureRadius,
        hasPicture: Boolean(characterPicture),
        hasName: Boolean(characterName)
    });

    const CharInfo_ = <CharInfo
        variant={variant}
        style={{color: nameColor}}
        characterName={characterName}
        characterPicture={characterPicture}
        side={side}
    />;

    const Border = <div className='char-info-delimiter'/>
    const effect = blockEffect ? blockEffect : side === 'left' ? 'leftSpring' : 'rightSpring';

    return (
        <GBlock loadOn='scroll' effect={effect} style={{paddingBottom: 0}}>
            <Container css={styles} style={style}>
                {(side === 'left' || variant === 'messenger') && CharInfo_}
                {(side === 'left' || variant === 'messenger') && Border}
                <div className={'text-container'}>
                    {children}
                </div>
                {side === 'right' && variant !== 'messenger' && Border}
                {side === 'right' && variant !== 'messenger' && CharInfo_}
            </Container>
        </GBlock>
    );
};

export default GSay;