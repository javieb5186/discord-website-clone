"use client";
import { Fragment, useContext } from "react";
import { Box, Stack, Grid, Typography, Divider } from "@mui/material";
import { SimpleButton } from "globalComponents";
import { RBox } from "globalComponents";
import CheckmarkIcon from "icons/CheckmarkIcon";
import XMarkIcon from "icons/XMarkIcon";
import { ScreenContext } from "store/ScreenContext";

const features = [
  {
    id: 1,
    description: "Unlimited Super Reactions",
    compare1: true,
    compare2: true,
  },
  {
    id: 2,
    description: "Custom emoji anywhere and make them animated",
    compare1: true,
    compare2: true,
  },
  {
    id: 3,
    description: "Custom stickers anywhere",
    compare1: true,
    compare2: true,
  },
  {
    id: 4,
    description: "Custom App icons",
    compare1: true,
    compare2: true,
  },
  {
    id: 5,
    description: "Bigger File Sharing",
    compare1: "50MB",
    compare2: "500MB",
  },
  {
    id: 6,
    description: "HD streaming",
    compare1: false,
    compare2: "Up to 4K and 60fps",
  },
  {
    id: 7,
    description: "2 Free Boosts + 30% off extra Boosts",
    compare1: false,
    compare2: true,
  },
  {
    id: 8,
    description: "Animated avatar, banner, and profile theme",
    compare1: false,
    compare2: true,
  },
  {
    id: 9,
    description: "Early access to Clips",
    compare1: false,
    compare2: true,
  },
  {
    id: 10,
    description: "Custom Server Profiles",
    compare1: false,
    compare2: true,
  },
  {
    id: 11,
    description: "Nitro Badge on your profile",
    compare1: true,
    compare2: true,
  },
  {
    id: 12,
    description: "Custom Video Backgrounds",
    compare1: true,
    compare2: true,
  },
  {
    id: 13,
    description: "Join up to 200 servers",
    compare1: false,
    compare2: true,
  },
  {
    id: 14,
    description: "Longer messages up to 4,000 characters",
    compare1: false,
    compare2: true,
  },
  {
    id: 15,
    description: "Colors for you Discord Theme",
    compare1: false,
    compare2: true,
  },
  {
    id: 16,
    description: "Custom sounds anywhere",
    compare1: false,
    compare2: true,
  },
  {
    id: 17,
    description: "Personalized entrance sounds",
    compare1: false,
    compare2: true,
  },
  {
    id: 18,
    description: "Shop member pricing and exclusive items",
    compare1: false,
    compare2: true,
  },
];

