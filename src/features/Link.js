import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPassage } from "../projectSlice";
import PropTypes from 'prop-types';

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

Link.propTypes = { to: PropTypes.string.isRequired, callback: PropTypes.func };

export default Link;