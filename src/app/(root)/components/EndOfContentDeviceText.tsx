import { Typography } from "@mui/material";
import getActiveDeviceText from "utils/getActiveDeviceText";

export default async function EndOfContentDeviceText() {
  const { text } = await getActiveDeviceText();
  return (
    <Typography
      className="download white-txt"
      fontSize={{ xs: "1rem", md: "1.25rem" }}
    >
      {text.button}
    </Typography>
  );
}
