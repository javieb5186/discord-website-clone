// A section to be rendered in root route

"use client";
import { Box, Stack, Typography } from "@mui/material";
import { RBox } from "globalComponents";
import { SimpleButton } from "globalComponents";
import useTextByDevice from "hooks/useTextByDevice";
import DownloadIcon from "icons/DownloadIcon";
import contentFooterImg from "assets/content-footer.webp";
import Image from "next/image";

export default function EndOfContent() {
  const [downloadText] = useTextByDevice();
  return (
    <RBox bgGradient={"radial-gradient(at 100% 0%, #3255eb, #000027)"}>
      <Stack width={"100%"} justifyContent={"center"} spacing={5}>
        <Box component={"h2"} className="white-txt" textAlign="center">
          <Typography fontSize={{ xs: "1.5rem", sm: "2.25rem", md: "3rem" }}>
            YOU CAN'T SCROLL ANYMORE.
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
              <Typography
                className="download white-txt"
                fontSize={{ xs: "1rem", md: "1.25rem" }}
              >
                {downloadText}
              </Typography>
            </Stack>
          </SimpleButton>
        </Box>
        <Image
          src={contentFooterImg}
          alt="Discord text and it's mascots"
          sizes="100%"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Stack>
    </RBox>
  );
}
