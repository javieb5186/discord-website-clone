import { Grid, Typography, Stack, Box } from "@mui/material";
import { RBox } from "components";
import Image from "next/image";
import chatImg from "assets/chat-with-wumpus.png";
import partyWumpus from "assets/party-wumpus.gif";

export default function GroupChatContent() {
  return (
    <Box
      width={"100%"}
      p={{ xs: "0rem 0rem 3rem 0rem", sm: "10rem 0rem" }}
      sx={{
        backgroundImage: "radial-gradient(at 100% 0%, #3255eb, #000027)",
      }}
      display={"flex"}
      justifyContent={"center"}
    >
      <RBox>
        <Box
          maxWidth={"100%"}
          borderRadius={"3rem"}
          position={"relative"}
          zIndex={2}
          sx={{ outline: "4px solid #6c80e5", outlineOffset: "-2px" }}
        >
          <Box
            position={"absolute"}
            width={{ xs: "6rem", sm: "8rem", md: "10rem" }}
            height={{ xs: "3rem", sm: "5rem", md: "7rem" }}
            marginLeft={{ xs: "50%", sm: "60%", md: "65%" }}
            top={{ xs: "-3rem", sm: "-5rem", md: "-6.6rem" }}
            zIndex={-1}
          >
            <Image
              src={partyWumpus}
              alt="Discord mascot"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box
            width={"100%"}
            borderRadius={"3rem"}
            sx={{
              background: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <Grid
              container
              p={"1rem"}
              rowGap={{ xs: "1rem", sm: "2rem" }}
              columnSpacing={"1rem"}
            >
              <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
                <Box
                  display={"flex"}
                  position={"relative"}
                  width={"100%"}
                  height={{ xs: "300px", sm: "450px", md: "600px" }}
                  justifyContent={"center"}
                  borderRadius={"3rem"}
                  overflow={"hidden"}
                >
                  <Image
                    src={chatImg}
                    alt="Enjoyable chat through discord app"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
                <Stack
                  height={"100%"}
                  spacing={1}
                  px={2}
                  justifyContent={"center"}
                  className="white-txt"
                >
                  <Typography
                    component={"h2"}
                    fontSize={{
                      xs: "1.5rem",
                      sm: "2.5rem",
                      md: "3rem",
                    }}
                  >
                    MAKE YOUR GROUP CHATS MORE FUN
                  </Typography>
                  <Typography
                    fontSize={{
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                    }}
                  >
                    Use custom emoji, stickers, soundboard effects and more to
                    add your personality to your voice, video, or text chat. Set
                    your avatar and a custom status, and write your own profile
                    to show up in chat your way.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </RBox>
    </Box>
  );
}
