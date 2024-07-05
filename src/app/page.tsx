import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import GroupChatContent from "./components/GroupChatContent";
import StreamContent from "./components/StreamContent";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <GroupChatContent />
      <StreamContent />
    </>
  );
}
