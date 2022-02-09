import React from "react";

const Passage = (props) => {

    return (
        <div className="passage">
            {props.children && typeof props.children === 'object' && props.children.map((element, key) => {
                return <div className="passage-element" key={key}>{element}</div>
            })}
            {props.children && typeof props.children === 'string' && <span>{props.children}</span>}
        </div>
    )
};

export default Passage;