import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  bgGradient: string;
  paddingToTop?: boolean;
}

export default function SectionBackground({
  bgGradient,
  paddingToTop,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Box
      width={"100%"}
      p={{
        xs: "0rem 0rem 5rem 0rem",
        md: paddingToTop ? "10rem 0rem" : "0rem 0rem 10rem 0rem",
      }}
      sx={{
        backgroundImage: bgGradient,
      }}
      display={"flex"}
      justifyContent={"center"}
    >
      {children}
    </Box>
  );
}
