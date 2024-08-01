// Function that gets the media based on the breakpoints provided by the theme.

"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "./theme";

export default function getMedia() {
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const laptop = useMediaQuery(theme.breakpoints.up("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  const isMobile = mobile && !tablet && !laptop && !desktop;
  const isTablet = mobile && tablet && !laptop && !desktop;
  const isLaptop = mobile && tablet && laptop && !desktop;
  const isDesktop = mobile && tablet && laptop && desktop;

  return {
    mobile: isMobile,
    tablet: isTablet,
    laptop: isLaptop,
    desktop: isDesktop,
  };
}
