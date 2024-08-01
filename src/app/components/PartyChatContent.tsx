// A section to be rendered in root route

import { Box } from "@mui/material";
import SectionBackground from "./SectionBackground";
import SectionCard from "./SectionCard";
import discordBoxImg from "assets/discord-box.webp";
import Image from "next/image";

function DiscordBox() {
  return (
    <Box
      display={{ xs: "none", md: "block" }}
      position={"absolute"}
      width={"15rem"}
      height={"15rem"}
      right={-50}
      top={"-7rem"}
      zIndex={1}
    >
      <Image
        src={discordBoxImg}
        alt=""
        sizes="100%"
        fill
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
}

export default function PartyChatContent() {
  return (
    <SectionBackground>
      <SectionCard
        OverlappingComponent={<DiscordBox />}
        inverse={false}
        videoSrc="./party-chat-video.mp4"
        title={"HOP IN WHEN YOU'RE FREE, NO NEED TO CALL"}
        body={
          "Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session."
        }
      />
    </SectionBackground>
  );
}
