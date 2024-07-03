import { Box } from "@mui/material";
import Icon from "./Icon";
export default function BackArrowIcon({
  width,
  height,
  title,
  color,
  className,
}: Icon) {
  return (
    <Box width={width} display={"flex"} justifyContent={"center"}>
      <svg
        role="img"
        aria-label="go back"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={className}
        style={{ height: height }}
      >
        {title && <title>{title}</title>}
        <path
          fill={color}
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </Box>
  );
}
