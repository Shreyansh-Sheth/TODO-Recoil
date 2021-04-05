import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../store/atoms";

export default function TodoInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useRecoilState(todoState);
  return (
    <div>
      <div>
        <label>Enter Task</label>
        <input
          type="text"
          placeholder="add todo"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
      <button
        onClick={(e) => {
          const newTodo = {
            id: todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1,
            text,
            status: "InComplete",
          };

          setTodos([...todos, newTodo]);
          setText("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}
