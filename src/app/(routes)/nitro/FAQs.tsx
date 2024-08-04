"use client";
import { useState } from "react";
import {
  Typography,
  Stack,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import { ChevronDownIcon } from "icons";
import { RBox, LinkInText } from "globalComponents";
import BunnyHuman from "./svgs/BunnyHuman";
import { Sparkles } from "icons";
import { tabs } from "./data";

export default function FAQs() {
  // Open one accordion at a time
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleExpand =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  // Handle which tab is active and reset default accordion
  const [tabId, setTabId] = useState(1);
  const handleTab = (_: React.SyntheticEvent, newValue: number) => {
    setTabId(newValue);
    setExpanded(false);
  };

  const filteredAccordions = tabs.filter(({ id }) => id === tabId);
  const accordions = filteredAccordions.map(({ accordions }) => accordions);

  return (
    <RBox bgColor="white">
      <Box
        display={{ xs: "none", lg: "block" }}
        position={"absolute"}
        top={-100}
        right={0}
      >
        <BunnyHuman />
      </Box>
      <Box
        display={{ xs: "none", lg: "block" }}
        position={"absolute"}
        bottom={100}
        left={0}
      >
        <Sparkles />
      </Box>
      <Stack
        width="100%"
        height={{ xs: "auto", lg: "55rem" }}
        spacing={3}
        alignContent="center"
        pb={"5rem"}
      >
        <Typography
          fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" }}
          component={"h2"}
          textAlign={"center"}
        >
          Frequently Asked Questions
        </Typography>
        <Box display={{ xs: "none", sm: "block" }}>
          <Tabs
            orientation={"horizontal"}
            value={tabId}
            onChange={handleTab}
            textColor="primary"
            indicatorColor="primary"
            aria-label="tabs"
            centered
          >
            {tabs.map(({ id, tabText }) => {
              return (
                <Tab
                  key={id}
                  value={id}
                  label={tabText}
                  disableRipple
                  sx={{
                    textTransform: "none",
                    maxWidth: { xs: "100%", md: "inherit" },
                  }}
                />
              );
            })}
          </Tabs>
        </Box>
        <Box display={{ xs: "block", sm: "none" }}>
          <Tabs
            orientation={"vertical"}
            value={tabId}
            onChange={handleTab}
            textColor="primary"
            indicatorColor="primary"
            aria-label="tabs"
            centered
          >
            {tabs.map(({ id, tabText }) => {
              return (
                <Tab
                  key={id}
                  value={id}
                  label={tabText}
                  disableRipple
                  sx={{
                    textTransform: "none",
                    maxWidth: { xs: "100%", md: "inherit" },
                  }}
                />
              );
            })}
          </Tabs>
        </Box>
        {accordions.map((accordion, index) => {
          return (
            <Stack key={index} spacing={3}>
              {accordion.map(({ title, body, links }, index) => {
                const i = index + 1;
                const isExpanded = expanded === "panel" + i;
                return (
                  <Accordion
                    key={index}
                    elevation={0}
                    expanded={isExpanded}
                    onChange={handleExpand("panel" + i)}
                    sx={{
                      color: isExpanded ? "white" : "black",
                      backgroundColor: isExpanded ? "#5865f2" : "whitesmoke",
                      borderRadius: ".5rem",
                      border: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ChevronDownIcon
                          width="1rem"
                          color={isExpanded ? "white" : "black"}
                        />
                      }
                      aria-controls={"panel" + i + "-content"}
                      id={"panel" + i + "-header"}
                      sx={{ height: "5rem" }}
                    >
                      {title}
                    </AccordionSummary>
                    <AccordionDetails sx={{ fontSize: ".9rem" }}>
                      {links ? (
                        <LinkInText
                          color="white"
                          hasUnderline
                          text={body}
                          links={links}
                        />
                      ) : (
                        body
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </RBox>
  );
}
