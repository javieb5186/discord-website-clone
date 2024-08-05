// A section to be rendered in root route

import { Suspense } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { RBox } from "globalComponents";
import { SimpleButton } from "globalComponents";
import { DownloadIcon } from "icons";
import { groupOfStars, contentFooterImg } from "../assets";
import Image from "next/image";
import EndOfContentDeviceText from "./EndOfContentDeviceText";

export default function EndOfContent() {
  return (
    <RBox
      bgImage={{
        backgroundImage: "url(" + groupOfStars.src + ")",
        backgroundSize: "cover",
      }}
    >
      <Stack width={"100%"} justifyContent={"center"} spacing={5}>
        <Box component={"h2"} className="white-txt" textAlign="center">
          <Typography fontSize={{ xs: "1.5rem", sm: "2.25rem", md: "3rem" }}>
            YOU CAN&apos;T SCROLL ANYMORE.
          </Typography>
          <Typography fontSize={{ xs: "1.5rem", sm: "2.25rem", md: "3rem" }}>
            BETTER GO CHAT.
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <SimpleButton
            variant="contained"
            className="important-brand-bg"
            sx={{
              borderRadius: "2rem",
              height: "auto",
              maxWidth: "25rem",
            }}
          >
            <Stack
              direction={"row"}
              spacing={2}
              minHeight={"3rem"}
              alignItems={"center"}
            >
              <DownloadIcon width="1.25rem" className="white-fill" />
              <Suspense fallback={<div>Download</div>}>
                <EndOfContentDeviceText />
              </Suspense>
            </Stack>
          </SimpleButton>
        </Box>
        <Image
          src={contentFooterImg}
          alt="Discord text and it's mascots"
          sizes="90vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Stack>
    </RBox>
  );
}
