import { Suspense } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import { DownloadIcon } from "icons";
import getActiveDeviceText from "utils/getActiveDeviceText";
import SvgByDevice from "./SvgByDevice";

export default async function Hero() {
  const activeDevice = await getActiveDeviceText();

  return (
    <RBox bgColor="#23272a">
      <Box
        paddingTop={{ xs: "7rem", md: "5rem" }}
        minHeight={"40rem"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Grid container columnSpacing={{ xs: 0, md: 3 }}>
          <Grid item xs={12} sm={"auto"} md={6}>
            <Stack
              height={"100%"}
              width={{ xs: "100%", sm: "20rem", md: "100%" }}
              className="white-txt"
              justifyContent={"center"}
              spacing={3}
            >
              <Typography
                className="fade-in"
                fontSize={{
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                }}
                paddingRight={{ xs: "1rem", sm: "2rem", md: "3rem" }}
                component={"h1"}
              >
                GET DISCORD FOR ANY DEVICE
              </Typography>
              <Typography
                className="fade-in"
                fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.3rem" }}
              >
                An adventure awaits. Hang out with your friends on our desktop
                app and keep the conversation going on mobile.
              </Typography>
              <Stack
                direction={{ xs: "column", md: "row" }}
                width={"100%"}
                height={"auto"}
                alignItems={{ md: "center" }}
                spacing={2}
                flexWrap={{ xs: "nowrap", md: "wrap" }}
                useFlexGap
              >
                <Box>
                  <SimpleButton
                    variant="contained"
                    className="important-brang-bg"
                    sx={{ height: "4rem", borderRadius: "2rem" }}
                  >
                    <Stack
                      direction={"row"}
                      alignContent={"center"}
                      spacing={1}
                    >
                      <DownloadIcon width="1.2rem" color="white" />
                      <Typography
                        className="white-txt"
                        fontSize={{ xs: "1rem", md: "1.2rem" }}
                      >
                        {activeDevice.text.button}
                      </Typography>
                    </Stack>
                  </SimpleButton>
                </Box>
                <Typography className="fade-in">
                  {activeDevice.text.requirement} or higher
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={6}
            overflow={"visible"}
            paddingBottom={"5rem"}
            paddingTop={"2rem"}
          >
            <Box
              width={{ xs: "100%", sm: "25rem", md: "100%" }}
              height={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              className="fade-in"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <img
                  src={SvgByDevice()}
                  alt=""
                  width={
                    activeDevice.text.name === "iOS" ||
                    activeDevice.text.name === "Android"
                      ? "75%"
                      : "100%"
                  }
                />
              </Suspense>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </RBox>
  );
}
