"use client";
import { useState } from "react";
import { Box, Typography, Stack, Fab } from "@mui/material";
import { RBox } from "globalComponents";
import BackArrowIcon from "icons/BackArrowIcon";
import ForwardArrowIcon from "icons/ForwardArrowIcon";
import remoteImg1 from "./assets/remote-img-1.webp";
import { styled } from "@mui/material/styles";

const StyledFab = styled(Fab)({
  backgroundColor: "rgba(35, 39, 42, .4)",
  "&:hover": {
    backgroundColor: "rgba(35, 39, 42, .4)",
  },
  "&:active": {
    backgroundColor: "rgba(35, 39, 42, .4)",
  },
  "&:focus": {
    backgroundColor: "rgba(35, 39, 42, .4)",
  },
});

export default function Remote() {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <RBox bgColor="#2c2f33">
      <Stack spacing={"5rem"} my={"5rem"}>
        <Stack textAlign={"center"} className="white-txt">
          <Typography>
            For all roles, we're hiring people to join us in our beautiful San
            Francisco office, and for select, indicated positions, we're
            currently open to having people join our team remotely in these
            states:
          </Typography>
          <Typography>
            Alabama - Alaska - Arizona - California - Colorado - Connecticut -
            District of Columbia - Florida - Georgia - Hawaii - Idaho - Illinois
            - Indiana - Iowa - Kansas - Kentucky - Louisiana - Maine - Maryland
            - Massachusetts - Michigan - Minnesota - Mississippi - Missouri -
            Montana -Nevada - New Hampshire - New Jersey - New Mexico - New York
            - North Carolina - Ohio - Oklahoma - Oregon - Pennsylvania - Rhode
            Island - South Carolina - Tennessee - Texas - Utah - Vermont -
            Virginia - Washington - West Virginia - Wisconsin
          </Typography>
        </Stack>
        <Box
          height={{ xs: "15rem", md: "20rem" }}
          position={"relative"}
          display={{ xs: "flex", md: "block" }}
          justifyContent={"center"}
        >
          <Box position={"absolute"} top={"40%"} bottom={0} left={0}>
            <StyledFab
              onClick={() => {
                if (activeCard === 11) return setActiveCard(0);
                return setActiveCard(Math.abs(activeCard + 1));
              }}
            >
              <BackArrowIcon color="white" width="1.25rem" />
            </StyledFab>
          </Box>
          <Box position={"absolute"} top={"40%"} right={0}>
            <StyledFab
              onClick={() => {
                if (activeCard === 0) return setActiveCard(11);
                return setActiveCard(Math.abs(activeCard - 1));
              }}
            >
              <ForwardArrowIcon color={"white"} width="1.25rem" />
            </StyledFab>
          </Box>
          {Array.from({ length: 12 }).map((_, index) => {
            const range = Math.abs((activeCard + index) % 12);
            return (
              <Box
                key={index}
                position={"absolute"}
                height={"100%"}
                className={`animate-img${range + 1}`}
                padding={"1rem"}
              >
                <img
                  src={remoteImg1.src}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            );
          })}
        </Box>
      </Stack>
    </RBox>
  );
}
