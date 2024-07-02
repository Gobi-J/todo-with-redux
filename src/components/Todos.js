import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../app/todoSlice";

const Todos = () => {
  const [newVal, setNewVal] = useState("");
  const [open, setOpen] = useState({ open: false, id: "" });
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleChange = (id, text) => {
    setOpen({
      open: true,
      id: id,
    });
    setNewVal(text);
  };
  const handleUpdate = (id) => {
    dispatch(updateTodo({ id: id, text: newVal }));
    setOpen({
      open: false,
      id: "",
    });
  };
  console.log(todos);
  return (
    <ul className="ml-10">
      {todos.map((todo) => (
        <div className="flex justify-between w-[200px]" key={todo.id}>
          <li
            style={{ display: `${open.id !== todo.id ? "block" : "none"}` }}
            className="border"
            key={todo.id}
            onClick={() => handleChange(todo.id, todo.text)}
          >
            {todo.text}
          </li>
          <input
            className="border w-36"
            style={{ display: `${open.id === todo.id ? "block" : "none"}` }}
            type="text"
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
          />
          <button
            style={{ display: `${open.id === todo.id ? "block" : "none"}` }}
            onClick={() => handleUpdate(todo.id)}
          >
            Update
          </button>

          <button
            style={{ display: `${open.id !== todo.id ? "block" : "none"}` }}
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
};

export default Todos;
