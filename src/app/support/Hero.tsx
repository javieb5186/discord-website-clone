"use client";
import { useState } from "react";
import { Box, Stack, Typography, Input, Divider } from "@mui/material";
import { RBox } from "globalComponents";
import SearchIcon from "icons/Search";
import supportHeroBg from "./assets/support-hero.png";
import Link from "next/link";

const menuItems = [
  {
    title: "Getting Started",
    breadCrumb: "Discord > Discord Basics > Getting started",
  },
  {
    title: "Beginner's Guide to Discord",
    breadCrumb: "Discord > Discord Basics > Getting started",
  },
  {
    title: "Discord Voice and Troubleshooting Guide",
    breadCrumb:
      "Discord > Known Issues, Bugs, and Troubleshooting > Troubleshooting Help",
  },
];

export default function Hero() {
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState(false);

  const handleDisplay = (toggle: boolean) => {
    setDisplay(toggle);
  };

  return (
    <Box
      height={"20rem"}
      sx={{
        backgroundImage: `url(${supportHeroBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      display={"flex"}
      alignItems={"center"}
    >
      <RBox>
        <Stack
          className="white-txt"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography fontSize={"3rem"}>Help Center</Typography>
          <Stack
            direction={"row"}
            bgcolor={"white"}
            borderRadius={".2rem"}
            maxWidth={"40rem"}
            width={"100%"}
            px={"1rem"}
            alignItems={"center"}
            position={"relative"}
            columnGap={"1rem"}
          >
            <SearchIcon width="1rem" color="black" />
            <Input
              disableUnderline
              fullWidth
              placeholder="Search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => handleDisplay(true)}
              onBlur={() => handleDisplay(false)}
            />
            {display && value === "" && (
              <Box
                position={"absolute"}
                width={"100%"}
                top={"50px"}
                left={"0px"}
                bgcolor={"white"}
                borderRadius={".2rem"}
              >
                <Stack
                  width={"100%"}
                  divider={<Divider />}
                  className="black-txt"
                  pt="1rem"
                >
                  <Typography pb={"1rem"} textAlign={"center"}>
                    Featured Articles
                  </Typography>
                  {menuItems.map(({ title, breadCrumb }) => {
                    return (
                      <Link href={""}>
                        <Stack p={"1rem"}>
                          <Typography fontSize={".9rem"} color="primary">
                            {title}
                          </Typography>
                          <Typography fontSize={".7rem"}>
                            {breadCrumb}
                          </Typography>
                        </Stack>
                      </Link>
                    );
                  })}
                </Stack>
              </Box>
            )}
          </Stack>
        </Stack>
      </RBox>
    </Box>
  );
}
