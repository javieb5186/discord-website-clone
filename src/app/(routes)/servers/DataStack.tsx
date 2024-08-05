"use client";
import { Fragment, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { PartneredIcon, VerifiedIcon } from "./svgs";
import createData from "utils/createData";

interface Data {
  icon: string;
  community: string;
  description: string;
  img: string;
  online: number;
  members: number;
  tag: "VERIFIED" | "PARTNERED" | "VERIFIED & PARTENERED" | "NONE";
}

// Create an array of Stack components from array of data
function createStack(data: Data[]) {
  const components = data.map((data) => {
    const { icon, community, description, img, online, members, tag } = data;
    return (
      <Stack
        key={community}
        direction="row"
        minHeight={{ xs: "5rem", lg: "9rem" }}
        spacing={1}
      >
        <Box
          display={{ xs: "none", lg: "block" }}
          width={"40%"}
          height="100%"
          borderRadius=".5rem"
          sx={{
            backgroundImage: "url(" + img + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 0%",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          width={{ xs: "2.5rem", lg: "1.5rem" }}
          height={{ xs: "2.5rem", lg: "1.5rem" }}
          bgcolor={icon}
          borderRadius=".25rem"
          display={{ xs: "block", lg: "none" }}
        ></Box>
        <Box width={{ xs: "100%", lg: "60%" }}>
          <Stack spacing={{ xs: 0, lg: 1 }}>
            <Stack direction="row" spacing={1}>
              <Box
                width="1.5rem"
                height="1.5rem"
                bgcolor={icon}
                borderRadius=".25rem"
                display={{ xs: "none", lg: "blo" }}
              ></Box>
              <Typography width="90%" fontSize={{ xs: ".9rem", lg: "1rem" }}>
                {community}
              </Typography>
            </Stack>
            <Typography fontSize={{ xs: ".8rem", lg: ".9rem" }}>
              {description}
            </Typography>
            <Stack direction="row" divider={<span>•</span>} spacing={1}>
              <Typography fontSize={{ xs: ".9rem", lg: "1rem" }}>
                {online} Online
              </Typography>
              <Typography fontSize={{ xs: ".9rem", lg: "1rem" }}>
                {members} Members
              </Typography>
            </Stack>
            {tag !== "NONE" && (
              <Box>
                <Stack
                  px=".5rem"
                  display="inline-flex"
                  direction="row"
                  alignItems="center"
                  bgcolor={"lightgray"}
                  borderRadius=".25rem"
                  spacing={1}
                >
                  <Typography component="span" sx={{ display: "inline" }}>
                    {tag === "PARTNERED" ? (
                      <Stack direction="row" spacing={1}>
                        <Box width={{ xs: ".8rem", lg: "1rem" }}>
                          <PartneredIcon width="100%" color="#5764f3" />
                        </Box>
                        <Box
                          component="span"
                          fontSize={{ xs: ".8rem", lg: "1rem" }}
                        >
                          {tag}
                        </Box>
                      </Stack>
                    ) : (
                      <Stack direction="row" spacing={1}>
                        <Box width={{ xs: ".8rem", lg: "1rem" }}>
                          <VerifiedIcon width="100%" color="#23a55a" />
                        </Box>
                        <Box
                          component="span"
                          fontSize={{ xs: ".8rem", lg: "1rem" }}
                        >
                          {tag}
                        </Box>
                      </Stack>
                    )}
                  </Typography>
                </Stack>
              </Box>
            )}
          </Stack>
        </Box>
      </Stack>
    );
  });
  return components;
}

interface Props {
  category: number;
  page: number;
}

// Based on category and page, get specific Stack component.
export default function GetFilteredComponents(category: number, page: number) {
  const data = createData(category);
  const components = createStack(data);
  const filteredComponents = components.filter((component, index) => {
    const rangeMin = 9 * page - 8;
    const rangeMax = 9 * page;
    if (index + 1 <= rangeMax && index + 1 >= rangeMin) {
      return component;
    }
  });

  return filteredComponents;
}
