import { Box, Typography, Stack, Grid } from "@mui/material";
import { RBox, LinkInText } from "globalComponents";
import Image from "next/image";
import categoryIcon from "./assets/category-icon.svg";

const cards = [
  {
    title: "Announcements",
    body: "We've got our ear to the ground. Here's what you need to know.",
  },
  {
    title: "Discord Basics",
    body: "Start off on the right foot! Not the left one!",
  },
  {
    title: "Account Settings",
    body: "You're a special snowflake and so is your account.",
  },
  {
    title: "Server Settings",
    body: "Almost as exciting as interior decorating.",
  },
  {
    title: "Apps & Activities",
    body: "Bringing people together from all around the globe (and occasionally Mars).",
  },
  {
    title: "Nitro, Shop & Server Boosting",
    body: "Please don't shop until you drop. Let us help.",
  },
  {
    title: "Quests & Promotions",
    body: "Welcome, weary traveler! Would you like to see our quests?",
  },
  {
    title: "Payments & Billing",
    body: "That feel when you look at your bank account.",
  },
  {
    title: "Safety, Privacy & Policy",
    body: "Keep things safe & sound for you and your buddies.",
  },
  {
    title: "Known Issues, Bugs & Troubleshooting",
    body: "All you can eat self-serve problem solving.",
  },
];

const otherCards = [
  {
    title: "Developer Support",
    body: "Your home for support with developing bots, apps, & games using our API and SDK! ",
  },
  {
    title: "Twitter",
    body: "Have a quick question? Hit us up on Twitter!",
  },
];

export default function Category() {
  return (
    <RBox bgColor="white">
      <Stack my={"5rem"} spacing={"5rem"}>
        <Stack textAlign={"center"}>
          <Typography
            fontSize={{
              xs: "1.25rem",
              sm: "1.5rem",
              md: "1.75rem",
              lg: "2rem",
            }}
          >
            Need help? We've got your back.
          </Typography>
          <Typography>
            <LinkInText
              text={
                "From account settings to permissions, find help for everything Discord If you're new to Discord and looking for tips, check out our Beginner's Guide"
              }
              color={"#5865f2"}
              links={[{ link: "Beginner's Guide", href: "" }]}
            />
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          spacing={"1rem"}
          useFlexGap
          justifyContent={"center"}
        >
          {cards.map(({ title, body }, index) => {
            return (
              <Stack
                key={title}
                width={"15rem"}
                border={"1px solid lightgray"}
                borderRadius={".2rem"}
                p={"1rem"}
                spacing={"1rem"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Box width={"6rem"} height={"6rem"} position={"relative"}>
                  <Image src={categoryIcon} alt="" fill />
                </Box>
                <Typography color={"primary"} fontSize={"1.1rem"}>
                  {title}
                </Typography>
                <Typography fontSize={".9rem"}>{body}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <Typography
          textAlign={"center"}
          fontSize={{
            xs: "1.25rem",
            sm: "1.5rem",
            md: "1.75rem",
            lg: "2rem",
          }}
        >
          Other ways to help.
        </Typography>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          spacing={"1rem"}
          useFlexGap
          justifyContent={"center"}
        >
          {otherCards.map(({ title, body }, index) => {
            return (
              <Stack
                key={title}
                width={"15rem"}
                border={"1px solid lightgray"}
                borderRadius={".2rem"}
                p={"1rem"}
                spacing={"1rem"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Box width={"6rem"} height={"6rem"} position={"relative"}>
                  <Image src={categoryIcon} alt="" fill />
                </Box>
                <Typography color={"primary"} fontSize={"1.1rem"}>
                  {title}
                </Typography>
                <Typography fontSize={".9rem"}>{body}</Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </RBox>
  );
}
