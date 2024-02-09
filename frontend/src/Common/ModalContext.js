import { createContext, useContext, useState } from "react";

const modalContext = createContext();

export const useModal = () => {
  return useContext(modalContext);
};

export const ModalContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setshowModal] = useState(null);

  return (
    <modalContext.Provider value={{ open, setOpen, showModal, setshowModal }}>
      {children}
    </modalContext.Provider>
  );
};
