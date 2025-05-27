import React, { useState } from "react"

//child component

function Callback({ getcolor }) {
    const [Activecolor, setActivecolor] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setActivecolor(value);
        getcolor(value);

    };

    return (
        <>
            <input
                type="text"
                id='input'
                value={Activecolor}
                aria-label="input"
                onChange={handleChange}

            />
            <div id='div'>You have write color :<span > {Activecolor}</span> </div>
        </>
    )
};
export default Callback;