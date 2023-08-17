import { useState, useEffect } from "react";

import { Box, Typography, Avatar, useTheme } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import { headerBackgroundData } from "../../../constants/home";

const HeaderBg = () => {
  const [activeBg, setActiveBg] = useState(2);
  const theme = useTheme();
  const bg_length = headerBackgroundData.length;

  // useEffect(() => {
  //   let timer;
  //   timer = setTimeout(() => {
  //     setActiveBg((activeBg + 1) % bg_length);
  //   }, 7000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [activeBg, bg_length]);

  return (
    <Box
      position="absolute"
      inset="0"
      top="0"
      left="0"
      right="0"
      bottom="0"
      backgroundColor="#0a4226"
      zIndex="1"
      display={{
        xs: "none",
        sm: "none",
        md: "block",
        lg: "block",
        xl: "block",
      }}
      sx={{
        userSelect: "none",
      }}
    >
      {headerBackgroundData.map((item, index) => (
        <Box
          width="100%"
          height="100%"
          backgroundColor={item.background_color}
          key={index}
          position="absolute"
          inset="0"
          top="0"
          right="0"
          bottom="0"
          left="0"
          sx={{
            display: "flex",
            justifyContent: "end",
            opacity: index === activeBg ? "1" : "0",
            transition: "opacity .9s",
            padding: "0 32px 32px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            alignItems: "end",
            [theme.breakpoints.up("md")]: {
              backgroundImage: `url(${item.images._900})`,
              backgroundPosition: "65% 100%",
            },
            [theme.breakpoints.up("lg")]: {
              backgroundImage: `url(${item.images.full})`,
              backgroundPosition: "bottom",
            },
          }}
        >
          <Box
            backgroundColor="hsla(0,0%,100%,.14)"
            borderRadius={"50px"}
            border="1px solid hsla(0,0%,100%,.4)"
            padding="12px 24px 12px 12px"
            display="flex"
            gap={1.5}
            alignItems="center"
            boxShadow="0 20px 30px 0 rgba(0,37,19,.2)"
            sx={{
              backdropFilter: "blur(30px)",
            }}
          >
            <Avatar
              src={item.avatar}
              alt={item.name}
              sx={{ width: 40, height: 40 }}
            />
            <Box display="flex" flexDirection="column">
              <Box display="flex" justifyContent="space-between">
                <Typography variant="caption" fontWeight="medium" color="white">
                  {item.name}
                </Typography>
                <Box display="flex" gap={0.1} alignItems="center">
                  <Typography variant="caption" color="white" fontWeight="bold">
                    {item.star}
                  </Typography>
                  <StarIcon sx={{ fontSize: "13px", color: "white" }} />
                </Box>
              </Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="white"
                lineHeight="1.1"
              >
                {item.job}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HeaderBg;
