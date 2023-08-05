import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Container from "../../../containers/Container";
import { trustedByData } from "../../../constants/home";

const TrustedBy = () => {
  const theme = useTheme();

  const screen_d_1150 = useMediaQuery("(max-width: 1150px)");

  return (
    <Container backgroundColor="#fafafa">
      <Box
        mb={12}
        sx={{
          py: 3,
          [theme.breakpoints.down("md")]: {
            py: 2,
          },
          [theme.breakpoints.down("sm")]: {
            py: 1,
          },
        }}
      >
        <Box
          maxWidth="1350px"
          mx="auto"
          display="flex"
          gap={8}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: screen_d_1150 ? "none" : "block",
            }}
          >
            <Typography variant="body1" fontWeight="bold" color="#b5b6ba">
              Trusted By:{" "}
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              gap: 8,
              [theme.breakpoints.down("md")]: {
                gap: 5,
              },
              [theme.breakpoints.down("sm")]: {
                gap: 2,
              },
            }}
          >
            {trustedByData.map((item, index) => (
              <Box
                key={index}
                lineHeight={0}
                display={{
                  xs: index === trustedByData.length - 1 ? "none" : "block",
                  sm: index === trustedByData.length - 1 ? "none" : "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                }}
                sx={{
                  width: "100%",
                  height: "100%",
                  [theme.breakpoints.down("sm")]: {
                    "& img": {
                      height: "50px",
                    },
                  },
                }}
              >
                <img src={item.image} alt={item.company} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default TrustedBy;
