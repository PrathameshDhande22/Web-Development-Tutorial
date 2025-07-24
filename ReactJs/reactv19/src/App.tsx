import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./route";
import { createContext, useState } from "react";

export type SiteData = {
  text: string;
  settings: Record<string, string>;
  updatetext(newtext: string): void;
};

export const DataContext = createContext<SiteData>({
  settings: { dark: "true" },
  text: "Hello",
  updatetext: () => {},
});

function App() {
  const [text, setText] = useState<string>("Hello");
  const handleupdatetext = (newtext: string) => {
    setText(newtext);
  };

  return (
    <>
      <DataContext.Provider
        value={{
          settings: { dark: "true" },
          text: text,
          updatetext: handleupdatetext,
        }}
      >
        <RouterProvider router={routers} />
        <Outlet />
      </DataContext.Provider>
    </>
  );
}

export default App;
