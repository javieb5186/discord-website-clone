import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { RBox } from "globalComponents";
import nitroMascotImg from "assets/nitro-mascot-img.webp";

export default function Hero() {
  return (
    <Box
      height={{ xs: "80rem", lg: "auto" }}
      width="100%"
      position={"relative"}
      className="nitro-hero"
      sx={{
        backgroundImage: {
          xs: "linear-gradient(to top, #ec90f6, #4157d5) ",
          lg: "none",
        },
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        overflow="hidden"
        display={{ xs: "none", lg: "block" }}
      >
        <Box position="absolute" className="nitro-hero-video">
          <video
            autoPlay
            loop
            playsInline
            muted
            width={"112%"}
            height={"120%"}
            style={{
              objectFit: "contain",
            }}
          >
            <source src="/nitro-mascot.webm" type="video/webm" />
          </video>
        </Box>
      </Box>
      <RBox>
        <Box
          marginTop={{ xs: "5rem", lg: "0" }}
          paddingTop={{ xs: "5rem", lg: "0" }}
          display={{ xs: "flex", lg: "block" }}
          justifyContent={{ xs: "center", lg: "" }}
        >
          <Stack
            marginLeft={{ lg: "5rem" }}
            width="20rem"
            spacing={4}
            justifyContent={{ xs: "flex-start", lg: "center" }}
            className="white-txt nitro-text-container"
            textAlign={{ xs: "center", lg: "left" }}
          >
            <Typography
              component="h1"
              fontSize={{
                xs: "2rem",
                sm: "1.75rem",
                md: "2.25rem",
                lg: "2.75rem",
              }}
            >
              Unleash more fun with Nitro
            </Typography>
            <Typography fontSize={{ sm: "1.1rem", md: "1.2rem", lg: "1.3rem" }}>
              Subscribe to Nitro to upgrade your emoji, personalize your
              profile, share bigger files, and so much more.
            </Typography>
            <Box
              width="100%"
              height="15rem"
              position={"relative"}
              display={{ xs: "block", lg: "none" }}
            >
              <Image
                src={nitroMascotImg}
                alt=""
                sizes="50vw"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Stack>
        </Box>
      </RBox>
    </Box>
  );
}
