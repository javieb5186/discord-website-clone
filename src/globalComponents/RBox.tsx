// A MUI box that is responsive
// Can accept a background color along with MUI props

"use client";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { ScreenContext } from "store/ScreenContext";
import { useContext } from "react";
import { BoxProps } from "@mui/material";

interface Props {
  bgColor?: string;
  bgImage?: {
    backgroundImage: string;
    backgroundSize: string;
  };
  boxProps?: BoxProps;
}

export function RBox({
  bgColor,
  bgImage,
  boxProps,
  children,
}: PropsWithChildren<Props>) {
  const { desktop } = useContext(ScreenContext);
  return (
    <Box
      width={"100%"}
      position={"relative"}
      left={0}
      top={0}
      zIndex={2}
      display={"flex"}
      justifyContent={"center"}
      sx={{ ...bgImage, backgroundColor: bgColor }}
      {...boxProps}
    >
      <Box className={desktop ? "desktop-screen" : "mobile-screen"}>
        {children}
      </Box>
    </Box>
  );
}
