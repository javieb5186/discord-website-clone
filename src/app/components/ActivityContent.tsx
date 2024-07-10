// A section to be rendered in root route

import SectionBackground from "./SectionBackground";
import SectionCard from "./SectionCard";
import activityImg from "assets/activity.png";

export default function ActivityContent() {
  return (
    <SectionBackground paddingToTop>
      <SectionCard
        inverse={true}
        videoSrc="./activity-video.mp4"
        title={"SEE WHO'S AROUND TO CHILL"}
        body={
          "See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up."
        }
      />
    </SectionBackground>
  );
}
