// A link that looks like a button using MUI
// Accepts a color and background color

"use client";

import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LinkButton = styled(Link)({
  textDecoration: "none",
  borderRadius: "1rem",
  padding: "8px 16px",
  height: "2rem",
});
