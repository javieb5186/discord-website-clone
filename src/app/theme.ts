"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, // disable default MUI behavior for all buttons
      },
    },
  },
});

export default theme;
