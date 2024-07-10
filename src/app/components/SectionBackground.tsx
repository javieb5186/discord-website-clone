import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import groupOfStars from "assets/group-of-stars.webp";

interface Props {
  paddingToTop?: boolean;
}

export default function SectionBackground({
  paddingToTop,
  children,
}: PropsWithChildren<Props>) {
  return (
    <Box
      width={"100%"}
      position={"relative"}
      p={{
        xs: "0rem 0rem 8rem 0rem",
        md: paddingToTop ? "14rem 0rem" : "0rem 0rem 14rem 0rem",
      }}
      sx={{
        backgroundImage: `url(${groupOfStars.src})`,
        backgroundSize: "cover",
      }}
      display={"flex"}
      justifyContent={"center"}
    >
      {children}
    </Box>
  );
}
