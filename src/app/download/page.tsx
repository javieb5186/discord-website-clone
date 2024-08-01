import NavBar from "app/components/NavBar";
import Footer from "app/components/Footer";
import Hero from "./Hero";
import DownloadContent from "./DownloadContent";
import "./page.css";

export default function DownloadPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <DownloadContent />
      <Footer />
    </>
  );
}
