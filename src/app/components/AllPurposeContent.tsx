// A section to be rendered in root route

import { Box, Stack } from "@mui/material";
import SectionBackground from "./SectionBackground";
import SectionCard from "./SectionCard";
import womenTopImg from "assets/woman-top.webp";
import womenBottomImg from "assets/woman-bottom.webp";
import men from "assets/men.webp";
import Image from "next/image";

function PeopleBox() {
  return (
    <Box
      position={"absolute"}
      width={{ xs: "15rem", sm: "20rem" }}
      height={{ xs: "15rem", sm: "20rem" }}
      right={10}
      top={{ xs: "-7rem", sm: "-8.9rem" }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        direction={"row"}
        position={"relative"}
      >
        <Stack width={"45%"} height={"100%"} position={"relative"}>
          <Box
            position={"relative"}
            width={"100%"}
            height={"50%"}
            top={23}
            zIndex={1}
          >
            <Image
              src={womenTopImg}
              alt=""
              sizes="100%"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box
            position={"relative"}
            width={"100%"}
            height={"50%"}
            top={-23}
            zIndex={-1}
          >
            <Image
              src={womenBottomImg}
              alt=""
              sizes="100%"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Stack>
        <Box
          position={"relative"}
          width={"55%"}
          height={"100%"}
          right={0}
          top={0}
          zIndex={-1}
        >
          <Image
            src={men}
            alt=""
            sizes="100%"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default function AllPurposeContent() {
  return (
    <SectionBackground>
      <SectionCard
        OverlappingComponent={<PeopleBox />}
        inverse={false}
        videoSrc="./all-purpose-video.mp4"
        title={"ALWAYS HAVE SOMETHING TO DO TOGETHER"}
        body={
          "Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat."
        }
      />
    </SectionBackground>
  );
}
