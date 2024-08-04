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
  Avatar,
  Input,
  Drawer,
} from "@mui/material";
import { RBox, LogoAndTitle } from "globalComponents";
import { ChevronDownIcon, SearchIcon, MenuIcon } from "icons";
import Link from "next/link";

const navItems = [
  {
    text: "COLLECTIONS",
    menu: [
      "Community",
      "Discord HQ",
      "Engineering & Developers",
      "How to Discord",
      "Policy & Safety",
      "Product & Features",
    ],
  },
  {
    text: "FEATURED",
    href: "",
  },
  {
    text: "DISCORD.COM",
    href: "",
  },
];

interface Props {
  color: string;
}

function NavItems({ color }: Props) {
  // Handle menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {navItems.map(({ text, href, menu }) => {
        return (
          <Fragment key={text}>
            {href !== undefined && (
              <Link href={href} className="link" style={{ color: color }}>
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
                    color: color,
                    justifyContent: "flex-start",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Stack direction={"row"} spacing={1} alignItems={"center"}>
                    <Typography
                      fontSize="1rem"
                      component={"span"}
                      sx={{ color: color }}
                    >
                      {text}
                    </Typography>
                    <ChevronDownIcon width="1rem" height="1rem" color={color} />
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
                        <Typography sx={{ color: "black" }}>{text}</Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            )}
          </Fragment>
        );
      })}
    </>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <RBox bgColor="#404fed">
      <Grid
        container
        height={"5rem"}
        mb={{ xs: "10rem", md: "15rem", lg: "20rem" }}
      >
        <Grid item xs={2} display={"flex"} alignItems={"center"}>
          <Stack direction={"row"} alignItems="center" spacing={".5rem"}>
            <LogoAndTitle color="white" />
            <Typography color={"white"}>Blog</Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={10}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          position={"relative"}
        >
          <Stack
            display={{ xs: "none", md: "flex" }}
            spacing={"1rem"}
            alignItems={"center"}
            direction={"row"}
          >
            <NavItems color="white" />
            <Box
              component={"form"}
              borderRadius={"2rem"}
              border={"1px solid white"}
              paddingLeft="1rem"
            >
              <Stack direction="row" width={"10rem"}>
                <Input
                  placeholder="Search..."
                  disableUnderline
                  sx={{ color: "white" }}
                />
                <Button>
                  <Avatar sx={{ backgroundColor: "#6c80e5" }}>
                    <SearchIcon width="1rem" color="white" />
                  </Avatar>
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Button
            onClick={() => handleDrawer(true)}
            sx={{
              p: 0,
              minWidth: 0,
              display: { xs: "flex", md: "none" },
              width: "1rem",
              justifyContent: "flex-end",
            }}
          >
            <MenuIcon width="1rem" color={"white"} />
          </Button>
        </Grid>
      </Grid>
      <Drawer open={open} onClose={() => handleDrawer(false)} anchor="right">
        <Box
          width={{ xs: 250, md: 350 }}
          sx={{ padding: "1rem", height: "80%" }}
          role="presentation"
        >
          <Stack display={{ xs: "flex", md: "none" }} spacing={"1rem"}>
            <NavItems color="black" />
            <Box
              component={"form"}
              borderRadius={"2rem"}
              border={"1px solid black"}
              paddingLeft="1rem"
            >
              <Stack direction="row">
                <Input
                  placeholder="Search..."
                  disableUnderline
                  sx={{ color: "black" }}
                />
                <Button>
                  <Avatar sx={{ backgroundColor: "#6c80e5" }}>
                    <SearchIcon width="1rem" color="white" />
                  </Avatar>
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </RBox>
  );
}
