// A Custom MUI Link that accepts some props with a simple style.

"use client";
import Link from "next/link";
import { PropsWithChildren } from "react";

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
  const style = { ...align, color: textColor, height: height };
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}
