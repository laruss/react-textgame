import {variantButtonType} from "../../features/styles/Buttons";
import {variantLinkType} from "../../features/styles/Links";
import {variantSayType} from "../../features/components/GSay";

export type settingsType = {
    passages: {
        start: string,
        backgroundColor: string
    },
    project: {
        name: string,
        version: string,
        author: string,
        debug: boolean
    },
    defaults: {
        font: string,
        fontSize: string,
        buttonVariant: variantButtonType,
        linkVariant: variantLinkType,
        sayVariant: variantSayType,
    },
    sidebar: {
        alwaysHide: boolean
    }
};