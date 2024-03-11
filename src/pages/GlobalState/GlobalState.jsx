import React, { useState } from "react";
import Component1 from "./components/Component1/Component1";

function GlobalState(props) {
    const [value, setValue] = useState("");

    return (
        <div>
            <h1>{value}</h1>
            <Component1 value={value} setValue={setValue} />
        </div>
    );
}

export default GlobalState;
