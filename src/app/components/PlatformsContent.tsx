// A section to be rendered in root route

import SectionBackground from "./SectionBackground";
import SectionCard from "./SectionCard";
import platformsImg from "assets/platforms.png";

export default function PlatformsContent() {
  return (
    <SectionBackground>
      <SectionCard
        inverse={true}
        videoSrc="./platforms-video.mp4"
        title={"WHEREVER YOU GAME, HANG OUT HERE"}
        body={
          "On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends."
        }
      />
    </SectionBackground>
  );
}
