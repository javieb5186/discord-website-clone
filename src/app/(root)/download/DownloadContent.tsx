"use client";
import { useContext } from "react";
import { ScreenContext } from "store/ScreenContext";
import {
  Box,
  Stack,
  Link,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { RBox } from "globalComponents";
import IOSPhoneIcon from "icons/IOSPhoneIcon";
import AndroidPhoneIcon from "icons/AndroidPhoneIcon";
import MacLaptopIcon from "icons/MacLaptopIcon";
import WindowsLaptopIcon from "icons/WindowsLaptopIcon";
import LinuxDesktopIcon from "icons/LinuxDesktopIcon";
import MenuButton from "./MenuButton";
import useTextByDevice from "hooks/useTextByDevice";

export default function DownloadContent() {
  const { tablet, mobile } = useContext(ScreenContext);
  const { name } = useTextByDevice();

  interface Device {
    title: string;
    Element?: JSX.Element;
    downloadTypes?: string[];
    body?: string;
    buttonText?: string;
  }

  const allDevices = [
    {
      title: "iOS",
      Element: <IOSPhoneIcon width="100%" height="100%" />,
    },
    {
      title: "Android",
      Element: <AndroidPhoneIcon width="100%" height="100%" />,
    },
    {
      title: "Linux",
      Element: <LinuxDesktopIcon width="100%" height="100%" />,
      downloadTypes: ["deb", "tar.gz"],
    },
    {
      title: "Mac",
      Element: <MacLaptopIcon width="100%" />,
    },
    {
      title: "Windows",
      Element: <WindowsLaptopIcon width="100%" />,
    },
  ];

  const nonActiveDevices = allDevices.filter((device) => device.title !== name);

  const cards: Device[] = [
    ...nonActiveDevices,
    {
      title: "Feeling experimental?",
      body: "Try our Public Test Build and test new features before they launch.",
      buttonText: "Download Public Test Build",
      downloadTypes: ["Mac", "Linux deb", "Linux tar.gz", "Windows 64-bit"],
    },
    {
      title: "From the archives:",
      body: "Windows 32-bit users can download official, but unsupported clients here.",
      downloadTypes: ["Windows 32-bit (Available until July 15, 2024)"],
    },
  ];

  const evenCards = cards.filter((_, index) => index % 2 === 0);
  const oddCards = cards.filter((_, index) => index % 2 !== 0);

  const gridItems = [evenCards, oddCards];

  return (
    <RBox bgColor="white">
      {tablet || mobile ? (
        <Stack spacing={3} py={"5rem"}>
          {cards.map(({ title, Element, body, buttonText, downloadTypes }) => {
            return (
              <Stack spacing={2} key={title}>
                {!body ? (
                  <Card
                    sx={{
                      width: "100%",
                      height: "30rem",
                      backgroundColor: "#f6f6f6",
                      borderRadius: "1rem",
                    }}
                    key={title}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Stack
                        width={{ xs: "100%", md: "80%" }}
                        height={"100%"}
                        justifyContent={"center"}
                        textAlign={"center"}
                        spacing={2}
                      >
                        <CardHeader title={title} />
                        <Box display={"flex"} justifyContent={"center"}>
                          {downloadTypes ? (
                            <MenuButton menuItems={downloadTypes} />
                          ) : (
                            <Link
                              href=""
                              sx={{
                                p: "1rem",
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                borderRadius: "1rem",
                                height: "2rem",
                                color: "white",
                                backgroundColor: "black",
                              }}
                            >
                              Download
                            </Link>
                          )}
                        </Box>
                        <CardMedia
                          sx={{
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {Element}
                        </CardMedia>
                      </Stack>
                    </CardContent>
                  </Card>
                ) : (
                  <Card
                    sx={{
                      width: "100%",
                      height: "15rem",
                      backgroundColor: "#f6f6f6",
                      borderRadius: "1rem",
                      overflow: "visible",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignContent: "center",
                        height: "100%",
                      }}
                    >
                      <Stack
                        justifyContent={"center"}
                        textAlign={"left"}
                        spacing={2}
                      >
                        <CardHeader title={title} sx={{ paddingLeft: 0 }} />
                        <Typography>{body}</Typography>
                        <Box display={"flex"} justifyContent={"flex-start"}>
                          {downloadTypes && (
                            <MenuButton
                              width="100%"
                              buttonText={buttonText}
                              menuItems={downloadTypes}
                            />
                          )}
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                )}
              </Stack>
            );
          })}
        </Stack>
      ) : (
        <Grid container minHeight={"35rem"} columnSpacing={2} py={"5rem"}>
          <Grid item xs={6}>
            <Stack spacing={3}>
              {evenCards.map(
                (
                  { title, Element, body, buttonText, downloadTypes },
                  index
                ) => {
                  return (
                    <Stack spacing={2} key={title}>
                      {!body ? (
                        <Card
                          sx={{
                            width: "100%",
                            height: "30rem",
                            backgroundColor: "#f6f6f6",
                            borderRadius: "1rem",
                          }}
                          key={title}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100%",
                            }}
                          >
                            <Stack
                              width={index === 0 ? "80%" : "100%"}
                              justifyContent={"center"}
                              textAlign={"center"}
                              spacing={2}
                            >
                              <CardHeader title={title} />
                              <Box display={"flex"} justifyContent={"center"}>
                                {downloadTypes ? (
                                  <MenuButton menuItems={downloadTypes} />
                                ) : (
                                  <Link
                                    href=""
                                    sx={{
                                      p: "1rem",
                                      display: "flex",
                                      alignItems: "center",
                                      textDecoration: "none",
                                      borderRadius: "1rem",
                                      height: "2rem",
                                      color: "white",
                                      backgroundColor: "black",
                                    }}
                                  >
                                    Download
                                  </Link>
                                )}
                              </Box>
                              <CardMedia
                                sx={{
                                  overflow: "hidden",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {Element}
                              </CardMedia>
                            </Stack>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card
                          sx={{
                            width: "100%",
                            height: "15rem",
                            backgroundColor: "#f6f6f6",
                            borderRadius: "1rem",
                            overflow: "visible",
                          }}
                        >
                          <CardContent>
                            <Stack
                              justifyContent={"center"}
                              textAlign={"left"}
                              spacing={2}
                            >
                              <CardHeader
                                title={title}
                                sx={{ paddingLeft: 0 }}
                              />
                              <Typography>{body}</Typography>
                              {downloadTypes && (
                                <MenuButton
                                  width="100%"
                                  buttonText={buttonText}
                                  menuItems={downloadTypes}
                                />
                              )}
                            </Stack>
                          </CardContent>
                        </Card>
                      )}
                    </Stack>
                  );
                }
              )}
            </Stack>
          </Grid>
          <Grid item xs={6} mt={"15rem"}>
            <Stack spacing={2}>
              {oddCards.map(
                (
                  { title, Element, body, buttonText, downloadTypes },
                  index
                ) => {
                  return (
                    <Stack spacing={2} key={title}>
                      {!body ? (
                        <Card
                          sx={{
                            width: "100%",
                            height: "30rem",
                            backgroundColor: "#f6f6f6",
                            borderRadius: "1rem",
                          }}
                          key={title}
                        >
                          <CardContent
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              height: "100%",
                            }}
                          >
                            <Stack
                              width={index === 0 ? "80%" : "100%"}
                              justifyContent={"center"}
                              textAlign={"center"}
                              spacing={2}
                            >
                              <CardHeader title={title} />
                              <Box display={"flex"} justifyContent={"center"}>
                                {downloadTypes ? (
                                  <MenuButton menuItems={downloadTypes} />
                                ) : (
                                  <Link
                                    href=""
                                    sx={{
                                      p: "1rem",
                                      display: "flex",
                                      alignItems: "center",
                                      textDecoration: "none",
                                      borderRadius: "1rem",
                                      height: "2rem",
                                      color: "white",
                                      backgroundColor: "black",
                                    }}
                                  >
                                    Download
                                  </Link>
                                )}
                              </Box>
                              <CardMedia
                                sx={{
                                  overflow: "hidden",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {Element}
                              </CardMedia>
                            </Stack>
                          </CardContent>
                        </Card>
                      ) : (
                        <Card
                          sx={{
                            width: "100%",
                            height: "15rem",
                            backgroundColor: "#f6f6f6",
                            borderRadius: "1rem",
                            overflow: "visible",
                          }}
                        >
                          <CardContent>
                            <Stack justifyContent={"center"} spacing={2}>
                              <CardHeader
                                title={title}
                                sx={{ paddingLeft: 0 }}
                              />
                              <Typography>{body}</Typography>
                              {downloadTypes && (
                                <MenuButton
                                  width="100%"
                                  buttonText={buttonText}
                                  menuItems={downloadTypes}
                                />
                              )}
                            </Stack>
                          </CardContent>
                        </Card>
                      )}
                    </Stack>
                  );
                }
              )}
            </Stack>
          </Grid>
        </Grid>
      )}
    </RBox>
  );
}
