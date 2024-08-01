"use client";
import { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Input,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { RBox, SimpleButton } from "globalComponents";
import SearchIcon from "./svgs/Search";
import ForwardArrowIcon from "icons/ForwardArrowIcon";
import BackArrowIcon from "icons/BackArrowIcon";
import AllIcon from "./svgs/AllIcon";
import GamingIcon from "./svgs/GamingIcon";
import TelevisionIcon from "./svgs/TelevisionIcon";
import EducationIcon from "./svgs/EducationIcon";
import ScienceTechIcon from "./svgs/ScienceTechIcon";
import MusicIcon from "./svgs/MusicIcon";
import DataStack from "./DataStack";
import CloseIcon from "icons/CloseIcon";

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
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [value, setValue] = useState("");

  const handlePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleCategory = (value: number) => {
    setPage(1);
    setCategory(value);
  };

  return (
    <RBox bgColor="white">
      <Box display="flex" justifyContent="center">
        <Stack width="85%" minHeight="20rem" mt="2rem" mb="5rem" spacing={2}>
          <Stack direction="row">
            <Stack
              direction="row"
              width="90%"
              bgcolor="whitesmoke"
              borderRadius=".5rem"
              alignItems="center"
            >
              <Box
                width="100%"
                minWidth={"75%"}
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
          <Stack width="100%" direction="row" spacing={2}>
            <Stack width="30%" spacing={2}>
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
                    <Stack width="100%" direction="row" alignItems={"center"}>
                      <Box width="10%">{svg}</Box>
                      <Typography width="60%" textAlign="left">
                        {text}
                      </Typography>
                      <Typography width="30%" textAlign="right">
                        {results}
                      </Typography>
                    </Stack>
                  </SimpleButton>
                );
              })}
            </Stack>
            <Stack width="70%" spacing={2}>
              <Typography fontSize={{ xs: "", sm: "", md: "", lg: "1.4rem" }}>
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
