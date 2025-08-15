import type { FC } from "react";

type HeaderTagProps = {
  header: string;
  level?: "text-xl" | "text-2xl" | "text-3xl" | "text-4xl";
  className?: string;
};

export const HeaderTag: FC<HeaderTagProps> = ({ header, level, className }) => {
  return <h3 className={`${level} ${className}`}>{header}</h3>;
};
