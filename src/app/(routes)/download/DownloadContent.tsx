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
import { RBox, SimpleButton } from "globalComponents";
import { mac, windows, linux, iphone, android } from "./assets";
import detectDevice from "utils/detectDevice";
import { PropsWithChildren } from "react";
import LinuxButton from "./LinuxButton";
import ExperimentButton from "./ExperimentButton";
import ArchiveButton from "./ArchiveButton";

interface Device {
  id: number;
  title: string;
  active?: boolean;
  svg?: string;
  body?: string;
  buttonText?: string;
  MenuButton?: JSX.Element;
  downloadTypes?: boolean;
}

interface Props {
  href?: string;
}

function CustomLink({ href, children }: PropsWithChildren<Props>) {
  return (
    <Link
      href={href}
      sx={{
        p: "1rem",
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        borderRadius: "1rem",
        height: "2rem",
        color: "white",
        backgroundColor: "black",
        textTransform: "none",
      }}
    >
      {children}
    </Link>
  );
}

export default async function DownloadContent() {
  const { isIOS, isAndroid, isMacOs, isWindows } = detectDevice();

  const allDevices: Device[] = [
    {
      id: 1,
      title: "iOS",
      svg: iphone.src,
      active: isIOS,
    },
    {
      id: 2,
      title: "Android",
      svg: android.src,
      active: isAndroid,
    },
    {
      id: 3,
      title: "Linux",
      svg: linux.src,
      MenuButton: <LinuxButton />,
      downloadTypes: true,
      active: !isWindows && !isMacOs && !isAndroid && !isIOS,
    },
    { id: 4, title: "Mac", svg: mac.src, active: isMacOs },
    {
      id: 5,
      title: "Windows",
      svg: windows.src,
      active: isWindows,
    },
  ];

  const nonActiveDevices = allDevices.filter(
    (device) => device.active !== true
  );

  const cards: Device[] = [
    ...nonActiveDevices,
    {
      id: 6,
      title: "Feeling experimental?",
      body: "Try our Public Test Build and test new features before they launch.",
      buttonText: "Download Public Test Build",
      downloadTypes: true,
      MenuButton: <ExperimentButton />,
    },
    {
      id: 7,
      title: "From the archives:",
      body: "Windows 32-bit users can download official, but unsupported clients here.",
      buttonText: "Download",
      downloadTypes: true,
      MenuButton: <ArchiveButton />,
    },
  ];

  const evenCards = cards.filter((_, index) => index % 2 === 0);
  const oddCards = cards.filter((_, index) => index % 2 !== 0);

  const gridItems = [evenCards, oddCards];

  return (
    <RBox bgColor="white">
      <Stack spacing={3} py={"5rem"} display={{ xs: "flex", md: "none" }}>
        {cards.map(({ title, svg, body, MenuButton, downloadTypes }) => {
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
                          <>{MenuButton}</>
                        ) : (
                          <CustomLink href="">Download</CustomLink>
                        )}
                      </Box>
                      <CardMedia
                        sx={{
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {svg && <img src={svg} alt="" width={"100%"} />}
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
                      {downloadTypes ? (
                        <Box>{MenuButton}</Box>
                      ) : (
                        <CustomLink href="">Download</CustomLink>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              )}
            </Stack>
          );
        })}
      </Stack>
      <Grid
        container
        display={{ xs: "none", md: "flex" }}
        minHeight={"35rem"}
        columnSpacing={2}
        py={"5rem"}
      >
        {gridItems.map((cards, index) => {
          return (
            <Grid key={index} item xs={6} mt={index === 1 ? "15rem" : "0rem"}>
              <Stack spacing={3}>
                {cards.map(
                  ({ title, svg, body, downloadTypes, MenuButton }, index) => {
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
                                    <>{MenuButton}</>
                                  ) : (
                                    <CustomLink href="">Download</CustomLink>
                                  )}
                                </Box>
                                <CardMedia
                                  sx={{
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  {svg && (
                                    <img src={svg} alt="" width={"100%"} />
                                  )}
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
                                <Box
                                  display={"flex"}
                                  justifyContent={"flex-start"}
                                >
                                  {downloadTypes ? (
                                    <>{MenuButton}</>
                                  ) : (
                                    <CustomLink href="">Download</CustomLink>
                                  )}
                                </Box>
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
          );
        })}
      </Grid>
    </RBox>
  );
}
