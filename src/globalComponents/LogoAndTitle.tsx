// A Logo and Title in one link component

import { Stack, Typography } from "@mui/material";
import DiscordIcon from "icons/DiscordIcon";
import Link from "next/link";

interface Props {
  color: string;
}

export default function LogoAndTitle({ color }: Props) {
  return (
    <Link href="/">
      <Stack
        flexWrap={"nowrap"}
        direction="row"
        spacing={1}
        alignItems={"center"}
      >
        <DiscordIcon color={color} width={"2rem"} height="2rem" />
        <Typography component={"span"} sx={{ color: color }}>
          Discord
        </Typography>
      </Stack>
    </Link>
  );
}
