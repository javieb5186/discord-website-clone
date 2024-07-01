"use client";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function getMedia() {
  const mobile = useMediaQuery("(min-width:0px)");
  const tablet = useMediaQuery("(min-width:600px)");
  const desktop = useMediaQuery("(min-width:992px)");

  const isMobile = mobile && !tablet && !desktop;
  const isTablet = mobile && tablet && !desktop;
  const isDesktop = mobile && tablet && desktop;

  return { mobile: isMobile, tablet: isTablet, desktop: isDesktop };
}
