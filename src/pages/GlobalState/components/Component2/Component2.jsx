import React from "react";
import Component3 from "../Component3/Component3";

function Component2({ value, setValue }) {
    return (
        <div>
            <Component3 value={value} setValue={setValue} />
        </div>
    );
}

export default Component2;
