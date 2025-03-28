import React from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "../ui/provider";

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BrowserRouter>
      <Provider>{children}</Provider>
    </BrowserRouter>
  );
};
