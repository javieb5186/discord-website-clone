// A hero section to be rendered for the root route

import { Suspense } from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
import { SimpleButton, RBox } from "globalComponents";
import { DownloadIcon } from "icons";
import AnimatedStars from "./AnimatedStars";
import AnimatedImages from "./AnimatedImages";
import Image from "next/image";
import { hero } from "../assets";
import HeroDeviceText from "./HeroDeviceText";

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
                GROUP CHAT THAT&apos;S ALL FUN & GAMES
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
                sizes="(min-width: 992px) 100vw, 50vw"
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
                <Suspense fallback={<div>Download</div>}>
                  <HeroDeviceText />
                </Suspense>
              </Stack>
            </SimpleButton>
            <Box display={{ xs: "none", lg: "block" }}>
              <ComponentByDesktop />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <AnimatedStars />
      <AnimatedImages />
    </RBox>
  );
}
