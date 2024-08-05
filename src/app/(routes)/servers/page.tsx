import NavBar from "app/(root)/components/NavBar";
import Hero from "./Hero";
import Communities from "./Communities";
import Banner from "./Banner";
import Belong from "./Belong";
import Footer from "app/(root)/components/Footer";
import "./page.css";

export default function Servers() {
  return (
    <>
      <NavBar />
      <Hero />
      <Communities />
      <Banner />
      <Belong />
      <Footer />
    </>
  );
}
