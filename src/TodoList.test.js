import React from "react";
import { render ,fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

function addTodo (todoList, text="learn react" , completed="false"){
    const textInput = todoList.screen.getByLabelText("text");
    
    fireEvent.change(textInput, {target: {value: text}});

    const button = todoList.screen.getByText("Add");
    fireEvent.click(button);
}

it("can add a todo" , function(){
    const view = render(<TodoList />);
    addTodo(view);

    expect(view.screen.getByText("learn react")).toBeInTheDocument();
    expect(view.screen.getByText("completed")).toBeInTheDocument();

});

it ("can delete a todo" , function(){
    const view = render(<TodoList/>);
    addTodo(view);

    fireEvent.click(view.screen.getByText("Completed"));

    expect(view.screen.queryByText("learn react")).not.toBeInTheDocument();
})

