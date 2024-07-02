import { createContext } from "react";

export const ScreenContext = createContext({
  desktop: true,
  tablet: false,
  mobile: false,
});
