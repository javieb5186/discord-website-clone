"use client";
import { useState, useEffect } from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import { isAndroid, isIOS, isWindows, isMacOs } from "react-device-detect";
import { SimpleButton } from "globalComponents";
import { RBox } from "globalComponents";
import DownloadIcon from "icons/DownloadIcon";
import Image from "next/image";
import hero from "assets/hero-computer.webp";

export default function Hero() {
  function textByDevice() {
    let text = "Download";
    isAndroid && (text = "Download from Google Play");
    isIOS && (text = "Download from App Store");
    isWindows && (text = "Download for Windows");
    isMacOs && (text = "Download for Mac");
    return text;
  }

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

  interface Initial {
    component?: JSX.Element;
    exists?: boolean;
  }

  const initialValues: Initial = {
    component: <SimpleButton />,
    exists: false,
  };

  const [downloadText, setDownloadText] = useState("Download");
  const [BrowserButton, setBrowserButton] = useState(initialValues);

  useEffect(() => {
    // Set states in useEffect to avoid Hydration Error
    setDownloadText(textByDevice());
    isMacOs || isWindows
      ? setBrowserButton({ component: <ComponentByDesktop />, exists: true })
      : setBrowserButton({
          component: <SimpleButton />,
          exists: false,
        });
  }, []);
  return (
    <RBox bgGradient="radial-gradient(at 100% 100%, #3255eb, #000027)">
      <Stack minHeight={{ xs: "45rem", sm: "50rem" }} spacing={5} py={10}>
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
                as="image"
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
                <DownloadIcon width="1.5rem" className="black-fill" />
                <Typography
                  className="download black-txt"
                  fontSize={{ xs: "1.25rem", sm: "1.5rem" }}
                >
                  {downloadText}
                </Typography>
              </Stack>
            </SimpleButton>
            {BrowserButton.exists && BrowserButton.component}
          </Stack>
        </Box>
      </Stack>
    </RBox>
  );
}
