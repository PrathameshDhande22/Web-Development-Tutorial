import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className="border-2 border-red-500 h-50 text-center">
    {children}
  </div>;
};
