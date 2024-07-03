// A MUI box that is responsive
// Can accept a background color along with MUI props

"use client";
import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";
import { ScreenContext } from "store/ScreenContext";
import { useContext } from "react";
import { BoxProps } from "@mui/material";

interface Props {
  bgColor?: string;
  bgGradient?: string;
  boxProps?: BoxProps;
}

export function RBox({
  bgColor,
  bgGradient,
  boxProps,
  children,
}: PropsWithChildren<Props>) {
  const desktop = useContext(ScreenContext);
  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: bgColor, backgroundImage: bgGradient }}
      {...boxProps}
    >
      <Container className={desktop ? "desktop-screen" : "mobile-screen"}>
        {children}
      </Container>
    </Box>
  );
}
