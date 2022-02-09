import React from "react";

const Passage = (props) => {
    return (
        <div className="passage">
            {props.children.map((element, key) => {
                return <div className="passage-element" key={key}>{element}</div>
            })}
        </div>
    )
};

export default Passage;