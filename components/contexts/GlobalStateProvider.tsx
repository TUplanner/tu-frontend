"use client";
import { createContext, useContext, useState } from "react";

const GlobalStateContext = createContext({
  data: null,
  setData: (data: any) => {},
});

export const GlobalStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ data, setData }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
