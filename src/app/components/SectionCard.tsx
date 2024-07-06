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
}: Props) {
  return (
    <RBox>
      <Box
        maxWidth={"100%"}
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
            p={"3rem 1rem 1rem"}
            rowGap={{ xs: "1rem", sm: "3rem" }}
          >
            <Grid item xs={12} md={7} order={inverse ? 2 : { xs: 2, md: 1 }}>
              <Box
                display={"flex"}
                position={"relative"}
                width={"100%"}
                height={{ xs: "200px", sm: "400px" }}
                justifyContent={"center"}
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
            <Grid item xs={12} md={5} order={inverse ? 1 : { xs: 1, md: 2 }}>
              <Stack
                height={"100%"}
                px={{ xs: 4, md: 2 }}
                spacing={1}
                justifyContent={"center"}
                className="white-txt"
              >
                <Typography
                  component={"h2"}
                  fontSize={{
                    xs: "1.25rem",
                    sm: "2rem",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  fontSize={{
                    xs: "1rem",
                    sm: "1.2rem",
                  }}
                >
                  {body}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </RBox>
  );
}
