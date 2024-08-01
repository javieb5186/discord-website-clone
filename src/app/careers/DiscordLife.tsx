import { Box, Typography, Stack, Grid } from "@mui/material";
import { RBox } from "globalComponents";
import discordLife from "./assets/discord-life.svg";
import { list } from "./data";

export default function DiscordLife() {
  return (
    <RBox bgColor="#5764f3">
      <Stack className="white-txt" rowGap={"2rem"} my={"5rem"}>
        <Typography
          fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }}
        >
          Experience Life @ Discord
        </Typography>
        <Grid container spacing={{ xs: "2rem", lg: "4rem" }}>
          {list.map(({ title, body }, index) => {
            return (
              <Grid key={title} item xs={12} sm={6} lg={4}>
                <img src={discordLife.src} alt="" />
                <Typography
                  fontSize={{
                    xs: "1.1rem",
                    sm: "1.2rem",
                    md: "1.3rem",
                    lg: "1.4rem",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  fontSize={{
                    xs: ".9rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  }}
                >
                  {body}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </RBox>
  );
}
