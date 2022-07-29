import React from "react";
import {render, screen} from '@testing-library/react';
import  { fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders without crashing" , function(){
    render(<BoxList/>);
});

it ("matches snapshot" , function(){
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});

function addBox(boxList, height="4" , width="4", color="aqua"){
    const heightInput = boxList.screen.getByLabelText("Box Height");
    const widthInput  = boxList.screen.getByLabelText("Box Width");
    const colorInput  = boxList.screen.getByLabelText("Box Color");

    fireEvent.change(colorInput , { target : { value : color }});

    fireEvent.change(heightInput , { target : { value : height }});

    fireEvent.change(widthInput , { target : { value : width }});

    const button = boxList.screen.getByText("Add Box");

    fireEvent.click(button);

}

it ("can add a new box" , function(){
    const boxList = render(<BoxList />);

    // no boxes yet
    expect(boxList.screen.queryByText("Remove Box")).not.toBeInTheDocument();
    addBox(boxList);

    // one box now
    const removeButton = boxList.screen.getByText("Remove Box");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
          width : 4em;
          height: 4em;
          background-color: aqua;
          `);
    
    //expect form to be empty
    expect(boxList.screen.getAllByDisplayValue("")).toHaveLength(3);
});

it ("can remove a box" , function(){
    const boxList =render(<BoxList/>);
    addBox(boxList);

    const removeButton = boxList.getByText("Remove Box");
    fireEvent.click(removeButton);
    expect (removeButton).not.ToBeInTheDocument();

})