import { Box, Stack, Typography } from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import { UnleashLeft, UnleashRight, TwoSparkles } from "./svgs";

export default function Banner() {
  return (
    <Box
      position="relative"
      sx={{ backgroundImage: "linear-gradient(to left, #ab5b8e, #8b46c3)" }}
    >
      <Box
        display={{ xs: "none", lg: "flex" }}
        position="absolute"
        left={0}
        top={0}
        bottom={0}
        my="auto"
        alignItems="center"
      >
        <UnleashLeft />
      </Box>
      <Box
        display={{ xs: "none", lg: "flex" }}
        position="absolute"
        right={0}
        top={0}
        bottom={0}
        my="auto"
        alignItems="center"
      >
        <UnleashRight />
      </Box>
      <RBox>
        <Box position="relative">
          <Box
            display={{ xs: "block", lg: "none" }}
            position="absolute"
            right={0}
            left={0}
            top={0}
            mx="auto"
            justifyContent="center"
          >
            <TwoSparkles />
          </Box>
        </Box>
        <Stack
          height={{ xs: "15rem", lg: "30rem" }}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          spacing={3}
        >
          <Typography
            component="h2"
            className="white-txt"
            fontSize={{ xs: "1.5rem", sm: "2rem", md: "2rem", lg: "2.5rem" }}
          >
            Unleash the fun with Nitro
          </Typography>
          <SimpleButton
            variant="contained"
            sx={{
              height: { xs: "2rem", md: "4rem" },
              borderRadius: { xs: "1rem", md: "2rem" },
              backgroundColor: "white",
            }}
          >
            <Typography
              className="black-txt"
              mx={"1rem"}
              fontSize={{ lg: "2rem" }}
            >
              Subscribe
            </Typography>
          </SimpleButton>
        </Stack>
      </RBox>
    </Box>
  );
}
