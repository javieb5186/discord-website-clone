// A link with a simple style using MUI
// Accepts a color

"use client";

import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SimpleLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});
