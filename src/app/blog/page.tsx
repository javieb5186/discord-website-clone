import { Box } from "@mui/material";
import NavBar from "./NavBar";
import Footer from "app/components/Footer";
import "./page.css";

export default function Blog() {
  return (
    <>
      <NavBar />
      <Box height={"50rem"} width={"100%"} bgcolor="whitesmoke"></Box>
      <Footer />
    </>
  );
}
