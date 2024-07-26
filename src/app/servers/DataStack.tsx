"use client";
import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import PartneredIcon from "./svgs/PartneredIcon";
import VerifiedIcon from "./svgs/VerifiedIcon";
import createData from "utils/createData";
import Skeleton from "./skeleton";

interface Data {
  icon: string;
  community: string;
  description: string;
  img: string;
  online: number;
  members: number;
  tag: "VERIFIED" | "PARTNERED" | "VERIFIED & PARTENERED" | "NONE";
}

function createStack(data: Data[]) {
  const components = data.map((data) => {
    const { icon, community, description, img, online, members, tag } = data;
    return () => {
      return (
        <Stack direction="row" height="9rem" spacing={1}>
          <Box
            width={"40%"}
            height="100%"
            borderRadius=".5rem"
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "50% 0%",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box width={"60%"}>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1}>
                <Box
                  width="1.5rem"
                  height="1.5rem"
                  bgcolor={icon}
                  borderRadius=".25rem"
                ></Box>
                <Typography width="90%">{community}</Typography>
              </Stack>
              <Typography fontSize=".9rem">{description}</Typography>
              <Stack direction="row" divider={<span>•</span>} spacing={1}>
                <Typography>{online} Online</Typography>
                <Typography>{members} Members</Typography>
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
                          <PartneredIcon width="1rem" color="#5764f3" />
                          <Box component="span">{tag}</Box>
                        </Stack>
                      ) : (
                        <Stack direction="row" spacing={1}>
                          <VerifiedIcon width="1rem" color="#23a55a" />
                          <Box component="span">{tag}</Box>
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
    };
  });
  return components;
}

function getFilteredComponents(category: number, page: number) {
  let promise: Promise<(() => JSX.Element)[]> = new Promise(async (Resolve) => {
    const data = await createData(category);
    const components = createStack(data);
    const filteredComponents = components.filter((component, index) => {
      const rangeMin = 9 * page - 8;
      const rangeMax = 9 * page;

      if (index + 1 <= rangeMax && index + 1 >= rangeMin) {
        return component;
      }
    });
    Resolve(filteredComponents);
  });
  return promise;
}

interface Props {
  category: number;
  page: number;
}

export default function DataStack({ category, page }: Props) {
  const [components, setComponents] = useState<
    undefined | (() => JSX.Element)[]
  >();

  useEffect(() => {
    getFilteredComponents(category, page).then((filteredComponent) =>
      setComponents(filteredComponent)
    );
  }, [category, page]);

  return (
    <>
      {components ? (
        components.map((Component, index) => <Component key={index} />)
      ) : (
        <Skeleton />
      )}
    </>
  );
}
