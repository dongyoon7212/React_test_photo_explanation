import React from "react";
import Component4 from "../Component4/Component4";

function Component3({ value, setValue }) {
    return (
        <div>
            <Component4 value={value} setValue={setValue} />
        </div>
    );
}

export default Component3;
