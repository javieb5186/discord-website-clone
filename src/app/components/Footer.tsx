"use client";
import { SyntheticEvent, useState, useContext } from "react";
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
import { languages, navigationLinks } from "app/data";
import { ScreenContext } from "store/ScreenContext";
import Image from "next/image";
import ChevronDownIcon from "icons/ChevronDownIcon";
import TwitterIcon from "icons/TwitterIcon";
import InstagramIcon from "icons/InstagramIcon";
import FacebookIcon from "icons/FacebookIcon";
import YoutubeIcon from "icons/YoutubeIcon";
import TiktokIcon from "icons/TiktokIcon";
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
  const { tablet } = useContext(ScreenContext);

  // Handle the display of language list
  const handleDisplay = () => {
    setDisplay(!display);
  };

  // Will set the text to whichever button it has been selected from
  const handleLanguage = (event: SyntheticEvent) => {
    const index = event.currentTarget.getAttribute("data-index");
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
          <Grid container paddingBottom={2} rowGap={"3rem"} columns={14}>
            <Grid item xs={14} sm={6}>
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
            {navigationLinks.map(({ category, links }) => {
              return category === "Empty" ? (
                tablet ? (
                  <Grid item sm={6} key={"empty"} />
                ) : null
              ) : (
                <Grid item xs={7} sm={4} md={2} key={category}>
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
