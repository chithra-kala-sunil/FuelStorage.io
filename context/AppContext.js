import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [notesItem, setNotes] = useState([]);
  const saveNotesHandler = (payLoad) => setNotes(payLoad);

  const value = { notesItem, saveNotesHandler };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
