import { Box, Stack, Typography } from "@mui/material";
import { RBox } from "globalComponents";
import HeroLeft from "./assets/HeroLeft";
import HeroRight from "./assets/HeroRight";
import heroBg from "./assets/discover-hero-bg.svg";

export default function Hero() {
  return (
    <Box
      position="relative"
      sx={{
        backgroundImage: `url(${heroBg.src})`,
        backgroundPosition: "50% 0%",
      }}
    >
      <Box
        display={{ xs: "none", lg: "block" }}
        position="absolute"
        bottom={0}
        left={0}
      >
        <HeroLeft />
      </Box>
      <Box
        display={{ xs: "none", lg: "block" }}
        position="absolute"
        bottom={0}
        right={0}
      >
        <HeroRight />
      </Box>
      <RBox boxProps={{ height: "400px" }}>
        <Box height={"100%"} display="flex" justifyContent="center">
          <Stack
            height={"100%"}
            width={{ xs: "100%", lg: "60%" }}
            spacing={1}
            textAlign={{ xs: "left", lg: "center" }}
            justifyContent="center"
          >
            <Typography
              component="h1"
              className="white-txt"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }}
            >
              Find your community on Discord
            </Typography>
            <Typography className="white-txt">
              From gaming, to music, to learning, there's a place for you.
            </Typography>
          </Stack>
        </Box>
      </RBox>
    </Box>
  );
}
