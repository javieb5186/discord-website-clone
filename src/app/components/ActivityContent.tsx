import SectionBackground from "./SectionBackground";
import SectionCard from "./SectionCard";
import activityImg from "assets/activity.png";

export default function ActivityContent() {
  return (
    <SectionBackground
      paddingToTop
      bgGradient={"radial-gradient(at 100% 100%, #3255eb, #000027)"}
    >
      <SectionCard
        inverse={false}
        image={{
          src: activityImg,
          alt: "See what friends are active and what they are doing",
        }}
        title={"SEE WHO'S AROUND TO CHILL"}
        body={
          "See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up."
        }
      />
    </SectionBackground>
  );
}
