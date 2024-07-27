import { Stack, Box, Grid, Typography } from "@mui/material";
import { RBox } from "globalComponents";
import charter from "./assets/charter.svg";
import library from "./assets/library.svg";
import news from "./assets/news.svg";
import parent from "./assets/parent.svg";
import policy from "./assets/policy.svg";
import privacy from "./assets/privacy.svg";
import transparency from "./assets/transparency.svg";
import ForwardArrowIcon from "icons/ForwardArrowIcon";

const svgs = [
  {
    svg: library,
    alt: "Safety Library",
  },
  {
    svg: privacy,
    alt: "Privacy Hub",
  },
  {
    svg: parent,
    alt: "Parent Hub",
  },
  {
    svg: transparency,
    alt: "Transparency Hub",
  },
  {
    svg: news,
    alt: "News Hub",
  },
  {
    svg: policy,
    alt: "Policy Hub",
  },
  {
    svg: charter,
    alt: "Charter Hub",
  },
];

export default function Content() {
  return (
    <RBox>
      <Stack width={"100%"} spacing="2rem" my="5rem" alignItems={"center"}>
        <Grid
          container
          minHeight="18rem"
          rowSpacing={{ xs: "2rem", md: "0rem" }}
          width={{ xs: "100%", md: "90%" }}
        >
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Stack
              height="100%"
              spacing={"1rem"}
              justifyContent="center"
              paddingRight={{ xs: "2rem", md: "2rem" }}
            >
              <Typography
                fontSize={{
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                }}
              >
                Safety Library
              </Typography>
              <Typography>
                Everything you could ever want to know about safety on Discord.
                Whether you’re a user, a moderator, or a parent, discover all of
                our tools and resources and how to use them.{" "}
              </Typography>
              <Stack direction="row">
                <Typography>Explore more</Typography>
                <ForwardArrowIcon width="1rem" />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            alignContent={"center"}
          >
            <Box
              height={"auto"}
              width={"auto"}
              borderRadius={"1rem"}
              overflow={"clip"}
            >
              <img
                src={library.src}
                alt=""
                style={{ transform: "scale(1.1)" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </RBox>
  );
}
