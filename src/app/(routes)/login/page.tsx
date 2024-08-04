"use client";
import { SyntheticEvent, useEffect, useState } from "react";
import {
  Box,
  Stack,
  Grid,
  Typography,
  Input,
  FormControl,
  Button,
  Collapse,
  Alert,
} from "@mui/material";
import LogoAndTitle from "globalComponents/LogoAndTitle";
import { LinkInText, RBox } from "globalComponents";
import Link from "next/link";
import loginBg from "./assets/login-bg.svg";
import "./page.css";

const bR = ".3rem";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const passwordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,16}$/;

interface Props {
  openAlert: () => void;
}

function Form({ openAlert }: Props) {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [emailPhoneError, setEmailPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    let validEmail = false,
      validPhone = false,
      validPassword;

    validEmail = emailRegex.test(emailPhone);

    if (!validEmail) validPhone = phoneRegex.test(emailPhone);

    validPassword = passwordRegex.test(password);

    console.log(emailPhone);
    console.log(password);

    console.log("Valid Email? ", validEmail);
    console.log("Valid Phone? ", validPhone);
    console.log("Valid Password? ", validPassword);

    const validLogin = validEmail || validPhone;

    const success = validLogin && validPassword;

    if (success) {
      openAlert();
    } else {
      setEmailPhoneError(!validLogin);
      setPasswordError(!validPassword);
    }
  };
  return (
    <Box component={"form"} onSubmit={handleSubmit}>
      <Stack spacing={"1rem"}>
        <FormControl>
          <Stack spacing={".2rem"}>
            <label
              htmlFor="email/phone"
              style={{ color: "#acb3ba", fontSize: ".8rem" }}
            >
              EMAIL ADDRESS OR PHONE NUMBER{" "}
              <span
                style={{
                  color: "red",
                  verticalAlign: "text-top",
                }}
              >
                *
              </span>
            </label>
            <Box bgcolor={"#1d1f23"} px={"1rem"}>
              <Input
                id="email/phone"
                disableUnderline
                fullWidth
                autoComplete="off"
                onChange={(e) => {
                  if (emailPhoneError) setEmailPhoneError(false);
                  setEmailPhone(e.currentTarget.value);
                }}
                sx={{ color: "white" }}
              />
            </Box>
            {emailPhoneError && (
              <Typography color={"red"} component={"span"} fontSize={".8rem"}>
                Invalid Email or Phone Number.
              </Typography>
            )}
          </Stack>
        </FormControl>
        <FormControl>
          <Stack spacing={".2rem"}>
            <label
              htmlFor="password"
              style={{ color: "#acb3ba", fontSize: ".8rem" }}
            >
              PASSWORD{" "}
              <span
                style={{
                  color: "red",
                  verticalAlign: "text-top",
                }}
              >
                *
              </span>
            </label>
            <Box bgcolor={"#1d1f23"} px={"1rem"}>
              <Input
                id="password"
                error={passwordError}
                disableUnderline
                fullWidth
                type="password"
                onChange={(e) => {
                  if (passwordError) setPasswordError(false);
                  setPassword(e.currentTarget.value);
                }}
                sx={{ color: "white" }}
              />
            </Box>
            {passwordError && (
              <Typography color={"red"} component={"span"} fontSize={".8rem"}>
                Invalid Password.
              </Typography>
            )}
          </Stack>
        </FormControl>
        <Link href={""} className="login-link">
          Forgot your password?
        </Link>
        <FormControl>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type={"submit"}
            sx={{ borderRadius: bR, textTransform: "none" }}
          >
            <Typography textAlign={"center"}>Log in</Typography>
          </Button>
        </FormControl>
        <Box color={"#acb3ba"} style={{ fontSize: ".8rem" }}>
          <LinkInText
            text={"Need an account? Register"}
            color={"#00a8fb"}
            fontSize=".8rem"
            links={[{ link: "Register", href: "" }]}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default function Login() {
  const [alert, setAlert] = useState(false);

  const openAlert = () => setAlert(true);

  useEffect(() => {
    if (alert) {
      const timeOut = setTimeout(() => setAlert(false), 3000);

      return () => clearTimeout(timeOut);
    }
  }, [alert]);

  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      sx={{
        backgroundColor: { xs: "#313339", sm: "none" },
        backgroundImage: { xs: "none", sm: `url(${loginBg.src})` },
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box position={"relative"}>
        <Box width={"100%"} position={"absolute"} top={10} left={0} px={"1rem"}>
          <Collapse in={alert}>
            <Alert severity="success">Successful Form</Alert>
          </Collapse>
        </Box>
      </Box>
      <Box
        pl={"1rem"}
        pt={"1rem"}
        display={"flex"}
        justifyContent={{ xs: "center", sm: "flex-start" }}
      >
        <LogoAndTitle color="white" />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        width={"100%"}
        height={"100%"}
      >
        <RBox>
          <Stack spacing={{ xs: "1rem", sm: "5rem" }}>
            <Box display={"flex"} justifyContent={"center"}>
              <Box
                bgcolor={{ xs: "none", sm: "#313339" }}
                borderRadius={bR}
                p={"1rem"}
                width={{ xs: "100%", sm: "25rem", md: "50rem" }}
              >
                <Grid container p={"1rem"} columnGap={"2rem"}>
                  <Grid item xs={12} md={7}>
                    <Stack spacing={"1rem"}>
                      <Typography
                        fontSize={"1.25rem"}
                        color={"white"}
                        textAlign={"center"}
                      >
                        Welcome back
                      </Typography>
                      <Typography color={"#acb3ba"} textAlign={"center"}>
                        We&apos;re so excitied to see you again
                      </Typography>
                      <Form openAlert={openAlert} />
                    </Stack>
                  </Grid>
                  <Grid item md display={{ xs: "none", md: "flex" }}>
                    <Stack
                      alignItems={"center"}
                      spacing={"1rem"}
                      color={"white"}
                      textAlign={"center"}
                    >
                      <Box
                        bgcolor={"white"}
                        borderRadius={bR}
                        width={"10rem"}
                        height={"10rem"}
                      />
                      <Typography fontSize={"1.25rem"}>
                        Login with QR code
                      </Typography>
                      <Typography sx={{ color: "#acb3ba" }}>
                        Scan this with the <b>Discord mobile app</b> to log in
                        instantly
                      </Typography>
                      <Link href={""} className="login-link">
                        Or, sign in with passkey
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Stack>
        </RBox>
      </Box>
    </Box>
  );
}
