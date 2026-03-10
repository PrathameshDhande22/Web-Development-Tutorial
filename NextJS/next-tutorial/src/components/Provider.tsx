"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const queryclient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default Provider;
