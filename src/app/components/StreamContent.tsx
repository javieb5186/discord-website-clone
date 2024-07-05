import SectionBackground from "./SectionBackground";
import SectionCard from "./SectionCard";
import streamImg from "assets/stream.png";

export default function StreamContent() {
  return (
    <SectionBackground
      bgGradient={"radial-gradient(at 100% 100%, #3255eb, #000027)"}
    >
      <SectionCard
        inverse={true}
        image={{
          src: streamImg,
          alt: "Stream with friends",
        }}
        title={"STREAM LIKE YOU'RE IN THE SAME ROOM"}
        body={
          "High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something."
        }
      />
    </SectionBackground>
  );
}
