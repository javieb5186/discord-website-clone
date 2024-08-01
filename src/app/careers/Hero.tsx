import { Box, Stack, Typography, Grid } from "@mui/material";
import { RBox } from "globalComponents";
import careerHero from "./assets/career-hero.webp";
import bottomLeft from "./assets/bottom-left.webp";
import bottomRight from "./assets/bottom-right.webp";
import topRight from "./assets/top-right.webp";
import topLeft from "./assets/top-left.webp";

export default function Hero() {
  return (
    <Box className="brand-bg">
      <RBox>
        <Box display="flex" justifyContent="center">
          <Stack
            width="100%"
            mt={{ xs: "5rem", md: "6rem", lg: "10rem" }}
            mb={{ xs: "3rem", md: "3rem", lg: "15rem" }}
            minHeight="40rem"
            justifyContent="center"
            className="white-txt"
            spacing={{ xs: "2rem", md: "6rem", lg: "10rem" }}
          >
            <Stack spacing={"2rem"} textAlign="center" alignItems="center">
              <Typography
                component="h1"
                fontSize={{
                  xs: "2rem",
                  sm: "3rem",
                  md: "4rem",
                }}
              >
                WORK AT DISCORD
              </Typography>
              <Typography>
                Discord is home to (com) passionate people who believe in our
                mission of creating space for everyone to find belonging.
              </Typography>
            </Stack>
            <Box
              width={"100%"}
              display="flex"
              justifyContent="center"
              position={"relative"}
            >
              <Box display={{ xs: "none", lg: "block" }}>
                <Box
                  position="absolute"
                  top={-50}
                  left={-100}
                  height={{ md: "15rem", lg: "20rem" }}
                  width={{ md: "20rem", lg: "25rem" }}
                  borderRadius={"1rem"}
                  overflow={"clip"}
                >
                  <img
                    src={topLeft.src}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{
                      transform: "scale(1.3)",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Box
                  position="absolute"
                  top={-60}
                  right={-20}
                  height={{ md: "10rem", lg: "15rem" }}
                  width={{ md: "15rem", lg: "20rem" }}
                  borderRadius={"1rem"}
                  overflow={"clip"}
                >
                  <img
                    src={topRight.src}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{
                      transform: "scale(1.3)",
                      objectFit: "contain",
                    }}
                  />
                </Box>
                <Box
                  position="absolute"
                  bottom={-130}
                  left={60}
                  height={{ md: "5rem", lg: "10rem" }}
                  width={{ md: "10rem", lg: "15rem" }}
                  borderRadius={"1rem"}
                  overflow={"clip"}
                >
                  <img
                    src={bottomLeft.src}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{
                      transform: "scale(1.3)",
                      objectFit: "contain",
                      objectPosition: "50% 50%",
                    }}
                  />
                </Box>
                <Box
                  position="absolute"
                  bottom={-140}
                  right={-20}
                  height={{ md: "10rem", lg: "15rem" }}
                  width={{ md: "15rem", lg: "20rem" }}
                  borderRadius={"1rem"}
                  overflow={"clip"}
                  justifySelf="center"
                >
                  <img
                    src={bottomRight.src}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{
                      transform: "scale(1.3)",
                      objectFit: "contain",
                      objectPosition: "50% 50%",
                    }}
                  />
                </Box>
              </Box>
              <Box
                height={{ xs: "20rem", sm: "25rem", md: "30rem", lg: "35rem" }}
                width={{ xs: "25rem", sm: "30rem", md: "35rem", lg: "40rem" }}
                borderRadius={"1rem"}
                overflow={"clip"}
              >
                <img
                  src={careerHero.src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{
                    transform: "scale(1.4)",
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          display={{ xs: "none", md: "flex", lg: "none" }}
          justifyContent="center"
        >
          <Grid container mb={"3rem"} width={"80%"}>
            <Grid item xs={5} height={"20rem"}>
              <Box width={"100%"} height={"100%"}>
                <Box
                  height={"15rem"}
                  width={"20rem"}
                  borderRadius={"1rem"}
                  overflow={"clip"}
                >
                  <img
                    src={topLeft.src}
                    alt=""
                    width={"100%"}
                    height={"100%"}
                    style={{
                      transform: "scale(1.3)",
                      objectFit: "contain",
                      objectPosition: "50% 50%",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={7}
              display="flex"
              height={"20rem"}
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Box
                height={"10rem"}
                width={"15rem"}
                borderRadius={"1rem"}
                overflow={"clip"}
              >
                <img
                  src={topRight.src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{
                    transform: "scale(1.3)",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              height={"15rem"}
              display="flex"
              justifyContent="flex-end"
            >
              <Box
                height={"5rem"}
                width={"10rem"}
                borderRadius={"1rem"}
                overflow={"clip"}
              >
                <img
                  src={bottomLeft.src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{
                    transform: "scale(1.3)",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={8}
              height={"15rem"}
              display="flex"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Box
                height={"12rem"}
                width={"17rem"}
                borderRadius={"1rem"}
                overflow={"clip"}
              >
                <img
                  src={bottomRight.src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{
                    transform: "scale(1.3)",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </RBox>
    </Box>
  );
}
