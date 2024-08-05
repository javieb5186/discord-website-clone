import NavBar from "app/(root)/components/NavBar";
import Hero from "./Hero";
import Video from "./Video";
import Content from "./Content";
import Footer from "app/(root)/components/Footer";
import "./page.css";

export default function Safety() {
  return (
    <>
      <NavBar />
      <Hero />
      <Video />
      <Content />
      <Footer />
    </>
  );
}
