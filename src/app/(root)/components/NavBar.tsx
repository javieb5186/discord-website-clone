// A NavBar component to be used across routes
// Drawer base component courtesy of MUI main docs

"use client";
import { useState } from "react";
import {
  Stack,
  Grid,
  Button,
  Box,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";
import { LinkButton, SimpleButton, RBox, LogoAndTitle } from "globalComponents";
import { links, safetyLinks } from "../data";
import {
  MenuIcon,
  CloseIcon,
  DownloadIcon,
  BackArrowIcon,
  ForwardArrowIcon,
} from "icons";
import Link from "next/link";

interface Props {
  safety: boolean;
  handleSafety: (toggle: boolean) => void;
  handleDrawer: (toggle: boolean) => void;
}

function MainDrawer({ safety, handleSafety, handleDrawer }: Props) {
  return (
    <Box
      width={{ xs: 250, md: 350 }}
      sx={{ padding: "1rem" }}
      role="presentation"
    >
      <Stack height={"100vh"} spacing={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Change Top of Drawer when safety is toggled */}
          {safety ? (
            <SimpleButton onClick={() => handleSafety(false)}>
              <Stack direction={"row"} spacing={1}>
                <BackArrowIcon width="1rem" color="black" />
                <Typography className="black-txt">Back</Typography>
              </Stack>
            </SimpleButton>
          ) : (
            <LogoAndTitle color="black" />
          )}
          <Button
            onClick={() => handleDrawer(false)}
            sx={{ display: "flex", justifyContent: "flex-end", padding: 0 }}
          >
            <CloseIcon color="black" width="1.25rem" />
          </Button>
        </Stack>
        <Divider />
        <Stack spacing={2} mt={2} maxHeight={"100%"} overflow={"scroll"}>
          {/* If safety is toggled display safety UI or the main drawer UI */}
          {safety ? (
            <Stack spacing={2}>
              {safetyLinks.map(({ title, links }) => {
                return (
                  <Stack key={title} spacing={2}>
                    <Typography variant="h5" component={"h5"}>
                      {title}
                    </Typography>
                    <Stack fontSize={".75rem"} spacing={1}>
                      {links.map(({ text, href }) => {
                        return (
                          <Link href={href} key={text}>
                            <Typography sx={{ color: "black" }}>
                              {text}
                            </Typography>
                          </Link>
                        );
                      })}
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          ) : (
            links.map(({ text, href }) => {
              return text !== "Safety" ? (
                <Link key={text} href={href}>
                  <Typography
                    sx={{
                      color: "black",
                      alignItems: "center",
                    }}
                  ></Typography>
                  {text}
                </Link>
              ) : (
                <SimpleButton
                  key={text}
                  sx={{ color: "black", padding: 0, height: "19.5px" }}
                  onClick={() => handleSafety(true)}
                  fullWidth
                >
                  <Stack
                    width={"100%"}
                    direction={"row"}
                    justifyContent={"space-between"}
                  >
                    <Typography>{text}</Typography>
                    <ForwardArrowIcon width="1rem" color="black" />
                  </Stack>
                </SimpleButton>
              );
            })
          )}
        </Stack>
        <Box paddingBottom={"5rem"}>
          <SimpleButton
            variant="contained"
            fullWidth
            className="important-brand-bg"
            sx={{ alignSelf: "flex-end" }}
          >
            <Stack direction={"row"} spacing={2}>
              <DownloadIcon color="white" width="1rem" />
              <Typography className="white-txt">Download</Typography>
            </Stack>
          </SimpleButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default function NavBar() {
  // To control the Drawer
  const [open, setOpen] = useState(false);
  const handleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  // To control the Safety in Drawer
  const [safety, setSafety] = useState(false);
  const handleSafety = (toggle: boolean) => {
    setSafety(toggle);
  };

  return (
    <RBox
      boxProps={{
        position: { xs: "fixed", lg: "absolute" },
        top: 0,
        zIndex: 5,
        className: "navbar-bg",
      }}
    >
      <Grid container alignItems={"center"} height={"5rem"} width={"100%"}>
        <Grid item xs={6} lg={2}>
          {!open && <LogoAndTitle color="white" />}
        </Grid>
        <Grid item lg={8} display={{ xs: "none", lg: "block" }}>
          <Stack
            width="100%"
            direction={"row"}
            spacing={5}
            justifyContent={"center"}
          >
            {links.map(({ text, href }) => {
              return (
                <Link key={text} href={href}>
                  <Typography sx={{ color: "white" }}>{text}</Typography>
                </Link>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={6} lg={2} display={"flex"} justifyContent={"flex-end"}>
          {/* Change from mobile UI to desktop UI based on media */}
          <LinkButton
            display={{ xs: "none", lg: "initial" }}
            href="/login"
            className="white-bg important-black-txt"
          >
            Login
          </LinkButton>
          <Stack
            display={{ xs: "flex", lg: "none" }}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <LinkButton href="/login" className="white-bg important-black-txt">
              Login
            </LinkButton>
            <Button
              onClick={() => handleDrawer(true)}
              sx={{
                paddingRight: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <MenuIcon color="white" width="2rem" height="2rem" />
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Drawer open={open} onClose={() => handleDrawer(false)} anchor="right">
        {/* The content of drawer to be rendered */}
        <MainDrawer
          safety={safety}
          handleDrawer={handleDrawer}
          handleSafety={handleSafety}
        />
      </Drawer>
    </RBox>
  );
}
