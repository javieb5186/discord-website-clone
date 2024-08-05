import { PropsWithChildren } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { RBox } from "globalComponents";

interface Props {
  OverlappingComponent?: JSX.Element;
  inverse: boolean;
  videoSrc: string;
  title: string;
  body: string;
}

export default function SectionCard({
  OverlappingComponent,
  inverse,
  videoSrc,
  title,
  body,
  children,
}: PropsWithChildren<Props>) {
  return (
    <RBox>
      <Box
        width={"100%"}
        borderRadius={"3rem"}
        position={"relative"}
        zIndex={2}
        sx={{ outline: "4px solid #6c80e5", outlineOffset: "-2px" }}
      >
        {OverlappingComponent}
        <Box
          width={"100%"}
          borderRadius={"3rem"}
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            WebkitBackdropFilter: "blur(40px)",
            backdropFilter: "blur(40px)",
          }}
        >
          <Grid container p={"1rem"} rowGap={"3rem"}>
            <Grid item sm={12} md={7} order={inverse ? 2 : { xs: 2, md: 1 }}>
              <Box alignContent={"center"} width={"100%"} height={"100%"}>
                <Box
                  borderRadius={"3rem"}
                  overflow={"hidden"}
                  sx={{ aspectRatio: "4 / 3" }}
                >
                  <video
                    autoPlay
                    loop
                    playsInline
                    muted
                    width={"100%"}
                    height={"100%"}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  >
                    <source src={videoSrc} />
                  </video>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={12} md={5} order={inverse ? 1 : { xs: 1, md: 2 }}>
              <Stack
                spacing={1}
                paddingTop={"2rem"}
                px={"2rem"}
                className="white-txt"
                height={"100%"}
                justifyContent={"center"}
              >
                <Typography
                  component={"h2"}
                  fontSize={{
                    xs: "1.4rem",
                    sm: "1.6rem",
                    md: "1.8rem",
                    lg: "2rem",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  fontSize={{
                    xs: "1rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  }}
                >
                  {body}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          {children}
        </Box>
      </Box>
    </RBox>
  );
}
