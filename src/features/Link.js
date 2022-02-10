import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPassage } from "../projectSlice";
import PropTypes from 'prop-types';

const Link = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setCurrentPassage(props.to));
        if (props.callback) props.callback();
    };

    return (
        <span>&nbsp;
            <a className="game-link" href="#" onClick={onClick}>{props.children}</a>
        </span>

    );
};

Link.propTypes = { to: PropTypes.string.isRequired, callback: PropTypes.func };

export default Link;