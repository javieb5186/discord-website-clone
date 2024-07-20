"use client";
import { useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import SubCards from "./SubCards";
import { RBox, SimpleButton } from "globalComponents";

export default function Perks() {
  const perks = [
    {
      id: 1,
      title: "From clips to pics, share away with bigger file uploads",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 2,
      title: "Stream apps and games in sweet, sweet HD",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 3,
      title: "Hype and meme with custom emoji anywhere",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 4,
      title: "Unlock perks for your communities with 2 Server Boosts",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 5,
      title: "Color Themes",
      body: "Add your vibe to Discord with unique theme colors.",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 6,
      title: "Special Shop Perks",
      body: "Enjoy member pricing plus Nitro exclusive items in the Shop.",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 7,
      title: "Custom Profiles",
      body: "Use a different avatar, profile theme, banner, and bio in each of your servers.",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 8,
      title: "Custom Sounds Everywhere",
      body: "Use custom sounds and personalized entrance sounds across voice channels.",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 9,
      title: "Unlimited Super Reactions",
      body: "Hype up the chat with action-packed, animated reactions.",
      svg: {
        src: "",
        alt: "",
      },
    },
    {
      id: 10,
      title: "More Backgrounds",
      body: "Customize video calls with your own video backgrounds.",
      svg: {
        src: "",
        alt: "",
      },
    },
  ];

  const popularPerks = perks.filter((perk) => !perk.body);
  const otherPerks = perks.filter((perk) => perk.body);

  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <RBox bgColor="white">
      <SubCards />
      <Typography
        variant="h2"
        component="h1"
        mt={{ xs: "30rem", lg: "15rem" }}
        mb="2rem"
        textAlign="center"
      >
        Popular Nitro Perks
      </Typography>
      <Grid container spacing={2}>
        {popularPerks.map(({ id, title }) => {
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
                  px="6rem"
                  py="2rem"
                  textAlign="center"
                >
                  <Typography height="40%" fontSize="1.75rem">
                    {title}
                  </Typography>
                  <Box
                    width="100%"
                    height="60%"
                    sx={{ backgroundColor: "lightgray" }}
                  ></Box>
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
          {otherPerks.map(({ id, title, body }) => {
            return (
              <Grid key={id} item xs={6} lg={4}>
                <Box
                  width="100%"
                  height="20rem"
                  borderRadius="1rem"
                  sx={{ backgroundColor: "whitesmoke" }}
                >
                  <Stack
                    spacing={1}
                    height="100%"
                    px="5rem"
                    py="2rem"
                    textAlign="center"
                  >
                    <Box
                      width="100%"
                      height="50%"
                      sx={{ backgroundColor: "lightgray" }}
                    ></Box>
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
          onClick={handleClick}
        >
          {display ? "Show less perks" : "Show all perks"}
        </SimpleButton>
      </Box>
    </RBox>
  );
}
