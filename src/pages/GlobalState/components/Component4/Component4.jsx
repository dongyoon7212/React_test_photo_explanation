import React from "react";

function Component4({ value, setValue }) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(() => e.target.value)}
            />
        </div>
    );
}

export default Component4;
