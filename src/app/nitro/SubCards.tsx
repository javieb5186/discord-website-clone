// subscription cards
import {
  Box,
  Stack,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { SimpleButton } from "globalComponents";
import UploadIcon from "icons/UploadIcon";

export default function SubCards() {
  const cards = [
    {
      title: "Nitro Basic",
      backgroundColor: "#4157d5",
      features: [
        {
          id: 1,
          text: "50Mb Uploads",
          Icon: UploadIcon,
        },
        {
          id: 2,
          text: "Custom Emoji anywhere",
          Icon: UploadIcon,
        },
        {
          id: 3,
          text: "Unlimited super reactions",
          Icon: UploadIcon,
        },
        {
          id: 4,
          text: "Special Nitro Badge on your profile",
          Icon: UploadIcon,
        },
      ],
    },
    {
      title: "Nitro",
      backgroundImage: "linear-gradient(to top left, #ac5d8b, #8647c6)",
      features: [
        {
          id: 1,
          text: "500Mb Uploads",
          Icon: UploadIcon,
        },
        {
          id: 2,
          text: "Custom Emoji anywhere",
          Icon: UploadIcon,
        },
        {
          id: 3,
          text: "Unlimited super reactions",
          Icon: UploadIcon,
        },
        {
          id: 4,
          text: "HD video streaming",
          Icon: UploadIcon,
        },
        {
          id: 5,
          text: "HD video streaming",
          Icon: UploadIcon,
        },
        {
          id: 6,
          text: "HD video streaming",
          Icon: UploadIcon,
        },
      ],
    },
  ];
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
        top={{ xs: -500, lg: -200 }}
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
