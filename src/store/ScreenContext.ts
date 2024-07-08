import { createContext } from "react";

export const ScreenContext = createContext({
  desktop: true,
  laptop: false,
  tablet: false,
  mobile: false,
});
