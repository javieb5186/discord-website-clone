import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import GroupChatContent from "./components/GroupChatContent";
import StreamContent from "./components/StreamContent";
import PartyChatContent from "./components/PartyChatContent";
import Banner from "./components/Banner";
import ActivityContent from "./components/ActivityContent";
import AllPurposeContent from "./components/AllPurposeContent";
import PlatformsContent from "./components/PlatformsContent";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <GroupChatContent />
      <StreamContent />
      <PartyChatContent />
      <Banner />
      <ActivityContent />
      <AllPurposeContent />
      <PlatformsContent />
    </>
  );
}
