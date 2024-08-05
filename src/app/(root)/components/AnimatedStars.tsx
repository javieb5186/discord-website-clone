import { Box } from "@mui/material";
import SmallStarSvg from "./SmallStarSvg";
import LargeStarSvg from "./LargeStarSvg";
import { groupOfStars } from "../assets";

interface Props {
  top: number;
  left: number;
  className:
    | "twinkle-star-1"
    | "twinkle-star-2"
    | "twinkle-star-3"
    | "twinkle-star-4"
    | "twinkle-star-5"
    | "twinkle-star-6";
}

function SmallStar({ top, left, className }: Props) {
  return (
    <Box position={"relative"} top={top + "%"} left={left + "%"}>
      <SmallStarSvg width="8px" className={className} />
    </Box>
  );
}

function LargeStar({ top, left, className }: Props) {
  return (
    <Box position={"relative"} top={top + "%"} left={left + "%"}>
      <LargeStarSvg width="20px" className={className} />
    </Box>
  );
}

export default function AnimatedBg() {
  const smallStars: Props[] = [
    {
      top: 5,
      left: 1,
      className: "twinkle-star-1",
    },
    {
      top: 7,
      left: 7,
      className: "twinkle-star-5",
    },
    {
      top: 9,
      left: 50,
      className: "twinkle-star-4",
    },
    {
      top: 14,
      left: 25,
      className: "twinkle-star-6",
    },
    {
      top: 19,
      left: 37,
      className: "twinkle-star-2",
    },
    {
      top: 22,
      left: 45,
      className: "twinkle-star-6",
    },
    {
      top: 27,
      left: 40,
      className: "twinkle-star-1",
    },
    {
      top: 30,
      left: 10,
      className: "twinkle-star-1",
    },
    {
      top: 33,
      left: 80,
      className: "twinkle-star-1",
    },
  ];

  const largeStars: Props[] = [
    {
      top: 3,
      left: 25,
      className: "twinkle-star-3",
    },
    {
      top: 7,
      left: 20,
      className: "twinkle-star-1",
    },
    {
      top: 15,
      left: 30,
      className: "twinkle-star-6",
    },
    {
      top: 10,
      left: 30,
      className: "twinkle-star-2",
    },
    {
      top: 20,
      left: 52,
      className: "twinkle-star-3",
    },
    {
      top: 23,
      left: 5,
      className: "twinkle-star-5",
    },
    {
      top: 27,
      left: 75,
      className: "twinkle-star-2",
    },
    {
      top: 30,
      left: 2,
      className: "twinkle-star-4",
    },
    {
      top: 33,
      left: 33,
      className: "twinkle-star-1",
    },
  ];

  const stars = [smallStars, largeStars];

  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      zIndex={-1}
      width={"100%"}
      height={"100%"}
      sx={{
        backgroundImage: "url(" + groupOfStars.src + ")",
        backgroundSize: "cover",
      }}
    >
      {stars.map((star) => {
        return star.map(({ top, left, className }, index) => {
          return index === 0 ? (
            <SmallStar
              key={index}
              top={top}
              left={left}
              className={className}
            />
          ) : (
            <LargeStar
              key={index}
              top={top}
              left={left}
              className={className}
            />
          );
        });
      })}
    </Box>
  );
}
