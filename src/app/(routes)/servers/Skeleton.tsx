import { Box } from "@mui/material";

export default function Skeleton() {
  return (
    <>
      {Array.from({ length: 9 }).map((_, index) => {
        return (
          <Box
            key={index}
            width="100%"
            height="9rem"
            sx={{ borderRadius: ".5rem", backgroundColor: "whitesmoke" }}
          />
        );
      })}
    </>
  );
}
