import { Box, IconButton, useTheme } from "@mui/material";

const SliderArrowButton = ({ Icon, dir, swiper }) => {
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
        <Icon sx={{ color: "black", fontSize: "30px" }} />
      </IconButton>
    </Box>
  );
};

export default SliderArrowButton;
