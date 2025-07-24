import type { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  onClick(): MouseEventHandler<HTMLButtonElement> | any;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="border-1 border-black rounded-2 p-2 rounded-1 rounded-circle cursor-pointer hover:shadow-lg hover:transition-shadow" onClick={onClick}>
      {text}
    </button>
  );
};
