// Function that gets the media based on the breakpoints provided by the theme.

"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "app/theme";

export default function getMedia() {
  const mobile = useMediaQuery(theme.breakpoints.up("xs"));
  const tablet = useMediaQuery(theme.breakpoints.up("sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  const isMobile = mobile && !tablet && !desktop;
  const isTablet = mobile && tablet && !desktop;
  const isDesktop = mobile && tablet && desktop;

  return { mobile: isMobile, tablet: isTablet, desktop: isDesktop };
}