export default function Plan() {
  const { laptop, desktop } = useContext(ScreenContext);
  return (
    <RBox bgColor="white">
      <Box
        width="100%"
        mb="10rem"
        minHeight="35rem"
        sx={{ backgroundColor: "lightgray", borderRadius: "1rem" }}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Stack width="90%">
          <Typography
            component="h2"
            fontSize={{ xs: "1.75rem", sm: "2.25rem", lg: "2.75rem" }}
            textAlign="center"
            my="3rem"
            px={{ xs: "0rem", lg: "13rem" }}
          >
            Pick the plan that works best for you
          </Typography>
          <Stack spacing="1rem" marginBottom="1rem" position="relative">
            <Box
              height="100%"
              position="absolute"
              top={0}
              right={0}
              border="1px solid #8b46c3"
              borderRadius="1rem"
              width={{ xs: "4rem", md: "10rem" }}
            >
              <Typography
                className="white-txt"
                display={{ xs: "none", md: "block" }}
                textAlign="center"
                position="absolute"
                width={{ xs: "4rem", md: "6rem" }}
                top="-.5rem"
                left={0}
                right={0}
                mx="auto"
                borderRadius=".4rem"
                sx={{
                  backgroundImage: "linear-gradient(to left, #ab5b8e, #8b46c3)",
                }}
                fontSize=".7rem"
              >
                Popular
              </Typography>
            </Box>
            <Grid container marginBottom="1rem">
              <Grid item xs>
                <Typography
                  display={{ xs: "none", md: "block" }}
                  component="h4"
                  fontSize={{ md: "1.5rem", lg: "2rem" }}
                >
                  Feature
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Stack textAlign="center">
                  <Typography
                    component="h4"
                    fontSize="2rem"
                    width="10rem"
                    display={{ xs: "none", md: "block" }}
                  >
                    Nitro
                  </Typography>
                  <Typography
                    fontSize={{ xs: "1.25rem", md: "1rem" }}
                    width={{ xs: "4rem", md: "10rem" }}
                  >
                    Basic
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs="auto" position="relative">
                <Typography
                  textAlign="center"
                  component="h4"
                  fontSize={{ xs: "1.25rem", md: "2rem" }}
                  width={{ xs: "4rem", md: "10rem" }}
                >
                  Nitro
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginBottom: "1rem" }} />
            {features.map(({ id, description, compare1, compare2 }) => {
              const comparisons = [compare1, compare2];
              return (
                <Fragment key={id}>
                  <Grid container>
                    <Grid item xs>
                      <Typography fontSize={{ xs: ".9rem", md: "1rem" }}>
                        {description}
                      </Typography>
                    </Grid>
                    {comparisons.map((compare, index) => {
                      return (
                        <Grid
                          key={index}
                          item
                          xs="auto"
                          textAlign="center"
                          alignContent="center"
                        >
                          {typeof compare === "boolean" ? (
                            <Box
                              width={{ xs: "4rem", md: "10rem" }}
                              display="flex"
                              justifyContent="center"
                            >
                              {compare ? (
                                <CheckmarkIcon width="1rem" />
                              ) : (
                                <XMarkIcon width="1rem" color="darkgray" />
                              )}
                            </Box>
                          ) : (
                            <Typography
                              fontSize={{ xs: ".8rem", md: "1rem" }}
                              width={{ xs: "4rem", md: "10rem" }}
                            >
                              {compare}
                            </Typography>
                          )}
                        </Grid>
                      );
                    })}
                  </Grid>
                  <Divider sx={{ marginBottom: "1rem" }} />
                </Fragment>
              );
            })}
          </Stack>
          <Grid container marginBottom="3rem">
            {laptop || desktop ? (
              <>
                <Grid item md></Grid>
                <Grid item md="auto" alignContent="center">
                  <Box
                    display="flex"
                    justifyContent="center"
                    width={{ xs: "100%", md: "10rem" }}
                  >
                    <SimpleButton
                      variant="contained"
                      sx={{ fontSize: ".75rem" }}
                    >
                      Subscribe Basic
                    </SimpleButton>
                  </Box>
                </Grid>
                <Grid item md="auto" alignContent="center">
                  <Box
                    display="flex"
                    justifyContent="center"
                    width={{ xs: "100%", md: "10rem" }}
                  >
                    <SimpleButton
                      variant="contained"
                      sx={{ fontSize: ".75rem" }}
                    >
                      Subscribe Nitro
                    </SimpleButton>
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={4}>
                  <Typography fontSize="2rem">Nitro</Typography>
                  <Typography>Basic</Typography>
                </Grid>
                <Grid item xs={8} md="auto" alignContent="center">
                  <Box
                    display="flex"
                    justifyContent="center"
                    width={{ xs: "100%", md: "10rem" }}
                  >
                    <SimpleButton
                      fullWidth
                      variant="contained"
                      sx={{ fontSize: ".75rem" }}
                    >
                      Subscribe Basic
                    </SimpleButton>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Stack>
                    <Typography fontSize="2rem">Nitro</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={8} md="auto" alignContent="center">
                  <Box
                    display="flex"
                    justifyContent="center"
                    width={{ xs: "100%", md: "10rem" }}
                  >
                    <SimpleButton
                      fullWidth
                      variant="contained"
                      sx={{ fontSize: ".75rem" }}
                    >
                      Subscribe Nitro
                    </SimpleButton>
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Stack>
      </Box>
    </RBox>
  );
}
