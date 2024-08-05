"use client";
import { useState } from "react";
import { Box, Typography, Stack, Grid, Fab } from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import { ForwardArrowIcon, BackArrowIcon } from "icons";
import { filters, carousalCards } from "./data";
import { wave } from "./assets";
import Image from "next/image";

export default function Jobs() {
  const [activeCard, setActiveCard] = useState(0);
  const [filter, setFilter] = useState(-1);

  let newFilters;

  if (filter === -1) {
    newFilters = filters;
  } else newFilters = filters.filter((category, index) => filter === index);

  return (
    <>
      <Box width={"100%"} height={"7rem"} bgcolor={"whitesmoke"}>
        <Image src={wave} alt="" />
      </Box>
      <RBox bgColor="whitesmoke">
        <Stack spacing={"5rem"}>
          <Stack spacing={"1rem"}>
            <Typography
              component={"h3"}
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }}
            >
              We&apos;d love to work with someone like you.
            </Typography>
            <Stack>
              <Typography
                component={"h4"}
                fontSize={{
                  xs: "1.3rem",
                  sm: "1.6rem",
                  md: "1.9rem",
                  lg: "2.2rem",
                }}
              >
                Filter
              </Typography>
              <Stack
                direction="row"
                flexWrap={{ xs: "nowrap", md: "wrap" }}
                py={"1rem"}
                spacing={"1rem"}
                useFlexGap
                sx={{
                  overflowX: "scroll",
                }}
              >
                <SimpleButton
                  variant="contained"
                  onClick={() => {
                    setFilter(-1);
                  }}
                  sx={{
                    minWidth: "auto",
                    padding: {
                      xs: "1.25rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                      lg: "2rem",
                    },
                    borderRadius: {
                      xs: "1.25rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                      lg: "2rem",
                    },
                  }}
                >
                  <Typography
                    noWrap
                    fontSize={{
                      xs: "1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                      lg: "1.75rem",
                    }}
                  >
                    Featured
                  </Typography>
                </SimpleButton>
                {filters.map((filter, index) => {
                  return (
                    <SimpleButton
                      key={filter.category}
                      variant="contained"
                      onClick={() => {
                        setFilter(index);
                      }}
                      sx={{
                        minWidth: "auto",
                        padding: {
                          xs: "1.25rem",
                          sm: "1.5rem",
                          md: "1.75rem",
                          lg: "2rem",
                        },
                        borderRadius: {
                          xs: "1.25rem",
                          sm: "1.5rem",
                          md: "1.75rem",
                          lg: "2rem",
                        },
                      }}
                    >
                      <Typography
                        noWrap
                        fontSize={{
                          xs: "1rem",
                          sm: "1.25rem",
                          md: "1.5rem",
                          lg: "1.75rem",
                        }}
                      >
                        {filter.category}
                      </Typography>
                    </SimpleButton>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
          {newFilters.map((filter) => {
            return (
              <Stack key={filter.category} rowGap={"2rem"}>
                <Typography fontSize={{ xs: "1.5rem", md: "3rem" }}>
                  {filter.category}
                </Typography>
                <Grid
                  container
                  columnSpacing={"1rem"}
                  rowSpacing={"1rem"}
                  gridTemplateRows={{
                    xs: "1fr",
                    md: "1fr 1fr",
                    lg: "1fr 1fr 1fr",
                  }}
                >
                  {filter.jobs.map(({ title, location, tag }) => {
                    return (
                      <Grid item xs={12} md={6} lg={4} key={title}>
                        <Box
                          height={"100%"}
                          bgcolor="white"
                          borderRadius={"1rem"}
                        >
                          <Stack
                            height={"100%"}
                            justifyContent={"space-between"}
                            spacing={"2rem"}
                            p={"1rem"}
                          >
                            <Typography
                              fontSize={{
                                xs: "1.25rem",
                                sm: "1.5rem",
                                md: "1.75rem",
                                lg: "2rem",
                              }}
                            >
                              {title}
                            </Typography>
                            <Stack
                              direction={"row"}
                              justifyContent="space-between"
                              alignItems={"flex-end"}
                              spacing={"1rem"}
                            >
                              <Typography component={"span"}>
                                {location}
                              </Typography>
                              <Image
                                src={tag}
                                alt=""
                                style={{ width: "36px" }}
                              />
                            </Stack>
                          </Stack>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            );
          })}
          <Stack spacing={"1rem"}>
            <Typography
              fontSize={{
                xs: "1.6rem",
                sm: "2.1rem",
                md: "2.6rem",
              }}
            >
              Inclusion, Diversity and Purpose at Discord
            </Typography>
            <Grid container columnGap={"2rem"} rowSpacing={"1rem"}>
              <Grid item xs={12} md order={{ xs: 2, sm: 1 }}>
                <Stack spacing={"1rem"}>
                  <Typography
                    fontSize={{
                      xs: "1.6rem",
                      sm: "2.1rem",
                      md: "2.6rem",
                    }}
                  >
                    Belonging from the Inside Out
                  </Typography>
                  <Typography>
                    Our internal programs include but are not limited to
                    unconscious bias training, employee resource groups,
                    inclusive hiring practices, diversity sourcing strategies,
                    and partnerships with high-impact organizations that drive
                    equity. As we build our external strategy, we empower our
                    employees to be a force for good in the world and support
                    causes they are passionate about.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md order={{ xs: 1, sm: 2 }}>
                <Stack spacing={"1rem"}>
                  <Typography
                    fontSize={{
                      xs: "1.6rem",
                      sm: "2.1rem",
                      md: "2.6rem",
                    }}
                  >
                    Our Employee Resource Groups
                  </Typography>
                  <Typography>
                    Discord’s Employee Resource Groups (ERGs) are employee-led
                    organizations centered around belonging. Led by our
                    Inclusion, Diversity & Purpose team, Discord empowers our
                    ERGs to create an inclusive space where members of
                    underrepresented groups and allies can come together to
                    celebrate our diverse communities. Our ERG leads have 10%
                    allocated work time to help build belonging through
                    promoting education and awareness, offering learning
                    opportunities, and driving advocacy for their communities in
                    and outside of Discord.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
          <Box display="flex" justifyContent="center" pb={"5rem"}>
            <Box
              width={"80%"}
              height="25rem"
              bgcolor="white"
              position={"relative"}
              borderRadius={"1rem"}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                height={"1.5rem"}
                position={"absolute"}
                top={0}
                bottom={0}
                left={-35}
                my={"auto"}
              >
                <Fab
                  size="small"
                  onClick={() => {
                    if (activeCard === 6) return setActiveCard(0);
                    return setActiveCard(Math.abs(activeCard + 1));
                  }}
                >
                  <BackArrowIcon width="1.25rem" />
                </Fab>
              </Box>
              <Box
                height={"1.5rem"}
                position={"absolute"}
                top={0}
                bottom={0}
                right={-35}
                my={"auto"}
              >
                <Fab
                  size="small"
                  onClick={() => {
                    if (activeCard === 0) return setActiveCard(6);
                    return setActiveCard(Math.abs(activeCard - 1));
                  }}
                >
                  <ForwardArrowIcon width="1.25rem" />
                </Fab>
              </Box>
              <Box
                width={"90%"}
                height={"100%"}
                position={"relative"}
                overflow={"hidden"}
              >
                <Box
                  height={"100%"}
                  width={"auto"}
                  position={"relative"}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  {carousalCards.map(({ title, body, img }, index) => {
                    const range = Math.abs((activeCard + index) % 7);
                    return (
                      <Grid
                        key={title}
                        container
                        position={"absolute"}
                        top={0}
                        bottom={0}
                        my={"auto"}
                        width={{ xs: "100%" }}
                        className={"animate-grid" + (range + 1)}
                        columnSpacing={"1rem"}
                        overflow={"scroll"}
                      >
                        <Grid
                          item
                          xs={12}
                          md={4}
                          display="flex"
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Box width={{ xs: "50%", md: "100%" }} p={"1rem"}>
                            <Image
                              src={img}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "1rem",
                                overflow: "clip",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <Stack height={"100%"} justifyContent={"center"}>
                            <Typography
                              fontSize={{ xs: "1.2rem", sm: "1.4rem" }}
                            >
                              {title}
                            </Typography>
                            <Typography fontSize={".9rem"}>{body}</Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </RBox>
    </>
  );
}
