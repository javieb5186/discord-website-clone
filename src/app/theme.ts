"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    // Breakpoints for getMedia and MUI to use
    values: {
      xs: 0,
      sm: 477,
      md: 767,
      lg: 992,
      xl: 1536,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, // disable default MUI behavior for all buttons
      },
    },
  },
});

export default theme;
