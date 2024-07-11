import { Box } from "@mui/material";
import Hero from "./components/Hero";
import GroupChatContent from "./components/GroupChatContent";
import StreamContent from "./components/StreamContent";
import PartyChatContent from "./components/PartyChatContent";
import Banner from "./components/Banner";
import ActivityContent from "./components/ActivityContent";
import AllPurposeContent from "./components/AllPurposeContent";
import PlatformsContent from "./components/PlatformsContent";
import EndOfContent from "./components/EndOfContent";
import mainPageBg from "assets/main-page-bg.webp";
import "./page.css";

export default function Home() {
  return (
    <Box
      width={"100%"}
      position={"relative"}
      zIndex={0}
      sx={{
        backgroundImage: `url(${mainPageBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Hero />
      <GroupChatContent />
      <StreamContent />
      <PartyChatContent />
      <Banner />
      <ActivityContent />
      <AllPurposeContent />
      <PlatformsContent />
      <EndOfContent />
    </Box>
  );
}
