// A section to be rendered for the root route

import { Box } from "@mui/material";
import Image from "next/image";
import SectionCard from "./SectionCard";
import SectionBackground from "./SectionBackground";
import partyWumpusGif from "assets/party-wumpus.gif";
import egg from "assets/egg.webp";
import detectDevice from "utils/detectDevice";

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

function Egg() {
  return (
    <Box
      position={"absolute"}
      width={{ xs: "200px", sm: "400px", lg: "500px" }}
      height={{ xs: "200px", sm: "400px", lg: "500px" }}
      left={{ xs: 0, sm: -150, lg: -250 }}
      bottom={{ xs: -150, sm: 0 }}
      zIndex={-1}
      className={"egg"}
    >
      <Image
        src={egg}
        alt="Dinosaur Egg"
        sizes="100%"
        fill
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
}

export default function GroupChatContent() {
  return (
    <SectionBackground paddingToTop>
      <SectionCard
        OverlappingComponent={<PartyWumpus />}
        inverse={false}
        videoSrc={"./wumpus-chat.mp4"}
        title={"MAKE YOUR GROUP CHATS MORE FUN"}
        body={
          "Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way."
        }
      >
        <Egg />
      </SectionCard>
    </SectionBackground>
  );
}
