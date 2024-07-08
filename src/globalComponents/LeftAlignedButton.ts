"use client";
import { SimpleButton } from "./SimpleButton";
import { styled } from "@mui/material/styles";

export const LeftAlignedButton = styled(SimpleButton)({
  textAlign: "left",
  padding: "0.25em 0em",
  minWidth: "32px",
  color: "black",
  justifyContent: "flex-start",
});
