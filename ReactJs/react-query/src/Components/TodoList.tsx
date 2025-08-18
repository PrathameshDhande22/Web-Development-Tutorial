import { useQuery } from "@tanstack/react-query";
import { HeaderTag } from "./HeaderTag";
import { todoApi } from "../api/todo.api";

export const TodoList = () => {
  // Using useQuery to fetch todos
  // This will not refetch the data when the window is focused
  // and will only fetch data when the button is clicked
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: todoApi,
    refetchOnWindowFocus: false,
    enabled: false, // This will not refetch the data when the window is focused
    staleTime: 1000 * 60 * 1, // Data will be considered fresh for 5 minutes,
    select: (data) => data.data,
  });

  // Function to fetch todos on button click
  // This is useful when you want to fetch data on a specific event rather than on component mount
  const fetchTodos = () => {
    refetch();
  };

  return (
    <div>
      <HeaderTag
        header="useQuery on Event (refetch on button click)"
        level="text-2xl"
        className="font-bold py-4"
      />
      <button onClick={fetchTodos} className="btn btn-block btn-primary">
        Fetch All Todos
      </button>

      <div>
        {isLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {error && (
          <div className="text-red-500">
            <p>Error fetching todos: {error.message}</p>
          </div>
        )}
        <ul className="list bg-white text-black rounded-box shadow-md mt-2 border-2 border-gray-400">
          {!isLoading &&
            !error &&
            data?.map((value) => {
              return (
                <li
                  className="list-row flex items-center justify-between"
                  key={value.id}
                >
                  <div>{value.task}</div>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      role="img"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
