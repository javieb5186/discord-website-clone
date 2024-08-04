// A section to be rendered in root route

"use client";
import { SyntheticEvent, useState } from "react";
import {
  Grid,
  Stack,
  Box,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { RBox, SimpleButton, LeftAlignedButton } from "globalComponents";
import { languages, navigationLinks } from "../data";
import Image from "next/image";
import {
  ChevronDownIcon,
  FacebookIcon,
  TwitterIcon,
  TiktokIcon,
  YoutubeIcon,
  InstagramIcon,
} from "icons";
import LogoAndTitle from "globalComponents/LogoAndTitle";

const socialIcons = [
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
];

export default function Footer() {
  // States
  const [display, setDisplay] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  // Handle the display of language list
  const handleDisplay = () => {
    setDisplay(!display);
  };

  // Will set the text to whichever button it has been selected from
  const handleLanguage = (e: SyntheticEvent) => {
    const index = e.currentTarget.getAttribute("data-index");
    setCurrentLanguage(languages[Number(index)]);
    handleDisplay();
  };

  return (
    <Box
      component={"footer"}
      display={"flex"}
      justifyContent={"center"}
      width={"100%"}
      sx={{ backgroundImage: "linear-gradient(to left top, #27226f, #6f70a4)" }}
      py={10}
    >
      <RBox>
        <Stack width={"100%"} className="white-txt">
          <Grid container paddingBottom={2} rowGap={"3rem"}>
            <Grid item xs={12} sm={5} md={4}>
              <Stack spacing={3}>
                <Box position={"relative"}>
                  {display ? (
                    <List
                      id="list"
                      sx={{
                        position: "absolute",
                        top: "-13em",
                        backgroundColor: "white",
                        overflow: "auto",
                        maxHeight: 200,
                      }}
                    >
                      {languages.map(({ text, locale, imgSrc }, index) => {
                        return (
                          <ListItem key={text} disablePadding>
                            <ListItemButton
                              onClick={handleLanguage}
                              data-index={index}
                              data-locale={locale}
                            >
                              <ListItemIcon>
                                <Image
                                  width={24}
                                  height={16}
                                  src={imgSrc}
                                  alt={""}
                                />
                              </ListItemIcon>
                              <ListItemText
                                className="black-txt"
                                primary={text}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : null}
                  <LeftAlignedButton
                    sx={{
                      width: "12rem",
                    }}
                    onClick={handleDisplay}
                  >
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                      <Image
                        width={24}
                        height={16}
                        src={currentLanguage.imgSrc}
                        alt={""}
                      />
                      <Typography className="white-txt">
                        {currentLanguage.text}
                      </Typography>
                      <ChevronDownIcon width="1rem" className="white-fill" />
                    </Stack>
                  </LeftAlignedButton>
                </Box>
                <Stack
                  direction={"row"}
                  spacing={2}
                  flexWrap={"wrap"}
                  useFlexGap
                >
                  {socialIcons.map((SocialIcon, index) => {
                    return (
                      <LeftAlignedButton key={index}>
                        <SocialIcon width="1.25rem" className="white-fill" />
                      </LeftAlignedButton>
                    );
                  })}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
              <Grid container rowGap={"2rem"}>
                {navigationLinks.map(({ category, links }) => {
                  return (
                    <Grid item xs={6} md={3} key={category}>
                      <Stack spacing={1}>
                        <Typography variant="h6" fontSize={"1rem"}>
                          {category}
                        </Typography>
                        <Stack>
                          {links.map((link, index) => {
                            return (
                              <LeftAlignedButton key={index}>
                                <Typography
                                  display={"inline"}
                                  className="white-txt"
                                  fontSize={".75rem"}
                                >
                                  {link}
                                </Typography>
                              </LeftAlignedButton>
                            );
                          })}
                        </Stack>
                      </Stack>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Stack spacing={2}>
            <Divider sx={{ borderColor: "white" }} />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <LogoAndTitle color={"white"} />
              <SimpleButton
                variant="contained"
                className="important-brand-bg"
                sx={{
                  borderRadius: "2rem",
                  height: "auto",
                  maxWidth: "25rem",
                }}
              >
                <Typography className="white-txt" fontSize={".75rem"}>
                  Sign up
                </Typography>
              </SimpleButton>
            </Stack>
          </Stack>
        </Stack>
      </RBox>
    </Box>
  );
}
