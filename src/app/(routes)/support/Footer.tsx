import { Box, Stack, Grid } from "@mui/material";
import { RBox, LogoAndTitle } from "globalComponents";
import Link from "next/link";
import { footerDevices, browsers, ios, android, windows, osx } from "./assets";

export default function Footer() {
  return (
    <RBox bgColor="black">
      <Stack
        width={"100%"}
        my={"2rem"}
        alignItems={"center"}
        spacing={{ xs: "1rem", sm: "2rem" }}
      >
        <Link
          href=""
          className="white-txt"
          style={{
            textAlign: "center",
            width: "10rem",
            backgroundColor: "#3BA55C",
            padding: "1rem",
            borderRadius: "2rem",
          }}
        >
          Learn more
        </Link>
        <Box
          width={"100%"}
          position={"relative"}
          display={{ xs: "none", sm: "block" }}
        >
          <img src={footerDevices.src} alt="" width={"100%"} />
          <Box
            position={"absolute"}
            width={"100%"}
            top={"40%"}
            left={"10%"}
            zIndex={1}
          >
            <Link href="" className="device">
              <img src={browsers.src} alt="" width={"25%"} height={"25%"} />
            </Link>
          </Box>
          <Box
            position={"absolute"}
            width={"100%"}
            top={"45%"}
            left={"58%"}
            zIndex={4}
          >
            <Link href="" className="device">
              <img src={ios.src} alt="" width={"5%"} height={"5%"} />
            </Link>
          </Box>
          <Box
            position={"absolute"}
            width={"100%"}
            top={"45%"}
            left={"46.5%"}
            zIndex={3}
          >
            <Link href="" className="device">
              <img src={android.src} alt="" width={"5%"} height={"5%"} />
            </Link>
          </Box>
          <Box
            position={"absolute"}
            width={"100%"}
            top={"40%"}
            left={"75%"}
            zIndex={5}
          >
            <Link href="" className="device">
              <img src={windows.src} alt="" width={"7%"} height={"7%"} />
              <img
                src={osx.src}
                alt=""
                width={"7%"}
                height={"7%"}
                style={{ marginLeft: "1rem" }}
              />
            </Link>
          </Box>
        </Box>
        <Grid container className="white-txt" rowSpacing={"2rem"}>
          <Grid item xs={12} sm={4}>
            <LogoAndTitle color={"white"} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={"1rem"}>
              <Link href={""}>Download</Link>
              <Link href={""}>Help & Support</Link>
              <Link href={""}>Feedback</Link>
              <Link href={""}>Status</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack spacing={"1rem"}>
              <Link href={""}>Company</Link>
              <Link href={""}>
                Jobs -{" "}
                <Box component={"span"} sx={{ color: "#3BA55C" }}>
                  We're hiring
                </Box>
              </Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Terms & Privacy</Link>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </RBox>
  );
}
