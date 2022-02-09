import React, {useState} from "react";

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

export default Input;