import NavBar from "app/components/NavBar";
import Footer from "app/components/Footer";
import Hero from "./Hero";
import Perks from "./Perks";
import Plan from "./Plan";
import FAQs from "./FAQs";
import Banner from "./Banner";
import "./page.css";

export default function Nitro() {
  return (
    <>
      <NavBar />
      <Hero />
      <Perks />
      <Plan />
      <FAQs />
      <Banner />
      <Footer />
    </>
  );
}
