import { Box, Stack, Typography } from "@mui/material";
import { SimpleButton, RBox } from "globalComponents";

export default function Banner() {
  return (
    <Box sx={{ backgroundColor: "#5764f3" }}>
      <RBox>
        <Stack
          spacing={3}
          height="15rem"
          justifyContent="center"
          textAlign="center"
        >
          <Typography
            component="h4"
            className="white-txt"
            fontSize={{
              xs: "1.25rem",
              sm: "1.5rem",
              md: "1.75rem",
              lg: "2rem",
            }}
          >
            Have a server you want to add to Discovery?
          </Typography>
          <Box>
            <SimpleButton
              variant="contained"
              sx={{
                height: { xs: "2rem", md: "3rem" },
                borderRadius: { xs: "1rem", md: "2rem" },
                backgroundColor: "black",
              }}
            >
              <Typography
                className="white-txt"
                mx={"1rem"}
                fontSize={{ xs: "1rem", md: "1.5rem" }}
              >
                Make Your Community Public
              </Typography>
            </SimpleButton>
          </Box>
        </Stack>
      </RBox>
    </Box>
  );
}
