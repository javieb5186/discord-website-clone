// A link that looks like a button using MUI
// Accepts a color and background color

"use client";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SimpleButton = styled(Button)({
  textTransform: "none",
  borderRadius: "1rem",
  height: "2rem",
});
