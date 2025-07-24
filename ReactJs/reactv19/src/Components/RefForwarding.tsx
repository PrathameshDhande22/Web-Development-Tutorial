import { useEffect, useRef, useState, type FC, type Ref } from "react";
import { preinit } from "react-dom";

/**
 * From React 19 We d'not need to use the ForwardRef method for Passing the ref as Prop.
 * @returns {FC}
 */
export const RefForwarding = () => {
  preinit("../Utils/work.js", { as: "script" });
  const ref = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>();

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const SubmitName = () => {
    setName(ref.current?.value);
  };

  return (
    <div className="my-3 flex flex-col gap-3 justify-center items-center">
      <h3 className="text-center text-2xl">Ref forwarding</h3>
      <InputType ref={ref}></InputType>
      <title>Ref Forwarding</title>
      <button className="p-2 bg-blue-400 hover:border-2" onClick={SubmitName}>
        Show Name
      </button>
      <div>
        <span>Entered Name</span>:{name}
      </div>
    </div>
  );
};

type InputTypeProps = {
  ref: Ref<HTMLInputElement | null>;
};

const InputType: FC<InputTypeProps> = ({ ref }) => {
  return (
    <input
      type="text"
      placeholder="Your Name"
      className="p-1 border-2 border-black"
      ref={ref}
    />
  );
};
