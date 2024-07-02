// A link with a simple style using MUI
// Accepts a color

"use client";

import { Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PropsWithChildren } from "react";

const UnstyledLink = styled(Link)({
  textDecoration: "none",
});

interface Props {
  textColor: string;
  href: string;
  height?: string;
  center?: boolean;
}

export function SimpleLink({
  textColor,
  href,
  height,
  center,
  children,
}: PropsWithChildren<Props>) {
  const align = center ? { display: "flex", alignItems: "center" } : {};
  const sx = { ...align, color: textColor, height: height };
  return (
    <UnstyledLink href={href} sx={sx}>
      {children}
    </UnstyledLink>
  );
}
