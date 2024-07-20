import { Box, Stack, Grid, Typography, Divider } from "@mui/material";
import { SimpleButton } from "globalComponents";
import { RBox } from "globalComponents";
import CheckmarkIcon from "icons/CheckmarkIcon";
import XMarkIcon from "icons/XMarkIcon";

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
        <Stack position="relative" width="90%">
          <Typography
            component="h2"
            variant="h2"
            textAlign="center"
            my="3rem"
            px="13rem"
          >
            Pick the plan that works best for you
          </Typography>
          <Grid container marginBottom="1rem">
            <Grid item xs>
              <Typography component="h4" variant="h4">
                Feature
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Stack textAlign="center">
                <Typography component="h4" variant="h4" width="10rem">
                  Nitro
                </Typography>
                <Typography>Basic</Typography>
              </Stack>
            </Grid>
            <Grid item xs="auto" position="relative">
              <Typography
                textAlign="center"
                component="h4"
                variant="h4"
                width="10rem"
              >
                Nitro
              </Typography>
              <Box
                position="absolute"
                top="-1.25rem"
                left={0}
                right={0}
                border="1px solid red"
                borderRadius="1rem"
              >
                <Box width="10rem" height="75rem" position="relative"></Box>
              </Box>
              <Typography
                textAlign="center"
                position="absolute"
                width="8rem"
                top="-2rem"
                left={0}
                right={0}
                margin="0 auto"
                borderRadius=".25rem"
                sx={{ backgroundColor: "pink" }}
                fontSize=".75rem"
              >
                Most Popular
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ marginBottom: "1rem" }} />
          <Stack spacing="1rem" marginBottom="3rem" divider={<Divider />}>
            {features.map(({ id, description, compare1, compare2 }) => {
              const comparisons = [compare1, compare2];
              return (
                <Grid container key={id}>
                  <Grid item xs>
                    <Typography>{description}</Typography>
                  </Grid>
                  {comparisons.map((compare, index) => {
                    return (
                      <Grid key={index} item xs="auto" textAlign="center">
                        {typeof compare === "boolean" ? (
                          <Box
                            width="10rem"
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
                          <Typography width="10rem">{compare}</Typography>
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs="auto">
                <Box display="flex" justifyContent="center" width="10rem">
                  <SimpleButton variant="contained" sx={{ fontSize: ".75rem" }}>
                    Subscribe Basic
                  </SimpleButton>
                </Box>
              </Grid>
              <Grid item xs="auto">
                <Box display="flex" justifyContent="center" width="10rem">
                  <SimpleButton variant="contained" sx={{ fontSize: ".75rem" }}>
                    Subscribe Nitro
                  </SimpleButton>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </RBox>
  );
}
