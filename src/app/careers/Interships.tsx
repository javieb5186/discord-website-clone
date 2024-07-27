import { Box, Stack, Typography, Grid } from "@mui/material";
import { RBox, LinkInText } from "globalComponents";
import intership1 from "./assets/intership-1.webp";
import intership2 from "./assets/intership-2.webp";
import intership3 from "./assets/intership-3.webp";
import intershipFooter from "./assets/intership-footer.svg";

const cardText = {
  text: "Join us for an unforgettable summer at Discord! You’ll be working on real features that impact millions of people, receive close mentorship, and learn from leaders in the industry. We are looking for undergraduate and graduate students of all levels. Check out our listings, and read more about our program.",
  links: [
    {
      link: "read more about our program.",
      href: "",
    },
  ],
};

const footerText = {
  text: "Check out our inclusion, diversity and purpose efforts, company principles, or learn more about the Life @ Discord experience!",
  links: [
    {
      link: "inclusion, diversity and purpose efforts",
      href: "",
    },
    {
      link: "principles",
      href: "",
    },
    {
      link: "Life @ Discord",
      href: "",
    },
  ],
};

export default function Internships() {
  return (
    <RBox bgColor="white">
      <Stack spacing={{ xs: "2rem", md: "5rem" }} my={"5rem"}>
        <Stack spacing={"1rem"} textAlign={{ xs: "left", md: "center" }}>
          <Typography
            component={"h3"}
            fontSize={{
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
            }}
          >
            Come build belonging with us
          </Typography>
          <Typography>
            Discord is working toward an inclusive world where no one feels like
            an outsider, where genuine human connection is a click, text chat,
            or voice call away. A place where everyone can find belonging.
            Challenging? Heck yes. Rewarding? Double heck yes. It’s a mission
            that gives us the chance to positively impact millions of people all
            over the world.
          </Typography>
          <Typography>
            So if this strikes a chord, and you’re equally comfortable
            communicating in memes and gifs as you are in code or decks, come
            build belonging with us!
          </Typography>
        </Stack>
        <Grid container columnGap={"2rem"} rowSpacing={"2rem"}>
          <Grid item xs={12} md>
            <Stack height="100%" justifyContent="center" spacing={"1rem"}>
              <Typography
                component={"h4"}
                fontSize={{
                  xs: "1.25rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                }}
              >
                Work with people who care.
              </Typography>
              <Typography>
                Our people, much like our users, can’t be put in a box. The
                quirky and unique cast of characters that work together at
                Discord may be intrepid travelers from all walks of life, but
                there’s a reason we’ve all ended up here. We care about each
                other, the work we do, and the future we’re building — like, a
                lot. We pull our own weight and treat each other with extreme
                empathy. <b>No cogs or jerks allowed.</b>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md>
            <Box width={"100%"} borderRadius={"1rem"} overflow={"clip"}>
              <img
                src={intership1.src}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ transform: "scale(1.1)" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container columnGap={"2rem"} rowSpacing={"2rem"}>
          <Grid item xs={12} md order={{ xs: 2, md: 1 }}>
            <Box width={"100%"} borderRadius={"1rem"} overflow={"clip"}>
              <img
                src={intership2.src}
                alt=""
                width={"100%"}
                style={{ transform: "scale(1.1)" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md order={{ xs: 1, md: 2 }}>
            <Stack height="100%" justifyContent="center" spacing={"1rem"}>
              <Typography
                component={"h4"}
                fontSize={{
                  xs: "1.25rem",
                  sm: "1.5rem",
                  md: "1.75rem",
                  lg: "2rem",
                }}
              >
                Join a culture that builds belonging.
              </Typography>
              <Typography>
                Imagine a workplace where everyone belongs. At Discord, we
                aren't just imagining this place, we’re creating it. We’re
                building an inclusive, diverse, and welcoming space that
                reflects the world we live, play, and work in — because we know
                that with diversity comes better ideas, a better product, a
                better work environment, and ultimately a better company.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Box
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"whitesmoke"}
          borderRadius={"1rem"}
        >
          <Grid
            container
            columnGap={"2rem"}
            rowSpacing={"2rem"}
            padding={"2rem"}
          >
            <Grid item xs={12} md>
              <Stack height="100%" justifyContent="center" spacing={"1rem"}>
                <Typography
                  component={"h4"}
                  fontSize={{
                    xs: "1.25rem",
                    sm: "1.5rem",
                    md: "1.75rem",
                    lg: "2rem",
                  }}
                >
                  Internships
                </Typography>
                <LinkInText
                  color="#5865f2"
                  text={cardText.text}
                  links={cardText.links}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md>
              <Box width={"100%"} borderRadius={"1rem"} overflow={"clip"}>
                <img
                  src={intership3.src}
                  alt=""
                  width={"100%"}
                  style={{ transform: "scale(1.1)" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Stack
          justifyContent={"center"}
          textAlign={"center"}
          position="relative"
          height={"10rem"}
        >
          <Box
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            height={"5rem"}
          >
            <img
              src={intershipFooter.src}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </Box>
          <Typography
            component={"h6"}
            fontSize={{
              xs: "1.25rem",
              sm: "1.5rem",
              md: "1.75rem",
              lg: "2rem",
            }}
          >
            Want to find out more?
          </Typography>
          <LinkInText
            color="#5865f2"
            text={footerText.text}
            links={footerText.links}
          />
        </Stack>
      </Stack>
    </RBox>
  );
}
