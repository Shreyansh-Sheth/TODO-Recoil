import FilterDropdown from "./components/filterDropdown";
import TodoInput from "./components/todoInput";
import TodoVeiwer from "./components/todoViewer";

function App() {
  return (
    <div className="App">
      <TodoInput></TodoInput>
      <FilterDropdown></FilterDropdown>
      <TodoVeiwer></TodoVeiwer>
    </div>
  );
}

export default App;
