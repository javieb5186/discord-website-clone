"use client";
import { useState, useRef } from "react";
import {
  Box,
  Stack,
  Typography,
  Input,
  Pagination,
  PaginationItem,
  Button,
} from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import {
  SearchIcon,
  BackArrowIcon,
  ForwardArrowIcon,
  CloseIcon,
  ChevronDownIcon,
} from "icons";
import {
  AllIcon,
  GamingIcon,
  TelevisionIcon,
  EducationIcon,
  ScienceTechIcon,
  MusicIcon,
} from "./svgs";
import DataStack from "./DataStack";

const categories = [
  {
    id: 1,
    text: "All",
    href: "/servers",
    svg: <AllIcon width="1rem" color="black" />,
    results: 1500,
  },
  {
    id: 2,
    text: "Gaming",
    href: "/servers/gaming",
    svg: <GamingIcon width="1rem" color="black" />,
    results: 500,
  },
  {
    id: 3,
    text: "Entertainment",
    href: "/servers/entertainment",
    svg: <TelevisionIcon width="1rem" color="black" />,
    results: 400,
  },
  {
    id: 4,
    text: "Education",
    href: "/servers/education",
    svg: <EducationIcon width="1rem" color="black" />,
    results: 300,
  },
  {
    id: 5,
    text: "Science & Tech",
    href: "/servers/science&tech",
    svg: <ScienceTechIcon width="1rem" color="black" />,
    results: 200,
  },
  {
    id: 6,
    text: "Music",
    href: "/servers/music",
    svg: <MusicIcon width="1rem" color="black" />,
    results: 100,
  },
];

export default function Communities() {
  const [value, setValue] = useState("");
  const startOfContent = useRef<Element>();

  const [page, setPage] = useState(1);
  const handlePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    startOfContent !== undefined && startOfContent.current?.scrollIntoView();
  };

  const [category, setCategory] = useState(1);
  const handleCategory = (value: number) => {
    setPage(1);
    setCategory(value);
  };

  const [dialog, setDialog] = useState(false);
  const handleDialog = () => {
    setDialog(!dialog);
  };

  return (
    <RBox bgColor="white">
      <Box
        width={"100%"}
        display="flex"
        justifyContent="center"
        ref={startOfContent}
      >
        <Stack
          width={{ xs: "100%", lg: "80%" }}
          minHeight="20rem"
          mt="2rem"
          mb="5rem"
          spacing={2}
        >
          <Stack width="100%" direction="row">
            <Stack
              direction="row"
              width={"100%"}
              bgcolor="whitesmoke"
              borderRadius=".5rem"
              alignItems="center"
            >
              <Box
                width="100%"
                minWidth={{ xs: "100%", lg: "60%" }}
                paddingLeft="1rem"
                my=".5rem"
                marginRight="1rem"
                bgcolor="lightgray"
                borderRadius=".5rem"
              >
                <Input
                  disableUnderline
                  fullWidth
                  placeholder="Explore communities"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Box>
              {value.length >= 2 && (
                <Typography width="20%" fontSize=".9rem">
                  "ENTER" to Search
                </Typography>
              )}
              {!!value.length && (
                <SimpleButton
                  sx={{ width: "5%" }}
                  onClick={() => {
                    setValue("");
                  }}
                >
                  <CloseIcon width="1rem" />
                </SimpleButton>
              )}
            </Stack>
            <Box
              height="100%"
              width="10%"
              display="flex"
              justifyContent="flex-end"
            >
              <SimpleButton variant="contained" sx={{ height: "100%" }}>
                <SearchIcon width="1rem" color="white" />
              </SimpleButton>
            </Box>
          </Stack>
          <Stack
            width="100%"
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
          >
            <Stack display={{ xs: "none", lg: "flex" }} width="30%" spacing={2}>
              {categories.map(({ id, text, svg, results }) => {
                let clss = "important-black-txt";
                category === id && (clss += " active-button");
                return (
                  <SimpleButton
                    key={text}
                    fullWidth
                    className={clss}
                    onClick={() => handleCategory(id)}
                    sx={{
                      borderRadius: ".25rem",
                    }}
                  >
                    <Stack width="100%" direction="row" spacing={"1rem"}>
                      {svg}
                      <Typography>{text}</Typography>
                      <Typography marginLeft={"auto !important"}>
                        {results}
                      </Typography>
                    </Stack>
                  </SimpleButton>
                );
              })}
            </Stack>
            <Box
              width={"100%"}
              position={"relative"}
              display={{ xs: "block", lg: "none" }}
            >
              <Button
                fullWidth
                onClick={handleDialog}
                sx={{
                  display: {
                    xs: "block",
                    lg: "none",
                    textTransform: "none",
                    color: "black",
                    border: "1px solid black",
                    position: "relative",
                    zIndex: 10,
                  },
                }}
              >
                <Stack justifyContent={"space-between"} direction={"row"}>
                  <Typography>{categories[category - 1].text}</Typography>
                  <ChevronDownIcon width="1rem" color="black" />
                </Stack>
              </Button>
              {dialog && (
                <Box
                  display={{ xs: "block", lg: "none" }}
                  mt={"1rem"}
                  p={"1rem"}
                  borderRadius={".2rem"}
                  bgcolor={"whitesmoke"}
                >
                  <Stack
                    direction={"row"}
                    flexWrap={"wrap"}
                    rowGap={"1.5rem"}
                    useFlexGap
                  >
                    {categories.map(({ results, text, svg, id }) => {
                      return (
                        <SimpleButton
                          key={id}
                          onClick={() => {
                            handleCategory(id);
                            handleDialog();
                          }}
                          sx={{ color: "black" }}
                        >
                          <Stack
                            direction={"row"}
                            bgcolor={"lightgray"}
                            borderRadius={".5rem"}
                            spacing={".5rem"}
                            px={"1rem"}
                            py={".5rem"}
                            alignItems={"center"}
                          >
                            {svg}
                            <Typography>{text}</Typography>
                            <Typography>{results}</Typography>
                          </Stack>
                        </SimpleButton>
                      );
                    })}
                  </Stack>
                </Box>
              )}
            </Box>
            <Stack width={{ xs: "100%", lg: "70%" }} spacing={2}>
              <Typography
                display={{ xs: "none", lg: "block" }}
                fontSize={{ xs: "", sm: "", md: "", lg: "1.4rem" }}
              >
                {categories[category - 1].results} found
              </Typography>
              <DataStack category={category} page={page} />
            </Stack>
          </Stack>
          <Box display="flex" justifyContent="center">
            <Pagination
              count={3}
              onChange={handlePage}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: prevIcon, next: nextIcon }}
                  {...item}
                />
              )}
            />
          </Box>
        </Stack>
      </Box>
    </RBox>
  );
}

function nextIcon() {
  return (
    <Stack direction="row" spacing={1}>
      <ForwardArrowIcon width="1rem" />
      <Typography component="span">Next</Typography>
    </Stack>
  );
}

function prevIcon() {
  return (
    <Stack direction="row" spacing={1}>
      <BackArrowIcon width="1rem" />
      <Typography component="span">Back</Typography>
    </Stack>
  );
}
