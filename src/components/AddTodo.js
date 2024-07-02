import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if(!input) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="my-10 ml-10">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-stone-950 border"
      />
      <button onClick={handleAdd} className="pl-4 text-green-600 font-bold" >Add</button>
    </div>
  );
};

export default AddTodo;
