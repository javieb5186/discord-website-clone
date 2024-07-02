// A Logo and title in one link component

import { SimpleLink } from "./SimpleLink";
import { Stack, Typography } from "@mui/material";
import DiscordIcon from "icons/DiscordIcon";

interface Props {
  color: string;
}

export default function LogoAndTitle({ color }: Props) {
  return (
    <SimpleLink textColor={color} href="">
      <Stack direction="row" spacing={1}>
        <DiscordIcon color={color} width={"2rem"} />
        <Typography sx={{ color: color }}>Discord</Typography>
      </Stack>
    </SimpleLink>
  );
}
