// A MUI box that is responsive
// Can accept a background color

"use client";
import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";
import { ScreenContext } from "store/ScreenContext";
import { useContext } from "react";

interface Props {
  bgColor?: string;
}

export function RBox({ bgColor, children }: PropsWithChildren<Props>) {
  const desktop = useContext(ScreenContext);
  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <Container className={desktop ? "desktop-screen" : "mobile-screen"}>
        {children}
      </Container>
    </Box>
  );
}
