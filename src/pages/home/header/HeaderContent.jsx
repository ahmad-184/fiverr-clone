import {
  Box,
  InputBase,
  Typography,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { headerPopularCat } from "../../../constants/home";

const HeaderContent = () => {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      height="100%"
      maxWidth="1350px"
      mx="auto"
      display="flex"
      alignItems="center"
      position="relative"
      inset="0"
      zIndex="2"
      paddingY="6rem"
      sx={{
        [theme.breakpoints.down("md")]: {
          justifyContent: "center",
          padding: "8rem 0 3rem 0",
        },
      }}
    >
      <Box
        maxWidth="650px"
        display="flex"
        flexDirection="column"
        sx={{
          [theme.breakpoints.down("lg")]: {
            maxWidth: "560px",
          },
          [theme.breakpoints.down("md")]: {
            padding: "0 64px",
            maxWidth: "none",
          },
          [theme.breakpoints.down("sm")]: {
            padding: "0rem 0px",
          },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            fontSize="48px"
            color="white"
            fontWeight="bold"
            sx={{
              [theme.breakpoints.down("lg")]: {
                fontSize: "40px",
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: "32px",
              },
            }}
          >
            Find the right{" "}
            <span
              style={{
                fontFamily: "Domain-display",
                fontStyle: "italic",
              }}
            >
              freelance
            </span>{" "}
            service, right away
          </Typography>
        </Box>
        <Box my={3}>
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submit form");
            }}
            style={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "row",
                [theme.breakpoints.down("md")]: {
                  flexDirection: "column",
                  gap: 2,
                },
              }}
            >
              <InputBase
                placeholder="Search for eny Service..."
                type="search"
                sx={{
                  fontSize: "16px",
                  color: "black",
                  height: "48px",
                  px: 2,
                  flexGrow: "1",
                  backgroundColor: "white",
                  borderRadius: `2px 0 0 2px`,
                  "& ::placeholder": { fontWeight: "bold" },
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    borderRadius: "4px",
                  },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  borderRadius: "0 2px 2px 0",
                  boxShadow: "none",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                    borderRadius: "4px",
                  },
                }}
              >
                <SearchRoundedIcon sx={{ fontSize: "22px", color: "#fff" }} />
              </Button>
            </Box>
          </form>
        </Box>
        <Box
          display={{
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          }}
          flexDirection="row"
          gap={2}
          alignItems="center"
        >
          <Typography variant="body2" color="white" fontWeight="bold">
            Popular:{" "}
          </Typography>
          <Box display="flex" flexDirection="row" gap={2}>
            {headerPopularCat.map((item, index) => (
              <Chip
                key={index}
                label={item}
                variant="outlined"
                onClick={() => console.log("clicked")}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  transition: "all .2s ease-in-out",
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
    </Box>
  );
};

export default HeaderContent;
