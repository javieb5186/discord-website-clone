// This is a component that takes a body of text and
// specified links and converts it into a body of text
// with those links

import { Typography } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

interface Props {
  text: string;
  color: string;
  hasUnderline?: boolean;
  links: {
    link: string;
    href: string;
  }[];
  fontSize?: string;
}

interface OrderedText {
  text: string;
  link?: string;
}

export default function LinkInText({
  text,
  links,
  color,
  fontSize,
  hasUnderline = false,
}: Props) {
  let linkStartIndex = 0;
  let linkLastIndex = 0;
  let nextText = text;

  let orderedText: OrderedText[] = [];

  links.forEach(({ link }, index) => {
    linkStartIndex = nextText.indexOf(`${link}`);
    linkLastIndex = nextText.indexOf(`${link}`) + link.length;
    const linkCutout = nextText.slice(linkStartIndex, linkLastIndex);

    let regularText = nextText.slice(0, linkStartIndex);
    nextText = nextText.slice(linkLastIndex, nextText.length);
    orderedText.push({ text: regularText, link: linkCutout });
    if (index + 1 === links.length) {
      orderedText.push({ text: nextText });
    }
  });

  return (
    <Typography fontSize={fontSize}>
      {orderedText.map(({ link, text }, index) => {
        return (
          <Fragment key={index}>
            {text}
            <Link
              href={""}
              style={{
                textDecoration: hasUnderline ? "underline" : "none",
                textDecorationColor: color,
                color: color,
                fontSize: fontSize,
              }}
            >
              {link}
            </Link>
          </Fragment>
        );
      })}
    </Typography>
  );
}
