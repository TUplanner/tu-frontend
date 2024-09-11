"use client";
import { createContext, useContext, useState } from "react";

const defaultData = {
  program: "",
  term: "",
};

const GlobalStateContext = createContext({
  data: defaultData,
  setData: (data: any) => {},
});

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState(defaultData);

  return (
    <GlobalStateContext.Provider value={{ data, setData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
