import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";

const Passage = (props) => {
    const [canBeShown, setCanBeShown] = useState(false);
    useEffect(() => document.getElementById("page").scroll(0,0));

    useEffect(() => {
        setCanBeShown(false);
        setTimeout(() => {
            setCanBeShown(true);
        }, 100)
    }, [props])

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
        <CSSTransition timeout={350} classNames="passage" in={canBeShown} unmountOnExit>
            <div className="passage">
                {canBeShown && getContent()}
                <br/><br/><br/>
            </div>
        </CSSTransition>
    )
};

export default Passage;