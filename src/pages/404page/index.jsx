import { useEffect } from "react";
import {
  Box,
  Chip,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Logo } from "../../components";
import SearchInput from "./SearchInput";

import { headerPopularCatData } from "../../constants/home";
import { Helmet } from "react-helmet-async";

const bgImages = [
  "https://res.cloudinary.com/dnlnbcbt0/image/upload/f_auto,q_auto/v1691157758/images/404_20page_20-_201_hrxrdr.png",
  "https://res.cloudinary.com/dnlnbcbt0/image/upload/f_auto,q_auto/v1691192277/images/404_20page_20-_202_elkeak.png",
  "https://res.cloudinary.com/dnlnbcbt0/image/upload/f_auto,q_auto/v1691192305/images/404_20page_20-_204_fuolzk.svg",
  "https://res.cloudinary.com/dnlnbcbt0/image/upload/f_auto,q_auto/v1691192338/images/404_20page_20-_205_otcfgd.svg",
  "https://res.cloudinary.com/dnlnbcbt0/image/upload/f_auto,q_auto/v1691192394/images/404_20page_20-_203_f8ghvk.png",
];

const NotFoundPage = () => {
  const theme = useTheme();
  const screen_up_900 = useMediaQuery("(min-width: 900px)");

  return (
    <main>
      <Helmet>
        <title>Page not found - fiverr</title>
      </Helmet>
      <Box
        position="relative"
        width="100%"
        minHeight="100vh"
        p="1.5rem 1rem"
        display="flex"
        flexDirection="column"
        gap={3}
        sx={{
          backgroundImage: `${
            screen_up_900
              ? "linear-gradient(90deg,rgba(0,0,0,.81) 17.97%,rgba(0,0,0,.31) 57.6%,transparent 77.6%)"
              : "linear-gradient(180deg,#000 .21%,rgba(0,0,0,.8) 34.96%,rgba(0,0,0,.32) 78.47%,rgba(0,0,0,.25) 85.43%,rgba(0,0,0,.75) 99.97%)"
          },url(${bgImages[Math.floor(Math.random() * bgImages.length)]})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundColor: "#000",
          backgroundRepeat: "no-repeat",
          [theme.breakpoints.up("sm")]: {
            p: "1.5rem 2rem",
          },
          [theme.breakpoints.up("md")]: {
            p: "1.5rem 4rem",
            justifyContent: "space-between",
          },
        }}
      >
        <Box>
          <Logo color="#fff" />
        </Box>
        <Box
          color="white"
          display="flex"
          flexDirection="column"
          sx={{
            [theme.breakpoints.up("sm")]: {
              maxWidth: "600px",
            },
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            lineHeight="38px"
            fontSize="27px"
            sx={{
              [theme.breakpoints.up("sm")]: {
                fontSize: "40px",
                lineHeight: "48px",
              },
            }}
          >
            Well, this isn't what you were looking for
          </Typography>
          <Divider color="white" width={55} sx={{ height: 3, my: 4 }} />
          <Box mb={3}>
            <Typography
              variant="h5"
              fontWeight="bold"
              fontSize="20px"
              sx={{
                [theme.breakpoints.up("sm")]: {
                  fontSize: "26px",
                  lineHeight: "36px",
                },
              }}
            >
              But at least it's pretty
            </Typography>
            <Typography
              variant="h6"
              fontSize="17px"
              sx={{
                [theme.breakpoints.up("sm")]: {
                  fontSize: "18px",
                },
              }}
            >
              Keep exploring
            </Typography>
          </Box>
          <Box mb={2}>
            <SearchInput />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            gap={2}
            alignItems="start"
            sx={{
              [theme.breakpoints.up("sm")]: {
                flexDirection: "row",
                mt: 2,
                alignItems: "center",
              },
            }}
          >
            <Typography
              variant="body2"
              color="white"
              fontWeight="bold"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: "16px",
                },
              }}
            >
              Popular:{" "}
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
              {headerPopularCatData.map((item, index) => (
                <Chip
                  key={index}
                  label={item}
                  variant="outlined"
                  onClick={() => console.log("clicked")}
                  sx={{
                    color: "white",
                    fontWeight: "medium",
                    transition: "all .2s ease-in-out",
                    backgroundColor: "grey.900",
                    "&:hover": {
                      backgroundColor: "white !important",
                      color: "black",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            [theme.breakpoints.down("md")]: {
              position: "absolute",
              bottom: "1.5rem",
              right: "1rem",
            },
          }}
        >
          <Typography
            variant="body2"
            fontSize="15px"
            color="white"
            fontWeight="400"
          >
            made on <span style={{ fontWeight: "bold" }}>fiverr.</span>
            <span style={{ fontWeight: "100" }}>@brokoola</span>
          </Typography>
        </Box>
      </Box>
    </main>
  );
};

export default NotFoundPage;
