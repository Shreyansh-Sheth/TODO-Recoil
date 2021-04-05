import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const todoFilter = atom({
  key: "todoFilter",
  default: "All",
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const filter = get(todoFilter);
    if (filter === "All") {
      return todos;
    } else if (filter === "InComplete") {
      return todos.filter((e) => e.status === "InComplete");
    } else {
      return todos.filter((e) => e.status === "Complete");
    }
  },
});
