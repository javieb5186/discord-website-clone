"use client";
import { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SubCards from "./SubCards";
import { RBox, SimpleButton } from "globalComponents";
import { perks } from "./data";

export default function Perks() {
  const popularPerks = perks.filter((perk) => !perk.body);
  const otherPerks = perks.filter((perk) => perk.body);

  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <RBox bgColor="white">
      <SubCards />
      <Typography
        variant="h2"
        component="h1"
        mt={{ xs: "30rem", lg: "20rem" }}
        mb="2rem"
        textAlign="center"
      >
        Popular Nitro Perks
      </Typography>
      <Grid container spacing={2}>
        {popularPerks.map(({ id, title, Svg }) => {
          return (
            <Grid key={id} item xs={12} lg={6}>
              <Box
                width="100%"
                height="24rem"
                borderRadius="1rem"
                sx={{ backgroundColor: "whitesmoke" }}
              >
                <Stack
                  spacing={1}
                  height="100%"
                  px={{ xs: "2rem", md: "6rem" }}
                  py="2rem"
                  textAlign="center"
                >
                  <Typography
                    height="40%"
                    fontSize={{ xs: "1.25rem", md: "1.5rem" }}
                  >
                    {title}
                  </Typography>
                  <Box width="100%" height="60%">
                    <Svg />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Box
        width="100%"
        mt={2}
        position="relative"
        overflow="hidden"
        className={display ? "show-other-perks" : "hide-other-perks"}
      >
        <Grid container spacing={2}>
          {otherPerks.map(({ id, title, body, Svg }) => {
            return (
              <Grid key={id} item xs={12} sm={6} lg={4}>
                <Box
                  width="100%"
                  height="20rem"
                  borderRadius="1rem"
                  sx={{ backgroundColor: "whitesmoke" }}
                >
                  <Stack
                    spacing={1}
                    height="100%"
                    px={{ xs: "1rem", md: "5rem" }}
                    py="2rem"
                    textAlign="center"
                  >
                    <Box width="100%" height="50%">
                      <Svg />
                    </Box>
                    <Typography
                      height="20%"
                      fontSize="1.1rem"
                      alignContent="center"
                    >
                      {title}
                    </Typography>
                    <Typography height="30%" fontSize=".9rem">
                      {body}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt={2} mb="5rem">
        <SimpleButton
          variant="contained"
          className="important-black-bg white-txt"
          onClick={handleDisplay}
        >
          {display ? "Show less perks" : "Show all perks"}
        </SimpleButton>
      </Box>
    </RBox>
  );
}
