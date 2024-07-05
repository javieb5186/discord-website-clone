import { Box, Typography, Stack } from "@mui/material";
import DiscordIcon from "icons/DiscordIcon";

export default function Banner() {
  const bannerText = ["HANG OUT", "TALK", "PLAY", "CHAT"];
  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      alignItems={"center"}
      minHeight={"9rem"}
      sx={{ background: "linear-gradient(#3647fe, #658eff)" }}
    >
      <Stack
        className="banner"
        height={"50%"}
        direction={"row"}
        alignItems={"center"}
        spacing={"10rem"}
        divider={<DiscordIcon width={"3rem"} color="white" />}
      >
        {bannerText.map(() => {
          return bannerText.map((text) => {
            return (
              <Typography fontSize={"3rem"} className="white-txt" noWrap>
                {text}
              </Typography>
            );
          });
        })}
      </Stack>
    </Box>
  );
}
