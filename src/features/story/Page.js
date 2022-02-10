import React from "react";
import "./Page.css";

const Page = (props) => {
    return (
        <div className="page" id="page">
            {props.passages[props.current]}
        </div>
    )
};

export default Page;