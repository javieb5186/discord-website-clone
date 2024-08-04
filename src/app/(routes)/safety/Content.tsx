import { Stack, Box, Grid, Typography } from "@mui/material";
import { RBox } from "globalComponents";
import { ForwardArrowIcon } from "icons";
import {
  library,
  privacy,
  transparency,
  news,
  policy,
  charter,
  parent,
} from "./assets";

const cards = [
  {
    title: "Safety Library",
    body: "Everything you could ever want to know about safety on Discord. Whether you’re a user, a moderator, or a parent, discover all of our tools and resources and how to use them.",
    svg: library,
    alt: "Safety Library",
  },
  {
    title: "Privacy Hub",
    body: "Privacy is an essential part of feeling safe. No matter what, we build privacy into our products, and we will always try to let you know what's happening where and when. Learn more about what that means, including the data we collect and the tools to put you in control.",
    svg: privacy,
    alt: "Privacy Hub",
  },
  {
    title: "Parent Hub",
    body: "Learn more about what we’re doing to help your teen stay safer on our platform, explore our Family Center tool, and download our Parent's Guide to Discord.",
    svg: parent,
    alt: "Parent Hub",
  },
  {
    title: "Transparency Hub",
    body: "Explore data, trends, and analysis into the work done to help keep people on Discord safe. Transparency reports cover information about enforcement of our platform policies, as well as our response to legal, emergency, and intellectual property removal requests.",
    svg: transparency,
    alt: "Transparency Hub",
  },
  {
    title: "Safety News Hub",
    body: "The latest news and updates on Discord’s Safety, Privacy, and Policy initiatives.",
    svg: news,
    alt: "News Hub",
  },
  {
    title: "Policy Hub",
    body: "Learn about our Community Guidelines, developed to help keep people safe and make Discord the best place to hang out with friends.",
    svg: policy,
    alt: "Policy Hub",
  },
  {
    title: "Charter Hub",
    body: "We work to center youth voices in our product design and policies. Now we're collaborating with teens around the world on a charter to make Discord a better place to hang out.",
    svg: charter,
    alt: "Charter Hub",
  },
];

export default function Content() {
  return (
    <RBox bgColor="whitesmoke">
      <Stack width={"100%"} spacing="2rem" my="5rem" alignItems={"center"}>
        {cards.map(({ title, body, svg, alt }, index) => {
          let even = false;
          if (index === 0) even = true;
          else {
            even = index % 2 === 0;
          }
          return (
            <Grid
              key={index}
              container
              minHeight="18rem"
              rowSpacing={{ xs: "2rem", md: "0rem" }}
              columnGap={"2rem"}
              width={{ xs: "100%", md: "90%" }}
            >
              <Grid item xs={12} md order={{ xs: 2, md: even ? 1 : 2 }}>
                <Stack height="100%" spacing={"1rem"} justifyContent="center">
                  <Typography
                    fontSize={{
                      xs: "1.5rem",
                      sm: "2rem",
                      md: "2.5rem",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography>{body}</Typography>
                  <Stack direction="row">
                    <Typography>Explore more</Typography>
                    <ForwardArrowIcon width="1rem" />
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md
                order={{ xs: 1, md: even ? 2 : 1 }}
                alignContent={"center"}
              >
                <Box width={"100%"}>
                  <img
                    src={svg.src}
                    alt={alt}
                    width={"100%"}
                    style={{ borderRadius: "1rem", overflow: "clip" }}
                  />
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </RBox>
  );
}
