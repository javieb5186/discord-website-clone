import { Stack, Typography, Box } from "@mui/material";
import { RBox } from "globalComponents";
import { Sparkles } from "icons";

export default function Video() {
  return (
    <RBox bgColor="white">
      <Box my={{ xs: "4rem", sm: "7rem" }} position={"relative"}>
        <Box
          position={"absolute"}
          top={{ xs: -50, md: 0 }}
          left={0}
          className="animate-sparkles1"
        >
          <Sparkles />
        </Box>
        <Stack
          width="100%"
          height={"32rem"}
          justifyContent="center"
          position="relative"
          spacing={"2rem"}
        >
          <Box
            position={"absolute"}
            bottom={-60}
            right={0}
            className="animate-sparkles2"
          >
            <Sparkles />
          </Box>
          <Typography
            textAlign="center"
            fontSize={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
            component="h3"
          >
            Build Safer Spaces
          </Typography>
          <Box
            width="100%"
            height={"85%"}
            display="flex"
            justifyContent="center"
          >
            <Box
              width={{ xs: "100%", md: "45rem", lg: "50rem" }}
              height={"100%"}
              borderRadius={"1rem"}
              overflow={"clip"}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/LvtpbOarcWE?si=WZrrOI4CUJKgg_Gq"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ transform: "scale(1.01)" }}
              ></iframe>
            </Box>
          </Box>
        </Stack>
      </Box>
    </RBox>
  );
}
