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

  return (
    <ul className="ml-10">
      {todos.map((todo) => (
        <div key={todo.id}>
          <div
            className="justify-between w-1/3"
            style={{ display: `${open.id !== todo.id ? "flex" : "none"}` }}
          >
            <li
              className="border"
              key={todo.id}
              onClick={() => handleChange(todo.id, todo.text)}
            >
              {todo.text}
            </li>
            <button className="text-red-500" onClick={() => dispatch(removeTodo(todo.id))}>
              Delete
            </button>
          </div>

          <div className="justify-between w-1/3"
            style={{ display: `${open.id === todo.id ? "flex" : "none"}` }}>
              <input
                className="border w-36"
                type="text"
                value={newVal}
                onChange={(e) => setNewVal(e.target.value)}
              />
              <button className="text-green-500"
                onClick={() => handleUpdate(todo.id)}
              >
                Update
              </button>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Todos;
