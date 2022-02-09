import React, {useState} from "react";
import PropTypes from 'prop-types';

const Input = (props) => {
    const buttonName = props.button ? props.button : "Submit";
    const [value, setValue] = useState('');

    const onClick = e => {
        if (props.callback)
            props.callback(value);
        setValue('');
    };

    return (
        <span>
            <input
                className="game-input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="game-button" onClick={onClick}>{buttonName}</button>
        </span>
    );
};

Input.propTypes = { button: PropTypes.string, callback: PropTypes.func };

export default Input;