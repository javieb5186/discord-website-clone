// This is a component that takes a body of text and
// specified links and converts it into a body of text
// with those links

import { Typography, Link } from "@mui/material";
import { Fragment } from "react";

interface Props {
  text: string;
  links: {
    link: string;
    href: string;
  }[];
}

export default function LinkInText({ text, links }: Props) {
  return (
    <Typography textAlign="left">
      {links.map(({ link, href }, index) => {
        return (
          <Fragment key={index}>
            {text.slice(0, text.indexOf(`${link}`))}
            <Link
              href={href}
              sx={{
                textDecoration: "underline",
                textDecorationColor: "white",
                color: "white",
              }}
            >
              {link}
            </Link>
            {text.slice(text.lastIndexOf(`${link}`) + link.length)}
          </Fragment>
        );
      })}
    </Typography>
  );
}
