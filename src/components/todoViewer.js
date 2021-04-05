import { useRecoilState, useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../store/atoms";

export default function TodoVeiwer() {
  const validTodos = useRecoilValue(todoSelector);
  const [todos, setTodos] = useRecoilState(todoState);
  return (
    <div>
      {validTodos.map((e) => {
        return (
          <div key={e.id}>
            <h2>{e.text}</h2>
            <p>{e.status}</p>
            <button
              onClick={() => {
                const X = todos.map((p) => {
                  if (p.id === e.id) {
                    return {
                      text: p.text,
                      id: p.id,
                      status:
                        p.status === "InComplete" ? "Complete" : "InComplete",
                    };
                  } else {
                    return p;
                  }
                });
                console.log(X);
                setTodos(X);
              }}
            >
              {e.status === "InComplete" ? "✔" : "❌"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
