"use client";

import { createContext, useState } from "react";

export const ContextInformasi = createContext();

const ContextInformasiProvider = ({ children }) => {
  const [countCsroll, setCountScroll] = useState();

  return (
    <ContextInformasi.Provider value={{ countCsroll, setCountScroll }}>
      {children}
    </ContextInformasi.Provider>
  );
};

export default ContextInformasiProvider;
