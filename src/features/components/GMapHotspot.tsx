import React from "react";
import {variantButtonType} from "../styles/Buttons";
import userSettings from "../../Story/settings";
import GButton from "./GButton";

type GMapHotspotProps = {
    variant?: 'button'; // TODO: add 'image'
    buttonVariant?: variantButtonType;
    caption: string;
    callback: () => void;
    style?: React.CSSProperties
}

const GMapHotspot = ({
                         buttonVariant = userSettings.defaults.buttonVariant,
                         caption,
                         callback,
                         style = {}
                     }: GMapHotspotProps): React.ReactElement<'GMapHotspot', any> => {
    return (
        <GButton onClick={callback} variant={buttonVariant} style={style}>{caption}</GButton>
    )
};

export default GMapHotspot;