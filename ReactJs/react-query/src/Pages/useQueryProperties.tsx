import { InvalidateQueries } from "../Components/InvalidateQueries";
import { RefetchInterval } from "../Components/RefetchInterval";
import { TodoList } from "../Components/TodoList";

export const useQueryProperties = () => {
  return (
    <div className="">
      <RefetchInterval />
      <hr className="mt-4" />
      <TodoList />
      <hr className="mt-4" />
      <InvalidateQueries />
    </div>
  );
};
