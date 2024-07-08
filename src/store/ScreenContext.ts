// Context that is meant to have same breakpoints as theme

import { createContext } from "react";

export const ScreenContext = createContext({
  desktop: true,
  laptop: false,
  tablet: false,
  mobile: false,
});
