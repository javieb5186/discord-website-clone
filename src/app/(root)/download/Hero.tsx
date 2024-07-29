"use client";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { RBox } from "globalComponents";
import { SimpleButton } from "globalComponents";
import { isAndroid, isIOS, isWindows, isMacOs } from "react-device-detect";
import useTextByDevice from "hooks/useTextByDevice";
import DownloadIcon from "icons/DownloadIcon";
import MacLaptopIcon from "icons/MacLaptopIcon";
import WindowsLaptopIcon from "icons/WindowsLaptopIcon";
import LinuxDesktopIcon from "icons/LinuxDesktopIcon";
import AndroidPhoneIcon from "icons/AndroidPhoneIcon";
import IOSPhoneIcon from "icons/IOSPhoneIcon";
import { useEffect, useState } from "react";

function Device() {
  // Possible detectable devices and their component
  const possibleDevices = [
    { Element: <MacLaptopIcon width="100%" />, active: isMacOs },
    { Element: <WindowsLaptopIcon width="100%" />, active: isWindows },
    {
      Element: <AndroidPhoneIcon width="50%" height="50%" />,
      active: isAndroid,
    },
    { Element: <IOSPhoneIcon width="50%" height="50%" />, active: isIOS },
    {
      Element: <LinuxDesktopIcon width="100%" />,
      active: !isWindows && !isMacOs && !isAndroid && !isIOS,
    },
  ];

  // Look for active device and reduce it to one final component
  const ActiveDevice: JSX.Element = possibleDevices.reduce(
    (acc, device): JSX.Element => {
      return device.active ? (acc = device.Element) : acc;
    },
    <></>
  );

  return ActiveDevice;
}

export default function Hero() {
  const { buttonText, requirementText } = useTextByDevice();
  const [DeviceIcon, setDeviceIcon] = useState(<></>);

  useEffect(() => {
    setDeviceIcon(Device);
  }, []);

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
                        {buttonText}
                      </Typography>
                    </Stack>
                  </SimpleButton>
                </Box>
                <Typography className="fade-in">
                  {`${requirementText} or higher`}
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
              {DeviceIcon}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </RBox>
  );
}
