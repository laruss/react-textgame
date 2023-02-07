import React, {HTMLInputTypeAttribute, KeyboardEvent, useState} from "react";
import GButton from "./GButton";
import {variantButtonType} from "../styles/Buttons";
import styled from "styled-components";
import userSettings from "../../Story/settings";
import GHelpers from "../../engine/helpers/GHelpers";
import settings from "../../engine/settings";

type InputProps = {
    allowOnlyNextSymbols?: string;
    buttonCaption?: string;
    buttonVariant?: variantButtonType;
    callback: (value: any) => void;
    confirmOnEnter?: boolean;
    disableAfterConfirm?: boolean;
    onlyAlphabeticSymbols?: boolean;
    onlyNumbers?: boolean;
    placeholder?: string;
    readOnly? : boolean;
    restrictWhiteSpaces?: boolean;
    style?: React.CSSProperties;
    styleButton?: React.CSSProperties;
    type?: HTMLInputTypeAttribute;
    initValue?: string;
}

const Container = styled.span`
  width: content-box;
`;

const Input = styled.input<{ro: boolean}>`
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: inherit;
  background-color: ${props => props.ro ? 'inherit' : '#fff'};
  color: inherit;
  cursor: ${props => props.ro ? 'not-allowed' : 'inherit'};
  ::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
`;

const GInput = ({
                    allowOnlyNextSymbols,
                    buttonCaption = "Submit",
                    buttonVariant = 'dark',
                    callback,
                    confirmOnEnter = true,
                    disableAfterConfirm = false,
                    onlyAlphabeticSymbols = false,
                    onlyNumbers = false,
                    placeholder = "Input something 😊",
                    readOnly = false,
                    restrictWhiteSpaces = false,
                    style = {},
                    styleButton = {},
                    type = '',
                    initValue = '',
                }: InputProps) => {
    const [value, setValue] = useState(initValue);
    const [_readOnly, set_readOnly] = useState(false);

    const onClick = () => {
        callback && callback(value);
        disableAfterConfirm && set_readOnly(true);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && confirmOnEnter) {
            e.preventDefault();
            onClick();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let regexp, afterRegexp, notify;
        let result = e.target.value;
        const onlyAlphabetReg = /[^a-z]/gi;
        const onlyAlphabetNotify = settings.input.validation.onlyAlphabetic;
        const onlyNumbersReg = /[^0-9]/gi;
        const onlyNumbersNotify = settings.input.validation.onlyNumeric;
        const onlyNextSymbReg = new RegExp(`[^${allowOnlyNextSymbols}]`, 'gi');
        const onlyNextNotify = `${settings.input.validation.onlyNextSymbols}"${allowOnlyNextSymbols}"`;
        const restrictWhiteSpacesReg = /\s/gi;
        const restrictWhiteSpacesNotify = settings.input.validation.restrictWhiteSpaces;

        if (onlyAlphabeticSymbols) {
            regexp = onlyAlphabetReg;
            notify = onlyAlphabetNotify;
        }
        else if (onlyNumbers) {
            regexp = onlyNumbersReg;
            notify = onlyNumbersNotify;
        }
        else if (allowOnlyNextSymbols) {
            regexp = onlyNextSymbReg;
            notify = onlyNextNotify;
        }
        else if (restrictWhiteSpaces) {
            regexp = restrictWhiteSpacesReg;
            notify = restrictWhiteSpacesNotify;
        }

        if (regexp !== undefined) {
            afterRegexp = result.replace(regexp, '');
            afterRegexp !== result && GHelpers.notify(notify as string);
            result = afterRegexp;
        }

        setValue(result);
    };

    const buttonHeight = `${parseInt(userSettings.defaults.fontSize) * 2}px`;

    return (
        <Container>
            <Input
                className="game-input"
                value={value}
                type={type}
                placeholder={placeholder}
                ro={readOnly || _readOnly}
                readOnly={readOnly || _readOnly}
                onChange={handleChange}
                style={style}
                onKeyPress={handleKeyPress}
            />
            <GButton
                variant={buttonVariant}
                style={{height: buttonHeight, ...styleButton}}
                isDisabled={readOnly || _readOnly}
                onClick={onClick}
            >
                {buttonCaption}
            </GButton>
        </Container>
    );
};

export default GInput;