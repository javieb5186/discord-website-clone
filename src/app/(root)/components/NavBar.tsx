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
import { LinkButton } from "globalComponents";
import { SimpleLink } from "globalComponents";
import { SimpleButton } from "globalComponents";
import { RBox } from "globalComponents";
import { useContext } from "react";
import { ScreenContext } from "store/ScreenContext";
import { links, safetyLinks } from "../data";
import MenuIcon from "icons/MenuIcon";
import CloseIcon from "icons/CloseIcon";
import LogoAndTitle from "globalComponents/LogoAndTitle";
import DownloadIcon from "icons/DownloadIcon";
import BackArrowIcon from "icons/BackArrowIcon";
import ForwardArrowIcon from "icons/ForwardArrowIcon";

interface Props {
  safety: boolean;
  handleSafety: (toggle: boolean) => void;
  handleDrawer: (toggle: boolean) => void;
}

function MainDrawer({ safety, handleSafety, handleDrawer }: Props) {
  return (
    <Box
      width={{ xs: 250, md: 350 }}
      sx={{ padding: "1rem", height: "80%" }}
      role="presentation"
    >
      <Stack height={"100%"} spacing={3}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          height={"3rem"}
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
        <Stack spacing={2} mt={2} height={"20rem"}>
          {/* If safety is toggled display safety UI or the main drawer UI */}
          {safety ? (
            <Stack spacing={2} maxHeight={"40rem"} overflow={"scroll"}>
              {safetyLinks.map(({ title, links }) => {
                return (
                  <Stack key={title} spacing={2}>
                    <Typography variant="h5" component={"h5"}>
                      {title}
                    </Typography>
                    <Stack fontSize={".75rem"} spacing={1}>
                      {links.map(({ text, href }) => {
                        return (
                          <SimpleLink textColor={"black"} href={href}>
                            {text}
                          </SimpleLink>
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
                <SimpleLink
                  textColor="black"
                  key={text}
                  href={href}
                  height="2rem"
                  center={true}
                >
                  {text}
                </SimpleLink>
              ) : (
                <SimpleButton
                  key={text}
                  sx={{ color: "black", padding: 0 }}
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
        <Box height={"100%"} display={"flex"} alignItems={"flex-end"}>
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
  // Used to get what type of media is being used
  const { desktop } = useContext(ScreenContext);

  // To control the Drawer
  const [open, setOpen] = useState(false);

  // To control the displaying of Safety UI
  const [safety, setSafety] = useState(false);

  // Handlers
  const handleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const handleSafety = (toggle: boolean) => {
    setSafety(toggle);
  };

  return (
    <RBox
      boxProps={{
        position: { xs: "fixed", lg: "absolute" },
        top: 0,
        zIndex: 5,
        className: desktop ? "navbar-bg" : "mobile-navbar-bg",
      }}
    >
      <Grid container alignItems={"center"} height={"5rem"} width={"100%"}>
        <Grid item xs={6} lg={2}>
          {!open && <LogoAndTitle color="white" />}
        </Grid>
        {/* If media is desktop, then add another Grid item to Grid Container */}
        {desktop && (
          <Grid item lg={8}>
            <Stack direction={"row"} spacing={5} justifyContent={"center"}>
              {links.map(({ text, href }) => {
                return (
                  <SimpleLink key={text} href={href} textColor="white">
                    {text}
                  </SimpleLink>
                );
              })}
            </Stack>
          </Grid>
        )}
        <Grid item xs={6} lg={2} display={"flex"} justifyContent={"flex-end"}>
          {/* Change from mobile UI to desktop UI based on media */}
          {desktop ? (
            <LinkButton href="" className="white-bg important-black-txt">
              Login
            </LinkButton>
          ) : (
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <LinkButton href="" className="white-bg important-black-txt">
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
          )}
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
