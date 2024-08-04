// A NavBar component to be used across routes
// Drawer base component courtesy of MUI main docs

"use client";
import { Fragment, useState } from "react";
import {
  Stack,
  Box,
  Menu,
  MenuItem,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { RBox, LogoAndTitle } from "globalComponents";
import { ChevronDownIcon } from "icons";
import menu from "assets/menu.svg";
import Link from "next/link";

const navItems = [
  {
    text: "Feedback",
    href: "",
  },
  {
    text: "English (US)",
    menu: [
      "Dansk Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
      "Dansk",
    ],
  },
  {
    text: "Submit a Request",
    href: "",
  },
  {
    text: "Sign in",
    href: "",
  },
];

export default function NavBar() {
  // Display menu
  const [display, setDisplay] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleDisplay = () => {
    setDisplay(!display);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      width={"100%"}
      position={"absolute"}
      zIndex={5}
      top={0}
      left={0}
      display={"flex"}
      justifyContent={"center"}
      bgcolor="white"
    >
      <RBox>
        <Grid container height={"5rem"}>
          <Grid item xs={3} display={"flex"} alignItems={"center"}>
            <LogoAndTitle color="#5865f2" />
          </Grid>
          <Grid
            item
            xs={9}
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            position={"relative"}
            zIndex={10}
          >
            <Stack
              display={{ xs: "none", md: "flex" }}
              spacing={"2rem"}
              alignItems={"center"}
              direction={"row"}
            >
              {navItems.map(({ text, href, menu }) => {
                return (
                  <Fragment key={text}>
                    {href !== undefined && (
                      <Link href={href} className="link">
                        {text}
                      </Link>
                    )}
                    {menu !== undefined && (
                      <>
                        <Button
                          id="basic-button"
                          aria-controls={openMenu ? "basic-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={openMenu ? "true" : undefined}
                          onClick={handleClick}
                          sx={{
                            padding: "0rem",
                            textTransform: "none",
                            textDecoration: "none",
                            color: "#5865f2",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          <Stack
                            direction={"row"}
                            spacing={1}
                            alignItems={"center"}
                          >
                            <Typography fontSize="1rem" component={"span"}>
                              {text}
                            </Typography>
                            <ChevronDownIcon
                              width="1rem"
                              height="1rem"
                              color="#5865f2"
                            />
                          </Stack>
                        </Button>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={openMenu}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          {menu.map((text, index) => {
                            return (
                              <MenuItem key={index} onClick={handleClose}>
                                {text}
                              </MenuItem>
                            );
                          })}
                        </Menu>
                      </>
                    )}
                  </Fragment>
                );
              })}
            </Stack>
            <Stack
              direction={"row"}
              display={{ xs: "flex", md: "none" }}
              spacing={"1rem"}
              alignItems={"center"}
            >
              <Button
                onClick={() => handleDisplay()}
                sx={{
                  p: 0,
                  minWidth: 0,
                  width: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <img src={menu.src} width={"100%"} alt="Menu Icon" />
              </Button>
              <Link href="" className="link">
                Sign in
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Box position={"relative"} display={{ xs: "block", md: "none" }}>
          {display && (
            <Box
              width={"100%"}
              bgcolor="whitesmoke"
              position={"absolute"}
              top={0}
              left={0}
            >
              <Stack
                mt={"1rem"}
                py={"1rem"}
                display={"flex"}
                spacing={"2rem"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                {navItems
                  .filter((_, index) => index !== navItems.length - 1)
                  .map(({ text, href, menu }) => {
                    return (
                      <Fragment key={text}>
                        {href !== undefined && (
                          <Link href={href} className="link">
                            {text}
                          </Link>
                        )}
                        {menu !== undefined && (
                          <>
                            <Button
                              id="basic-button"
                              aria-controls={
                                openMenu ? "basic-menu" : undefined
                              }
                              aria-haspopup="true"
                              aria-expanded={openMenu ? "true" : undefined}
                              onClick={handleClick}
                              sx={{
                                padding: "0rem",
                                textTransform: "none",
                                textDecoration: "none",
                                color: "#5865f2",
                                "&:hover": {
                                  textDecoration: "underline",
                                },
                              }}
                            >
                              <Stack
                                direction={"row"}
                                spacing={1}
                                alignItems={"center"}
                              >
                                <Typography fontSize="1rem" component={"span"}>
                                  {text}
                                </Typography>
                                <ChevronDownIcon
                                  width="1rem"
                                  height="1rem"
                                  color="#5865f2"
                                />
                              </Stack>
                            </Button>
                            <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={openMenu}
                              onClose={handleClose}
                              MenuListProps={{
                                "aria-labelledby": "basic-button",
                              }}
                            >
                              {menu.map((text, index) => {
                                return (
                                  <MenuItem key={index} onClick={handleClose}>
                                    {text}
                                  </MenuItem>
                                );
                              })}
                            </Menu>
                          </>
                        )}
                      </Fragment>
                    );
                  })}
              </Stack>
            </Box>
          )}
        </Box>
      </RBox>
    </Box>
  );
}
