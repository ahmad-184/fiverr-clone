import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import Login from "./login";
import Signup from "./signup";
import Button from "./Button";
import { data } from "./data";

const content = [
  "Over 600 categories",
  "Pay per project, not per hour",
  "Access to talent and businesses across the globe",
];

const SignupLoginBox = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const theme = useTheme();

  return (
    <Box
      mx="auto"
      maxWidth="880px"
      width="100%"
      overflow="hidden"
      backgroundColor="white"
      sx={{
        height: "580px",
        [theme.breakpoints.up("md")]: {
          height: "645px",
          borderRadius: 3,
        },
      }}
    >
      <Grid container width="100%" height="100%">
        <Grid xs={0} sm={0} md={6} lg={6} xl={6}>
          <Box
            width="100%"
            height="100%"
            position="relative"
            display={{
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
            sx={{
              "& img": {
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                objectFit: "cover",
                zIndex: 1,
              },
            }}
          >
            <img
              src="https://res.cloudinary.com/dnlnbcbt0/image/upload/v1692705511/images/standard.c6d3ba7_ebumfj.png"
              alt="signup or login"
            />
            <Box position="relative" zIndex={2} pt={7} mx={5} mr={7}>
              <Typography
                variant="h1"
                fontSize="32px"
                fontWeight={"bold"}
                color="white"
                mb={4}
              >
                Success starts here
              </Typography>

              {content.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "baseline",
                    "& span": {
                      display: "inline-block",
                    },
                  }}
                >
                  <span style={{ marginRight: "6px" }}>
                    <CheckRoundedIcon
                      sx={{ fontSize: "15px", color: "white" }}
                    />
                  </span>
                  <span>
                    <Typography
                      variant="body1"
                      fontSize="18px"
                      fontWeight={"medium"}
                      color="white"
                    >
                      {item}
                    </Typography>
                  </span>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} xl={6} height="100%">
          <Box
            px={4.5}
            pt={7.5}
            pb={3.5}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            {activeTab === "login" ? (
              <Login setActiveTab={setActiveTab} activeTab={activeTab} />
            ) : activeTab === "signup" ? (
              <Signup setActiveTab={setActiveTab} />
            ) : null}
            <Divider
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "grey.500",
                "&::before": {
                  borderColor: "grey.200",
                },
                "&::after": {
                  borderColor: "grey.200",
                },
              }}
            >
              OR
            </Divider>
            <Box display="flex" gap={2} width="100%" mt={2}>
              {data.bottom.map((item, index) => (
                <Button
                  flexBasis="50%"
                  icon={item.icon}
                  text={item.text}
                  key={index}
                />
              ))}
            </Box>
            <Box display="flex" flexGrow={1} alignItems={"end"}>
              <Typography
                variant="caption"
                color="grey.700"
                fontWeight="medium"
                fontSize="12.5px"
                sx={{
                  "& a": {
                    color: "grey.700",
                  },
                }}
              >
                By joining, you agree to the Fiverr{" "}
                <Link to="/join">Terms of Service</Link> and to occasionally
                receive emails from us. Please read our{" "}
                <Link to="/join">Privacy Policy</Link> to learn how we use your
                personal data.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupLoginBox;
