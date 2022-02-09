import React, {useEffect} from "react";
import "./Page.css";

const Page = (props) => {
    return (
        <div className="page">
            {props.passages[props.current]}
        </div>
    )
};

export default Page;