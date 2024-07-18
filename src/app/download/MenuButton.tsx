import { useState } from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import { SimpleButton, SimpleLink } from "globalComponents";
import ChevronDownIcon from "icons/ChevronDownIcon";

interface Props {
  buttonText?: string;
  width?: string;
  menuItems: string[];
}

export default function MenuButton({ buttonText, menuItems, width }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box position={"relative"} width={width ? width : "auto"}>
      <SimpleButton
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "black",
          },
          "&:active": {
            backgroundColor: "black",
          },
          "&:focus": {
            backgroundColor: "black",
          },
        }}
      >
        <Stack direction="row" spacing={2}>
          <Typography>{buttonText ? buttonText : "Download"}</Typography>
          <ChevronDownIcon width="1rem" color="white" />
        </Stack>
      </SimpleButton>
      {open && (
        <Paper
          elevation={1}
          sx={{
            position: "absolute",
            top: 30,
            left: 0,
            width: "100%",
            zIndex: 5,
          }}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <Stack spacing={2} p={"1rem"}>
              {menuItems.map((item) => {
                return (
                  <SimpleLink href="" textColor="black" center>
                    {item}
                  </SimpleLink>
                );
              })}
            </Stack>
          </ClickAwayListener>
        </Paper>
      )}
    </Box>
  );
}
