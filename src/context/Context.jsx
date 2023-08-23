import { createContext } from "react";

export const Context = createContext({
  showLoginBox: Boolean,
  setShowLoginBox: () => {},
  loginBoxShowed: Boolean,
  setLoginBoxShowed: () => {},
});
