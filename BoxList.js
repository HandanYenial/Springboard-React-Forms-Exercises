import React from "react";
import Box from "./Box";
import "./BoxList.css";
import { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid } from 'uuid';


//BoxList - Place your state that contains all of the boxes here.
//This component should render all of the Box components along with 
//the NewBoxForm component

const BoxList = () =>{
    const initialBox = [
        {
        id: uuid(),
        backgroundColor: "red",
        height: "100px",
        width: "100px"
        },
        {
        id: uuid(),
        backgroundColor: "blue",
        height: "100px",
        width: "100px"
        },
        {
        id: uuid(),
        backgroundColor: "green",
        height: "100px",
        width: "100px"
        }
    ];
    const [boxes, setBoxes] = useState(initialBox);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes,{...newBox , id:uuid()}]);
    }

    const remove = id =>{
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    
    /**const boxComponents = boxes.map(box => (
        <Box 
            key = {box.id}
            id = {box.id}
            width ={box.width}
            height ={box.height}
            handleRemove = {removeBox}
            color={box.color}
        />
    ))*/

    return(
        <div>
            <h1>Box List</h1>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(({ id, backgroundColor, height, width }) => 
                 <Box 
                     id ={id} 
                     backgroundColor={backgroundColor} 
                     width ={width} 
                     height ={height} 
                     key ={id}
                     handleRemove ={remove}

                    />)}
            </div>
        </div>
    )
}


export default BoxList;
