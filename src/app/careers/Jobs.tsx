"use client";
import { useEffect, useState } from "react";
import { Box, Typography, Stack, Grid, Fab } from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import ForwardArrowIcon from "icons/ForwardArrowIcon";
import BackArrowIcon from "icons/BackArrowIcon";
import wave from "./assets/wave.svg";
import discordTag from "./assets/discord-tag.svg";
import customerServiceTag from "./assets/customer-service-tag.svg";
import cyberSecurityTag from "./assets/cyber-security-tag.svg";
import legalTag from "./assets/cyber-security-tag.svg";
import pride from "./assets/pride.webp";
import baam from "./assets/baam.webp";
import aapi from "./assets/aapi.webp";
import jewish from "./assets/jew-ish.webp";
import parents from "./assets/parents.webp";
import laCafeteria from "./assets/lacafeteria.webp";
import womenAtDiscord from "./assets/women-at-discord.webp";

const filters = [
  {
    category: "Accounting",
    jobs: [
      {
        title: "Indirect Tax Manager",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Revenue Accoutant",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Core Tech Engineering",
    jobs: [
      {
        title: "Engineering Manager - Safety Platform",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Privacy Engineer",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Product Security Engineer, Security Features",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer - Media Infrastructure",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Staff Product Security Engineer",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Staff Software Engineer, Real Time Infrastructure",
        location: "San Francisco, CA",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Customer Experience",
    jobs: [
      {
        title: "Customer Experience Associate, Account Security",
        location: "Netherlands",
        tag: customerServiceTag,
      },
    ],
  },
  {
    category: "Data Platform Engineering",
    jobs: [
      {
        title: "Staff Software Engineer- Experimentation Platform",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Data Science & Engineering",
    jobs: [
      {
        title: "Senior Data Engineer - Advertising",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer - Data Platform",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Legal",
    jobs: [
      {
        title: "Senior Corporate Paralegal",
        location: "San Francisco, CA or Remote (West Coast U.S)",
        tag: legalTag,
      },
      {
        title: "Senior Product Counsel, Advertising Solutions",
        location: "San Francisco, CA or Remote (U.S)",
        tag: legalTag,
      },
    ],
  },
  {
    category: "Machine Learning",
    jobs: [
      {
        title: "Senior Engineering Manager - Machine Learning Platform",
        location: "San Francisco, CA",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer, Machine Learning",
        location: "San Francisco, CA",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer, Machine Learning (Ads)",
        location: "San Francisco, CA",
        tag: discordTag,
      },
      {
        title: "Staff Software Engineer, Machine Learning",
        location: "San Francisco, CA (Or Remote)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Policy",
    jobs: [
      {
        title: "Senior Manager, US State Public Policy",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Product Design",
    jobs: [
      {
        title: "Senior Product Designer, Revenue",
        location: "Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Product Engineering",
    jobs: [
      {
        title: "Senior Software Engineer - Ad Measurement",
        location: "San Francisco, CA or Remote",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer - Core Product",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer, Ads",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer, Ads Demand",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer, Payments",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Software Engineer, Revenue Growth",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Staff Software Engineer, Platform Ecosystem",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Software Engineer, Ads",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Staff Software Engineer, Ads",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Staff Software Engineer, Apps Platform",
        location: "Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Staff Software Engineer, Financial Platform",
        location: "Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Staff Software Engineer, Revenue Growth",
        location: "Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Sales",
    jobs: [
      {
        title: "Account Executive, Gaming Advertising Solutions - East",
        location: "New York, NY or Remote (East Coast U.S.)",
        tag: discordTag,
      },
      {
        title: "Account Executive, Gaming Advertising Solutions - West",
        location: "San Francisco, CA or Remote (West Coast U.S.)",
        tag: discordTag,
      },
      {
        title: "Account Manager, Gaming Advertising Solutions - East",
        location: "New York, NY or Remote (East Coast U.S.)",
        tag: discordTag,
      },
      {
        title: "Account Manager, Gaming Advertising Solutions - West",
        location: "San Francisco, CA or Remote (West Coast U.S.)",
        tag: discordTag,
      },
      {
        title: "Ad Operations Manager, Advertising Solutions",
        location: "San Francisco, CA or Remote (U.S.)",
        tag: discordTag,
      },
      {
        title: "Director of Sales, Gaming Ad Solutions - East",
        location: "New York, NY or Remote (East Coast U.S) ",
        tag: discordTag,
      },
      {
        title: "Sales Operations Manager, Advertising Solutions",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
      {
        title: "Senior Sales Planner",
        location: "San Francisco, CA or Remote (U.S)",
        tag: discordTag,
      },
    ],
  },
  {
    category: "Trust & Safety",
    jobs: [
      {
        title: "Exploitative Content Specialist - Russian ",
        location: "Netherlands",
        tag: cyberSecurityTag,
      },
    ],
  },
];

const carousalCards = [
  {
    img: pride,
    title: "Pride",
    body: "The Discord Pride Employee Resource Group is a safe haven for the LGBTQIA2S+ community and its allies. It offers education, belonging and a place to celebrate the identity of its members. Discord’s Pride ERG has made an impact on the community at the company and beyond by offering LGBTQIA2S+-inclusive and informed guidance regarding policy and benefits, including comprehensive transitioning benefits and improved access to gender-affirming healthcare. The group also hosts fun and educational events like allyship training, employee panels and community involvement with partners like GLSEN.",
  },
  {
    img: baam,
    title: "BAAM",
    body: "The BAAM (Black & African American Movement) ERG is an intentional place of warmth, unity and understanding for members of the Black community at Discord. The group aims to develop leaders and changemakers, empower and give back to the community, and diversify the tech industry through training, events, volunteering and more.",
  },
  {
    img: aapi,
    title: "AAPI",
    body: "The AAPI (Asian American and Pacific Islander) ERG empowers Discord’s Asian-identifying employees and allies by honoring the richness and diversity of the Asian community. One of the group’s tentpole initiatives is hosting AAPI Heritage Month — a full month of programming that advocates for cultural diversity, education and career development. Celebrations include Lunch & Learn sessions, group gatherings, workshops and creator highlights featuring AAPI employees, communities and artists!",
  },
  {
    img: jewish,
    title: "Jew-ish",
    body: "Jew-ish at Discord is a place for Jews, non-Jews and anyone with an interest in Jewish culture, history, nosh, spirituality and more. It's a community within Discord that brings people together and enables them to share their religion and culture with each other, the Discord employee community and Jewish community at large.",
  },
  {
    img: parents,
    title: "Parents",
    body: "The Parents ERG at Discord is a community focused on providing support, resources and fellowship for parents and caregivers. Besides being a safe space for discussing anything related to being a parent, like getting advice on pre-schools in the Bay Area or venting about a newborn’s sleep schedule, the group hosts programs for helping parents and caregivers at Discord best navigate the complicated landscape of finances, benefits and strategies specifically related to raising children.",
  },
  {
    img: laCafeteria,
    title: "La Cafetería",
    body: "La Cafetería is Discord’s’ Latinx ERG. Many of its members are the first in their communities or families to enter tech, and the group has made it their collective mission to build a space to enable Latinx folks to thrive without compromising their identity.",
  },
  {
    img: womenAtDiscord,
    title: "Women at Discord",
    body: "The Discord Women's ERG is a place where women and underrepresented genders can gather to discuss topics that impact them, get inspired by great work, offer support and guidance, and develop skills that help build successful careers. The group focuses on driving change that improves everyone's ultimate well-being by making systemic change that makes the table bigger for everyone.",
  },
];

export default function Jobs() {
  const [activeCard, setActiveCard] = useState(0);

  console.log(activeCard);

  return (
    <>
      <Box width={"100%"} height={"7rem"} bgcolor={"whitesmoke"}>
        <img src={wave.src} alt="" />
      </Box>
      <RBox bgColor="whitesmoke">
        <Stack spacing={"5rem"}>
          <Stack spacing={"1rem"}>
            <Typography
              component={"h3"}
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }}
            >
              We'd love to work with someone like you.
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
                {filters.map((filter) => {
                  return (
                    <SimpleButton
                      key={filter.category}
                      variant="contained"
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
          {filters.map((filter) => {
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
                              <img src={tag.src} width={"36px"} alt="" />
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
                        className={`animate-grid${range + 1}`}
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
                            <img
                              src={img.src}
                              alt=""
                              width={"100%"}
                              height={"100%"}
                              style={{
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
