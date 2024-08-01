import NavBar from "app/components/NavBar";
import Hero from "./Hero";
import Internships from "./Interships";
import Jobs from "./Jobs";
import DiscordLife from "./DiscordLife";
import Remote from "./Remote";
import Footer from "app/components/Footer";
import "./page.css";

export default function Careers() {
  return (
    <>
      <NavBar />
      <Hero />
      <Internships />
      <Jobs />
      <DiscordLife />
      <Remote />
      <Footer />
    </>
  );
}
