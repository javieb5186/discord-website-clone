import { Box } from "@mui/material";
import Icon from "../ts/interfaces/Icon";
export default function CheckmarkIcon({
  width,
  height,
  title,
  color,
  className,
}: Icon) {
  return (
    <Box width={width} display="flex" justifyContent="center">
      <svg
        role="img"
        aria-label="yes"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className={className}
        style={{ height: height }}
      >
        {title && <title>{title}</title>}
        <path
          fill={color}
          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
        />
      </svg>
    </Box>
  );
}
