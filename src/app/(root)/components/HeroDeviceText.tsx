import { Typography } from "@mui/material";
import getActiveDeviceText from "utils/getActiveDeviceText";

export default async function HeroDeviceText() {
  const { text } = await getActiveDeviceText();
  return (
    <Typography
      className="download black-txt"
      fontSize={{ xs: "1rem", md: "1.25rem" }}
    >
      {text.button}
    </Typography>
  );
}
