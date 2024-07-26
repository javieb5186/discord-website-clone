import { Box, Stack, Typography } from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import channels from "./assets/belong.svg";

export default function Belong() {
  return (
    <RBox bgColor="white">
      <Stack
        py={"5rem"}
        direction={{ xs: "column", lg: "row" }}
        height={"100%"}
        width={"100%"}
        className="black-txt"
        justifyContent={"space-between"}
        spacing={2}
      >
        <Stack
          order={{ xs: 2, lg: 1 }}
          width={{ xs: "100%", lg: "40%" }}
          height="100%"
          justifyContent="center"
          spacing={2}
        >
          <Typography
            fontSize={{
              xs: "1.25rem",
              sm: "1.5rem",
              md: "1.75rem",
              lg: "2rem",
            }}
            component={"h4"}
          >
            Find a place where you belong
          </Typography>
          <Typography fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.3rem" }}>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </Typography>
          <Box display="flex" justifyContent={"center"}>
            <SimpleButton
              variant="contained"
              className="important-black-bg"
              sx={{ height: "4rem", borderRadius: "2rem" }}
            >
              <Typography
                mx={"1rem"}
                className="white-txt"
                fontSize={{ xs: "1rem", md: "1.2rem" }}
              >
                Join Discord
              </Typography>
            </SimpleButton>
          </Box>
        </Stack>
        <Box
          position={"relative"}
          width={{ xs: "100%", lg: "60%" }}
          order={{ xs: 1, lg: 2 }}
        >
          <img src={channels.src} style={{ width: "100%" }} />
        </Box>
      </Stack>
    </RBox>
  );
}
