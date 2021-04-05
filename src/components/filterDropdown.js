import { useRecoilState } from "recoil";
import { todoFilter } from "../store/atoms";

export default function FilterDropdown() {
  const [filter, setFilter] = useRecoilState(todoFilter);
  return (
    <div>
      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="InComplete">InComplete</option>
        <option value="Complete">Complete</option>
      </select>
    </div>
  );
}
