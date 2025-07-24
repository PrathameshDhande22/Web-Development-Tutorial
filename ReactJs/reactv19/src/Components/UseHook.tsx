import { use, useContext, useRef, type FC } from "react";
import { DataContext } from "../App";

const UseHook: FC = () => {
  // suitable for reading the promises and context only but failed for updating the data
  const sitedata = use(DataContext);

  const inputref = useRef<HTMLInputElement>(null);

  const siteupdatedatacontext = useContext(DataContext);

  const onsetText = (newtext: string | null) => {
    siteupdatedatacontext.updatetext(String(newtext));
  };

  return (
    <div className="flex flex-col items-center my-4 gap-2">
      <h4>Use hook - Update the Context Data</h4>

      <div className="flex gap-2 justify-center">
        <input
          type="text"
          name="text"
          ref={inputref}
          className="p-2 border-2"
          placeholder="Enter Text to Update the value"
        />
        <button
          className="p-2 border-2 border-blue-600"
          onClick={() => onsetText(inputref.current!.value)}
        >
          Update Context
        </button>
      </div>
      <div>
        Context Data : <span>{sitedata.text}</span>
      </div>
    </div>
  );
};
export default UseHook;
