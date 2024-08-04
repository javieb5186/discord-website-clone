import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import { RBox } from "globalComponents";

const blogs = [
  {
    title: "PRODUCT & FEATURES",
    body: "Discord Patch Notes: August 1, 2024",
  },
  {
    title: "PRODUCT & FEATURES",
    body: "Coming Soon: See What's Happening on Discord, Directly from your Xbox console",
  },
  {
    title: "DISCORD HQ",
    body: "July's Staff Picks: Playin' and Spectatin'",
  },
  {
    title: "PRODUCT & FEATURES",
    body: "Discord Update: July 26, 2024 Changelog",
  },
  {
    title: "COMMUNITY",
    body: "Embracing Disability Pride Month: Celebrating and Promoting Accessibility",
  },
];

const collections = [
  {
    title: "PRODUCT & FEATURES",
    body: "Announcements, new features, and general info about the Discord app.",
    blogLayout: [1, 3],
    blogs: [
      "Discord Patch Notes: August 1, 2024",
      "Coming Soon: See What's Happening on Discord, Directly from your Xbox console",
      "Discord Update: July 26, 2024 Changelog",
      "WHO LIVES ON YOUR PROFILE FOR ALL TO SEE? SPONGEBOB, IN THE SHOP!",
    ],
  },
  {
    title: "Community",
    body: "Stories, spotlights, and behind the scenes from the heart and soul of Discord: the community.",
    blogLayout: [2, 2],
    blogs: [
      "Embracing Disabilty Pride Month: Celebrating and Promoting Accessibility",
      "How Discord Celebrated Pride Month 2024",
      "How Discord Celebbrated AANHPI Heritage Month 2024",
      "How Hero Journey Club Uses Games for Mental Health Care and Connection",
    ],
  },
];

export default function Content() {
  return (
    <RBox bgColor="white">
      <Box position={"relative"} mt={"5rem"}>
        <Box
          height={{ xs: "20rem", md: "30rem" }}
          position={"absolute"}
          top={-200}
          left={0}
          width="100%"
          zIndex={3}
          bgcolor={"whitesmoke"}
          borderRadius={".3rem"}
        />
      </Box>
      <Typography mt={{ xs: "20rem", md: "25rem" }}>DISCORD HQ</Typography>
      <Typography
        fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }}
      >
        FIND YOUR SQUAD AND LOCK IN: GET HYPED FOR VALORANT CHAMPIONS WITH A
        QUEST & UPCOMING SHOP ITEMS
      </Typography>
      <Grid container my="2rem" rowGap={"2rem"}>
        {blogs.map(({ title, body }, index) => {
          const firstRow = index < 2;
          return (
            <Grid
              key={index}
              xs={12}
              md={firstRow ? 6 : 4}
              minHeight={{ xs: "20rem", md: firstRow ? "20rem" : "15rem" }}
              p={{ xs: "0rem", md: "1rem" }}
            >
              <Stack height={"100%"} width={"100%"} spacing={"1rem"}>
                <Box
                  width="100%"
                  bgcolor={"whitesmoke"}
                  height={{ xs: "15rem", md: firstRow ? "15rem" : "10rem" }}
                  borderRadius={".3rem"}
                />
                <Typography color={"primary"}>{title}</Typography>
                <Typography>{body}</Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <Stack spacing={"5rem"} my={"2rem"}>
        {collections.map(({ title, body, blogLayout, blogs }, index) => {
          const firstRow = 12 / blogLayout[0];
          const secondRow = 12 / blogLayout[1];

          const firstTimes = Array.from({ length: blogLayout[0] }).map(
            () => firstRow
          );
          const secondTimes = Array.from({ length: blogLayout[1] }).map(
            () => secondRow
          );

          const totalTimes = [...firstTimes, ...secondTimes];
          return (
            <Box
              key={index}
              width="100%"
              bgcolor={"whitesmoke"}
              borderRadius={".3rem"}
              minHeight={"40rem"}
            >
              <Grid container p={{ xs: "1rem", md: "2rem" }}>
                <Grid item xs={12} md={4}>
                  <Stack spacing={"1rem"}>
                    <Typography>COLLECTION</Typography>
                    <Typography
                      fontSize={{
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "2.5rem",
                        lg: "3rem",
                      }}
                    >
                      {title}
                    </Typography>
                    <Box
                      height={{ xs: "10rem", sm: "15rem" }}
                      width="100%"
                      bgcolor={"lightgray"}
                      borderRadius={".3rem"}
                    />
                    <Typography>{body}</Typography>
                    <Box>
                      <Button
                        variant="contained"
                        color={"primary"}
                        sx={{ padding: "1rem", borderRadius: "2rem" }}
                      >
                        View Collection
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container paddingLeft={{ xs: "0rem", md: "1rem" }}>
                    {blogs.map((title, index) => {
                      return (
                        <Grid
                          key={title}
                          item
                          xs={12}
                          md={totalTimes[index]}
                          p={"1rem"}
                        >
                          <Stack spacing={"1rem"}>
                            <Box
                              height={{
                                xs: totalTimes[index] === 12 ? "10rem" : "7rem",
                                sm:
                                  totalTimes[index] === 12 ? "15rem" : "10rem",
                              }}
                              width="100%"
                              bgcolor={"lightgray"}
                              borderRadius={".3rem"}
                            />
                            <Typography>{title}</Typography>
                          </Stack>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Stack>
    </RBox>
  );
}
