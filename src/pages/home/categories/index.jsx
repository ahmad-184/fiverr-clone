import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";

import Container from "../../../containers/Container";
import { categories } from "../../../constants/home";

const Categories = () => {
  const theme = useTheme();
  return (
    <Container mt={4} sx={{}}>
      <Box mx="auto" maxWidth="1350px">
        <Typography
          variant="h2"
          fontSize="28px"
          fontWeight="bold"
          color="grey.800"
          mb={6}
          sx={{
            [theme.breakpoints.up("md")]: {
              mb: 8,
              fontSize: "32px",
            },
          }}
        >
          You need it, we've got it
        </Typography>
        <Grid container alignItems="start">
          {categories.map((item, index) => (
            <Grid
              key={index}
              xs={6}
              sm={4}
              md={2.4}
              sx={{
                mb: 4.5,
                [theme.breakpoints.up("sm")]: {
                  mb: 7.5,
                },
                [theme.breakpoints.up("md")]: {
                  mb: 9,
                },
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Box
                  px={0.5}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                    "&:hover .MuiBox-root::before": {
                      padding: "0 50px 0 50px",
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mx: "auto",
                      width: "3rem",
                      height: "3.3rem",
                      mb: 1,
                      "&::before": {
                        transition: "0.5s all ease",
                        content: "''",
                        position: "absolute",
                        bottom: "0px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "2px",
                        width: "100%",
                        backgroundColor: "grey.400",
                      },
                    }}
                  >
                    <img
                      style={{ width: "100%" }}
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    textAlign="center"
                    fontWeight="medium"
                    color="grey.900"
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Categories;
