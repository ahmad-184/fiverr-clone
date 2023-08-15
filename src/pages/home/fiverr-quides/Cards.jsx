import { Box, Typography, useTheme } from "@mui/material";

const Cards = ({ item }) => {
  const { title, desc, img, img_sources } = item;
  const theme = useTheme();

  return (
    <Box
      width="100%"
      sx={{
        cursor: "pointer",
        [theme.breakpoints.up("sm")]: {
          width: "48.5%",
        },
        [theme.breakpoints.up("md")]: {
          width: "32%",
        },
      }}
    >
      <Box
        sx={{
          "& img": {
            transition: "0.4s opacity ease",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 1.2,
            display: "block",
            "&:hover": {
              opacity: ".8",
            },
          },
        }}
      >
        <picture>
          {img_sources.map((item, index) => (
            <source media={item.width} srcSet={item.srcset} key={index} />
          ))}
          <img loading="lazy" src={img} alt={desc} />
        </picture>
      </Box>
      <Box mt={1.5}>
        <Typography
          variant="h2"
          fontSize="16px"
          color="grey.800"
          fontWeight="bold"
          mb={0.1}
          sx={{
            [theme.breakpoints.up("sm")]: {
              fontSize: "18px",
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          fontSize="16px"
          color="grey.600"
          fontWeight="medium"
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default Cards;
