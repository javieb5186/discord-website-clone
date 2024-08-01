// Subscription cards
import {
  Box,
  Stack,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { SimpleButton } from "globalComponents";
import { cards } from "./data";

export default function SubCards() {
  return (
    <Box
      width="100%"
      display="flex"
      position="relative"
      justifyContent="center"
    >
      <Stack
        width="100%"
        spacing={2}
        rowGap={2}
        justifyContent="space-between"
        position="absolute"
        top={{ xs: -500, lg: -100 }}
        left={0}
        direction={{ lg: "row" }}
      >
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              sx={{
                borderRadius: "1rem",
                width: { xs: "100%", lg: "50%" },
                backgroundImage: card.backgroundImage,
                backgroundColor: card.backgroundColor,
              }}
            >
              <CardContent
                className="white-txt"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "25rem",
                }}
              >
                <CardHeader title={card.title} sx={{ padding: "1rem 0" }} />
                <Stack spacing={2}>
                  {card.features.map(({ id, text, Icon }) => {
                    return (
                      <Stack direction="row" spacing={2} key={id}>
                        <Icon width="20px" color="white" />
                        <Box display="flex" alignItems="center">
                          <Typography>{text}</Typography>
                        </Box>
                      </Stack>
                    );
                  })}
                </Stack>
                <Box mt="auto">
                  <SimpleButton
                    className="important-white-bg important-black-txt"
                    variant="contained"
                    fullWidth
                    sx={{ height: "3rem", borderRadius: "3rem" }}
                  >
                    Subscribe
                  </SimpleButton>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
}
