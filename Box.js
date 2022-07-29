import React from "react";

//Box- this component should display a div with a background color, 
//width and height based on the props passed to it.
 
const Box = ({ id, backgroundColor, width, height, handleRemove}) => {
    const remove =() => handleRemove(id);
    return (
        <div
        style={{
            backgroundColor: backgroundColor,
            width: `${width}em`,
            height: `${height}em`
        }}
        >
            <button onClick = { remove }> X </button>
        </div>
    );
    }

export default Box;
