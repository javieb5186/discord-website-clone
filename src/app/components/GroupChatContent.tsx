// A section to be rendered for the root route

import { Box } from "@mui/material";
import Image from "next/image";
import chatImg from "assets/chat-with-wumpus.png";
import partyWumpusGif from "assets/party-wumpus.gif";
import SectionCard from "./SectionCard";
import SectionBackground from "./SectionBackground";

function PartyWumpus() {
  return (
    <Box
      position={"absolute"}
      width={{ xs: "6rem", sm: "8rem", lg: "10rem" }}
      height={{ xs: "3rem", sm: "5rem", lg: "7rem" }}
      marginLeft={{ xs: "50%", sm: "60%", lg: "65%" }}
      top={{ xs: "-3rem", sm: "-5rem", lg: "-6.6rem" }}
      zIndex={-1}
    >
      <Image
        src={partyWumpusGif}
        unoptimized
        alt="Discord mascot"
        sizes="100%"
        fill
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
}

export default function GroupChatContent() {
  return (
    <SectionBackground
      bgGradient={"radial-gradient(at 100% 0%, #3255eb, #000027)"}
    >
      <SectionCard
        OverlappingComponent={<PartyWumpus />}
        inverse={false}
        image={{
          src: chatImg,
          alt: "Enjoyable chat through Discord",
        }}
        title={"MAKE YOUR GROUP CHATS MORE FUN"}
        body={
          "Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way."
        }
      />
    </SectionBackground>
  );
}
