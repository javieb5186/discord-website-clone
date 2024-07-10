import { PropsWithChildren } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { RBox } from "globalComponents";
import Image, { StaticImageData } from "next/image";

interface Props {
  OverlappingComponent?: JSX.Element;
  inverse: boolean;
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  body: string;
}

export default function SectionCard({
  OverlappingComponent,
  inverse,
  image,
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
          <Grid
            container
            height={{
              xs: "40rem",
              sm: "40rem",
              md: "30rem",
              lg: "40rem",
            }}
            p={"1rem"}
          >
            <Grid
              item
              xs={12}
              md={7}
              height={{ xs: "auto", md: "100%" }}
              order={inverse ? 2 : { xs: 2, md: 1 }}
              display={"flex"}
              justifyContent={{ xs: "flex-end", md: "center" }}
            >
              <Box
                display={"flex"}
                position={"relative"}
                width={"100%"}
                height={"100%"}
                justifyContent={"center"}
                alignContent={"center"}
                borderRadius={"3rem"}
                overflow={"hidden"}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  sizes="100%"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              height={{ xs: "33%", md: "100%" }}
              order={inverse ? 1 : { xs: 1, md: 2 }}
            >
              <Stack
                height={"100%"}
                px={{ xs: 4, sm: 2, md: 4, lg: 6 }}
                spacing={1}
                justifyContent={"center"}
                className="white-txt"
              >
                <Typography
                  component={"h2"}
                  fontSize={{
                    xs: "1.2rem",
                    sm: "1.6rem",
                    md: "2rem",
                    lg: "2.5rem",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  fontSize={{
                    xs: ".9rem",
                    sm: "1rem",
                    md: "1.1rem",
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
