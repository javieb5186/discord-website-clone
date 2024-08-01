import { Box } from "@mui/material";
import crown from "assets/crown.webp";
import potion from "assets/potion.webp";
import fancyStar from "assets/star.webp";
import trophy from "assets/trophy.webp";
import turnip from "assets/turnip.webp";
import Image from "next/image";

function Crown() {
  return (
    <Box
      position={"absolute"}
      top={"5%"}
      left={"20%"}
      width={{ xs: "75px", sm: "125px", md: "175px" }}
      height={{ xs: "75px", sm: "125px", md: "175px" }}
      className={"crown"}
    >
      <Image src={crown} alt="" fill priority />
    </Box>
  );
}

function Potion() {
  return (
    <Box
      position={"absolute"}
      top={"15%"}
      left={"0%"}
      width={{ xs: "50px", sm: "75px", md: "100px" }}
      height={{ xs: "50px", sm: "75px", md: "100px" }}
      className={"potion"}
    >
      <Image src={potion} alt="" fill priority />
    </Box>
  );
}

function FancyStar() {
  return (
    <Box
      position={"absolute"}
      top={"10%"}
      left={"90%"}
      width={{ xs: "25px", sm: "50px", md: "75px" }}
      height={{ xs: "25px", sm: "50px", md: "75px" }}
      className={"fancy-star"}
    >
      <Image src={fancyStar} alt="" fill priority />
    </Box>
  );
}

function Trophy() {
  return (
    <Box
      position={"absolute"}
      top={"12%"}
      left={"40%"}
      width={{ xs: "50px", sm: "75px", md: "100px" }}
      height={{ xs: "50px", sm: "75px", md: "100px" }}
      className={"trophy"}
    >
      <Image src={trophy} alt="" fill priority />
    </Box>
  );
}

function Turnip() {
  return (
    <Box
      position={"absolute"}
      top={"2%"}
      left={"60%"}
      width={{ xs: "75px", sm: "100px", md: "125px" }}
      height={{ xs: "75px", sm: "100px", md: "125px" }}
      className={"turnip"}
      sx={{ filter: "blur(5px)" }}
    >
      <Image src={turnip} alt="" fill priority />
    </Box>
  );
}

export default function AnimatedImages() {
  return (
    <Box
      position={"absolute"}
      top={0}
      right={0}
      left={0}
      zIndex={-1}
      mx={"auto"}
      height={"100%"}
      className={"screen"}
    >
      <Crown />
      <Potion />
      <FancyStar />
      <Trophy />
      <Turnip />
    </Box>
  );
}
