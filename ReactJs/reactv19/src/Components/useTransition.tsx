import { useState, useTransition } from "react";

/**
 * UseTransition Hook : These hook will automatically set the isPending state to true. Whenever the High Computing Function or some api call need to show whether it is completed or not. For These purpose usetransition hook is used. It helps to make our UI Responsive without any lags. Whenever the function or code written inside the startTransition will automatically set the "IsPending" state to true and after successfull execution of the startTransition "IsPending" state will be set to false. 
 * **Note:** These Makes the UI more responsive and interactive while the UI data is changing. 
 * @returns 
 */
export const UseTransitionHook = () => {
  const [values, setValues] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();

  const buttonOnClick = () => {
    startTransition(() => {
      const numberoflist: number[] = [];
      for (let i = 0; i < 10000; i++) {
        numberoflist.push(i);
      }
      setValues(numberoflist);
    });
  };

  return (
    <div>
      <button
        className={` p-2 ${isPending ? "bg-green-300" : "bg-red-300"}`}
        onClick={buttonOnClick}
        disabled={isPending}
      >
        Click Me for timeConsuming {isPending}
        {}
      </button>
      {isPending ? <div>Loading...</div> : <div>{values.join(",")}</div>}
    </div>
  );
};
