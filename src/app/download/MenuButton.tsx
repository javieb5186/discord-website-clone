import { Box, Paper, Stack } from "@mui/material";
import { SimpleLink } from "globalComponents";

interface Props {
  width?: string;
  menuItems: string[];
}

export default function MenuButton({ menuItems, width }: Props) {
  return (
    <Paper
      elevation={1}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 5,
      }}
    >
      <Stack spacing={2} p={"1rem"}>
        {menuItems.map((item) => {
          return (
            <SimpleLink key={item} href="" textColor="black" center>
              {item}
            </SimpleLink>
          );
        })}
      </Stack>
    </Paper>
  );
}
