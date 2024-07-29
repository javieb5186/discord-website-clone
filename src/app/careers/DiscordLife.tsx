import { Box, Typography, Stack, Grid } from "@mui/material";
import { RBox } from "globalComponents";
import discordLife from "./assets/discord-life.svg";

const list = [
  {
    title: "Discord HQ",
    body: "Our platform is our headquarters! Because we believe great work isn't tied to a physical space, most of our roles offer flexibility — whether it's from the comfort of your home (in approved locations), an inspiring office setting or a combo of both! No matter where your desk lives, we offer generous support to help you remain productive and engaged.",
  },
  {
    title: "Grow together",
    body: "Look forward to developing both professionally and personally alongside your colleagues at Discord. All of our managers go through a leadership program, and we offer enriching trainings for everyone. No matter what your interests or skills are, there's a place on our platform for you to find and build belonging.",
  },
  {
    title: "Money matters",
    body: "Discord strives to offer fair and competitive compensation packages, including equity. You'll have room to grow and be rewarded based on your contributions and impact at the company.  Take advantage of our retirement offerings (including 401k matching in the U.S.) to meet your financial goals.",
  },
  {
    title: "Health Benefits",
    body: "At Discord, we health-care about you! We offer medical, dental, vision, and mental healthcare to our employees.",
  },
  {
    title: "Family support",
    body: "Spend some quality time with the next generation with 12+ weeks parental leave, as well as fertility, adoption, and surrogacy benefits.",
  },
  {
    title: "R&R",
    body: "Stay refreshed with four weeks of PTO, 16 paid holidays each year including a week off for the winter holidays, and flexible sick time (which includes mental health days).",
  },
  {
    title: "Gender-affirming care",
    body: "Many medical insurance providers consider much of the treatment vital to one’s gender transition as cosmetic. We don’t. Use up to $25,000 for transition-related procedures.",
  },
  {
    title: "Wellness on us",
    body: "Take advantage of a $375 quarterly stipend for your gym membership or other activities to keep you feeling great.",
  },
  {
    title: "Giving back",
    body: "Whatever social cause you’re passionate about, take a day (or two) off to make an impact. While you're at it, take advantage of $1,000/year in donation matching to charitable organizations!",
  },
];

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
