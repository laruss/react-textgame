import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPassage } from "../projectSlice";

const Link = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        if (props.callback) props.callback();
        dispatch(setCurrentPassage(props.to));
    };

    return (
        <span>&nbsp;
            <a href="#" onClick={onClick}>{props.children}</a>
        </span>

    );
};

export default Link;