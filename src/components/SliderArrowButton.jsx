import { Box, IconButton, useTheme } from "@mui/material";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const SliderArrowButton = ({ dir, swiper }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        zIndex: "2",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        ...(dir === "left"
          ? { left: "-21px" }
          : dir === "right"
          ? { right: "-22px" }
          : null),
      }}
    >
      <IconButton
        aria-label={`${dir === "left" ? "prev" : "next"} slide button`}
        sx={{
          backgroundColor: "white !important",
          p: 1.2,
          boxShadow: theme.shadows[1],
        }}
        onClick={() =>
          dir === "left"
            ? swiper.current.slidePrev()
            : swiper.current.slideNext()
        }
      >
        {dir === "left" ? (
          <KeyboardArrowLeftRoundedIcon
            sx={{ color: "black", fontSize: "30px" }}
          />
        ) : (
          <KeyboardArrowRightRoundedIcon
            sx={{ color: "black", fontSize: "30px" }}
          />
        )}
      </IconButton>
    </Box>
  );
};

export default SliderArrowButton;
