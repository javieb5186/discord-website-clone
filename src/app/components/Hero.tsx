// A hero section to be rendered for the root route

"use client";
import { useState, useEffect } from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import { isWindows, isMacOs } from "react-device-detect";
import { SimpleButton } from "globalComponents";
import { RBox } from "globalComponents";
import AnimatedBg from "./AnimatedBg";
import AnimatedImages from "./AnimatedImages";
import useTextByDevice from "hooks/useTextByDevice";
import DownloadIcon from "icons/DownloadIcon";
import Image from "next/image";
import hero from "assets/hero-computer.webp";

// A function that will appear if desktop (Mac or Windows) is being used
function ComponentByDesktop() {
  return (
    <SimpleButton
      variant="contained"
      sx={{
        backgroundColor: "#161CBB",
        borderRadius: "2rem",
        height: "auto",
        maxWidth: "25rem",
        "&:hover": {
          backgroundColor: "#161CBB",
        },
      }}
    >
      <Box
        minHeight={"3rem"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
      >
        <Typography
          className="white-txt"
          fontSize={{ xs: "1rem", sm: "1.5rem" }}
        >
          Open Discord in your Browser
        </Typography>
      </Box>
    </SimpleButton>
  );
}

export default function Hero() {
  const initialValues = {
    component: <SimpleButton />,
    exists: false,
  };

  const [downloadText] = useTextByDevice();
  const [browserButton, setBrowserButton] = useState(initialValues);

  useEffect(() => {
    // If being used by desktop then render the component if exists
    // Set states in useEffect to avoid Hydration Error
    isMacOs || isWindows
      ? setBrowserButton({ component: <ComponentByDesktop />, exists: true })
      : setBrowserButton({
          component: <SimpleButton />,
          exists: false,
        });
  }, []);
  return (
    <RBox>
      <Stack
        minHeight={{ xs: "45rem", sm: "50rem" }}
        spacing={5}
        p={"5rem 0rem 10rem"}
      >
        <Grid container>
          <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
            <Stack
              height={"100%"}
              spacing={2}
              className="white-txt"
              justifyContent={"center"}
            >
              <Typography
                component={"h1"}
                textAlign={{ xs: "center", lg: "left" }}
                fontSize={{ xs: "1.5rem", sm: "2.25rem", lg: "3rem" }}
              >
                GROUP CHAT THAT'S ALL FUN & GAMES
              </Typography>
              <Typography
                fontSize={{ xs: "1rem", sm: "1.25rem", lg: "1.5rem" }}
                textAlign={{ xs: "center", lg: "left" }}
              >
                Discord is great for playing games and chilling with friends, or
                even building a worldwide community. Customize your own space to
                talk, play, and hang out.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            lg={7}
            order={{ xs: 1, lg: 2 }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Box
              position={"relative"}
              width={"800px"}
              height={{ xs: "300px", sm: "450px", lg: "600px" }}
            >
              <Image
                src={hero}
                alt="Unity through Discord"
                priority
                sizes="100%"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box display={"flex"} justifyContent={"center"}>
          <Stack direction={"row"} spacing={2} justifyContent={"center"}>
            <SimpleButton
              variant="contained"
              sx={{
                backgroundColor: "white",
                borderRadius: "2rem",
                height: "auto",
                maxWidth: "25rem",
                "&:hover": {
                  backgroundColor: "white",
                },
                "&:hover .download": {
                  color: "#5865f2",
                },
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                minHeight={"3rem"}
                alignItems={"center"}
              >
                <DownloadIcon width="1.25rem" className="black-fill" />
                <Typography
                  className="download black-txt"
                  fontSize={{ xs: "1rem", md: "1.25rem" }}
                >
                  {downloadText}
                </Typography>
              </Stack>
            </SimpleButton>
            {browserButton.exists && browserButton.component}
          </Stack>
        </Box>
      </Stack>
      <AnimatedBg />
      <AnimatedImages />
    </RBox>
  );
}
