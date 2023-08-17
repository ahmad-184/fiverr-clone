import { Avatar, Box, Typography, useTheme } from "@mui/material";

const Slides = ({ item }) => {
  const { img, user, imgSources } = item;
  const theme = useTheme();

  return (
    <Box borderRadius={1.1}>
      <Box
        sx={{
          transition: ".4s opacity ease",
          cursor: "pointer",
          "& img": {
            width: "100%",
            objectFit: "cover",
            height: "247px",
            display: "block",
            borderRadius: "5px 5px 0 0",
          },
          "&:hover": {
            opacity: ".8",
          },
        }}
      >
        <picture>
          {imgSources.map((source, index) => (
            <source media={source.width} srcSet={source.srcset} key={index} />
          ))}
          <img src={img} alt={user.service} loading="lazy" />
        </picture>
      </Box>
      <Box
        backgroundColor="#fff"
        display="flex"
        gap={1.5}
        alignItems="center"
        p={2}
        sx={{
          borderRadius: "0px 0px 5px 5px",
          boxShadow:
            "0 0.14px 2.29266px rgba(0,0,0,.032), 0 0.37px 4.42626px rgba(0,0,0,.048), 0 3px 7px rgba(0,0,0,.09)",
        }}
      >
        <Avatar src={user.avatar} alt={user.service} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          <Typography
            variant="h6"
            fontSize="17px"
            fontWeight="bold"
            color="grey.800"
            noWrap
            sx={{
              [theme.breakpoints.up("sm")]: {
                fontSize: "15px",
              },
            }}
          >
            {user.service}
          </Typography>
          <Typography
            variant="body1"
            fontWeight="medium"
            color="#95979d"
            noWrap
            sx={{
              [theme.breakpoints.up("sm")]: {
                fontSize: "14px",
              },
            }}
          >
            by {user.seller_name}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Slides;
