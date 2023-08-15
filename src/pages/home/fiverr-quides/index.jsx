import { Box, Typography, useTheme } from "@mui/material";

import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import Container from "../../../containers/Container";
import Cards from "./Cards";

import { fiverrGuidesData } from "../../../constants/home";

const FiverrGuides = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box
        maxWidth={1350}
        mx="auto"
        my={3}
        sx={{
          [theme.breakpoints.up("sm")]: {
            mt: 10,
            mb: 8,
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography
            variant="h2"
            fontSize="28px"
            fontWeight="bold"
            color="grey.800"
            sx={{
              [theme.breakpoints.up("sm")]: {
                fontSize: "32px",
              },
            }}
          >
            Guides to help you grow
          </Typography>
          <Typography
            variant="body1"
            fontWeight="medium"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              color: "#446ee7",
              alignItems: "center",
              gap: 0,
              cursor: "pointer",
            }}
          >
            See more
            <KeyboardArrowRightRoundedIcon
              sx={{ position: "relative", top: "1px", fontSize: "20px" }}
            />
          </Typography>
        </Box>
        <Box
          display="flex"
          gap={4}
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{
            [theme.breakpoints.up("sm")]: {
              gap: 2,
            },
          }}
        >
          {fiverrGuidesData.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </Box>
        <Typography
          variant="body1"
          fontWeight="medium"
          mt={3}
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
              lg: "none",
              xl: "none",
            },
            color: "#446ee7",
            alignItems: "center",
            gap: 0,
            cursor: "pointer",
          }}
        >
          See more
          <KeyboardArrowRightRoundedIcon
            sx={{ position: "relative", top: "1px", fontSize: "20px" }}
          />
        </Typography>
      </Box>
    </Container>
  );
};

export default FiverrGuides;
