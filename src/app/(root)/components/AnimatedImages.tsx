import { Box } from "@mui/material";
import { useContext } from "react";
import { ScreenContext } from "store/ScreenContext";
import crown from "assets/crown.webp";
import potion from "assets/potion.webp";
import fancyStar from "assets/star.webp";
import trophy from "assets/trophy.webp";
import turnip from "assets/turnip.webp";
import Image from "next/image";

interface Device {
  mobile: boolean;
}

function Crown({ mobile }: Device) {
  return (
    <Box
      position={"absolute"}
      top={"5%"}
      left={"20%"}
      width={{ xs: "75px", sm: "125px", md: "175px" }}
      height={{ xs: "75px", sm: "125px", md: "175px" }}
      className={mobile ? "" : "crown"}
    >
      <Image src={crown} alt="" fill priority />
    </Box>
  );
}

function Potion({ mobile }: Device) {
  return (
    <Box
      position={"absolute"}
      top={"15%"}
      left={"0%"}
      width={{ xs: "50px", sm: "75px", md: "100px" }}
      height={{ xs: "50px", sm: "75px", md: "100px" }}
      className={mobile ? "" : "potion"}
    >
      <Image src={potion} alt="" fill priority />
    </Box>
  );
}

function FancyStar({ mobile }: Device) {
  return (
    <Box
      position={"absolute"}
      top={"10%"}
      left={"90%"}
      width={{ xs: "25px", sm: "50px", md: "75px" }}
      height={{ xs: "25px", sm: "50px", md: "75px" }}
      className={mobile ? "" : "fancy-star"}
    >
      <Image src={fancyStar} alt="" fill priority />
    </Box>
  );
}

function Trophy({ mobile }: Device) {
  return (
    <Box
      position={"absolute"}
      top={"12%"}
      left={"40%"}
      width={{ xs: "50px", sm: "75px", md: "100px" }}
      height={{ xs: "50px", sm: "75px", md: "100px" }}
      className={mobile ? "" : "trophy"}
    >
      <Image src={trophy} alt="" fill priority />
    </Box>
  );
}

function Turnip({ mobile }: Device) {
  return (
    <Box
      position={"absolute"}
      top={"2%"}
      left={"60%"}
      width={{ xs: "75px", sm: "100px", md: "125px" }}
      height={{ xs: "75px", sm: "100px", md: "125px" }}
      className={mobile ? "" : "turnip"}
      sx={{ filter: "blur(5px)" }}
    >
      <Image src={turnip} alt="" fill priority />
    </Box>
  );
}

export default function AnimatedImages() {
  const { mobile, desktop } = useContext(ScreenContext);
  return (
    <Box
      position={"absolute"}
      top={0}
      right={0}
      left={0}
      zIndex={-1}
      mx={"auto"}
      height={"100%"}
      className={desktop ? "desktop-screen" : "mobile-screen"}
    >
      <Crown mobile={mobile} />
      <Potion mobile={mobile} />
      <FancyStar mobile={mobile} />
      <Trophy mobile={mobile} />
      <Turnip mobile={mobile} />
    </Box>
  );
}
