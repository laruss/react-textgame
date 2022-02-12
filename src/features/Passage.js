import React, {useEffect} from "react";

const Passage = (props) => {

    useEffect(() => document.getElementById("page").scroll(0,0));

    const getContent = () => {
        if (props.children && typeof props.children === 'object' && !props.children.$$typeof)
            return props.children.map((element, key) => {
                return <div className="passage-element" key={key}>{element}</div>
            });
        else if (props.children && typeof props.children === 'string')
            return <span>{props.children}</span>;
        else if (props.children && typeof props.children === 'object')
            return <div className="passage-element">{props.children}</div>;
    };

    return (
        <div className="passage">
            {getContent()}
            <br/><br/><br/>
        </div>
    )
};

export default Passage;