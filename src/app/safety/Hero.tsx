import { Stack, Typography, Box, Grid } from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import heroImg from "./assets/safety-hero.svg";
import Image from "next/image";

const buttons = [
  "SAFETY LIBRARY",
  "PRIVACY HUB",
  "PARENT HUB",
  "TRANSPARENCT HUB",
  "SAFETY NEWS HUB",
  "POLICY HUB",
];

export default function Hero() {
  return (
    <Box className="brand-bg">
      <RBox>
        <Stack
          width="100%"
          marginTop="5rem"
          minHeight="45rem"
          justifyContent="center"
          py={{ xs: "2rem", sm: "0rem", md: "3rem", lg: "5rem" }}
        >
          <Grid container>
            <Grid lg={6}>
              <Stack
                height="100%"
                spacing={3}
                justifyContent="center"
                className="white-txt"
              >
                <Typography
                  component="h1"
                  fontSize={{
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "3rem",
                  }}
                >
                  DISCORD SAFETY CENTER
                </Typography>
                <Typography>
                  Discord is the place to hang out with your friends and build
                  community around shared interests. We’re committed to creating
                  a safe, inclusive and welcoming place.
                </Typography>
                <Typography>
                  That’s why we’re working to make Discord private and safe, by
                  design. Learn how to shape the best experience for yourself
                  and find the resources you need, whether you’re a teen,
                  parent, educator, or long-time Discord user.
                </Typography>
              </Stack>
            </Grid>
            <Grid
              display={{ xs: "none", lg: "block" }}
              lg={4}
              justifySelf={"center"}
            >
              <Box className="hero-img" position="relative" top={0} right={-75}>
                <Image src={heroImg} alt="" />
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={6}
            my={{ xs: "1rem", md: "5rem" }}
            rowSpacing={"2rem"}
            columnSpacing={"2rem"}
          >
            {buttons.map((text, index) => {
              return (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <SimpleButton
                    variant="contained"
                    fullWidth
                    sx={{
                      height: "5rem",
                      boxShadow: "5px 10px #57f287",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "#57f287",
                        boxShadow: "5px 10px black",
                      },
                      "&:focus": {
                        backgroundColor: "#57f287",
                        boxShadow: "5px 10px black",
                      },
                      "&:active": {
                        backgroundColor: "#57f287",
                        boxShadow: "5px 10px black",
                      },
                    }}
                  >
                    <Typography className="black-txt">{text}</Typography>
                  </SimpleButton>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </RBox>
    </Box>
  );
}
