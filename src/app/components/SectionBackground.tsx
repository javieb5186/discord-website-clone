import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

interface Props {
  bgGradient: string;
}

export default function SectionBackground({
  bgGradient,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Box
      width={"100%"}
      p={{ xs: "0rem 0rem 3rem 0rem", sm: "10rem 0rem" }}
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
