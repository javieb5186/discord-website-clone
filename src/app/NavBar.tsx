import { Stack, Grid, Typography, Link } from "@mui/material";
import DiscordIcon from "icons/DiscordIcon";
import { LinkButton } from "components";
import { SimpleLink } from "components";

export default function NavBar() {
  // links to be generated with text and href for href attribute
  const links = [
    {
      text: "Download",
      href: "",
    },
    {
      text: "Nitro",
      href: "",
    },
    {
      text: "Discover",
      href: "",
    },
    {
      text: "Safety",
      href: "",
    },

    {
      text: "Support",
      href: "",
    },
    {
      text: "Blog",
      href: "",
    },
    {
      text: "Careers",
      href: "",
    },
  ];
  return (
    <header style={{ backgroundColor: "#5865f2" }}>
      <Grid container alignItems={"center"} height={"5rem"}>
        <Grid item xs={2}>
          <SimpleLink href="" className="white-txt">
            <Stack direction="row" spacing={1}>
              <DiscordIcon width={"2rem"} />
              <Typography>Discord</Typography>
            </Stack>
          </SimpleLink>
        </Grid>
        <Grid item xs={8}>
          <Stack direction={"row"} spacing={5} justifyContent={"center"}>
            {links.map(({ text, href }) => {
              return (
                <SimpleLink key={text} href={href} className="white-txt">
                  {text}
                </SimpleLink>
              );
            })}
          </Stack>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
          <LinkButton className="white-txt black-bg">Login</LinkButton>
        </Grid>
      </Grid>
    </header>
  );
}
