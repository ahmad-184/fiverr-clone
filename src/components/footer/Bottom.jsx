import { Box, Typography, useTheme, IconButton } from "@mui/material";

import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import AccessibilityIcon from "@mui/icons-material/AccessibilityRounded";

import icons from "../../assets/images/icons";

const Bottom = () => {
  const theme = useTheme();

  return (
    <Box
      pt={2}
      pb={1}
      display="flex"
      flexDirection="column"
      alignItems="top"
      gap={1.3}
      mt={1}
      sx={{
        [theme.breakpoints.up("sm")]: {
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
        },
        [theme.breakpoints.up("md")]: {
          justifyContent: "space-between",
        },
      }}
    >
      <Box
        textAlign="center"
        sx={{
          "& svg": { width: 77, height: 31 },
          [theme.breakpoints.up("sm")]: {
            display: "flex",
            gap: 3,
            alignItems: "center",
          },
        }}
      >
        <div>
          <svg
            width="91"
            height="27"
            viewBox="0 0 91 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#7A7D85">
              <path d="m82.9 13.1h-3.2c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-13.4h-2.6c-2.1 0-3.2 1.5-3.2 4.1v9.3h-6.1v-18.4h6.1v2.8c1-2.2 2.4-2.8 4.4-2.8h7.4v2.8c1-2.2 2.4-2.8 4.4-2.8h2v5zm-25.6 5.6h-12.6c.3 2.1 1.6 3.2 3.8 3.2 1.6 0 2.8-.7 3.1-1.8l5.4 1.5c-1.3 3.2-4.6 5.1-8.5 5.1-6.6 0-9.6-5.1-9.6-9.5 0-4.3 2.6-9.4 9.2-9.4 7 0 9.3 5.2 9.3 9.1 0 .9 0 1.4-.1 1.8zm-5.9-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3.1.8-3.4 3zm-23.1 11.3h5.3l6.7-18.3h-6.1l-3.2 10.7-3.4-10.8h-6.1zm-24.9 0h6v-13.4h5.7v13.4h6v-18.4h-11.6v-1.1c0-1.2.9-2 2.3-2h3.5v-5h-4.4c-4.5 0-7.5 2.7-7.5 6.6v1.5h-3.4v5h3.4z"></path>
            </g>
            <g fill="#7A7D85">
              <path d="m90.4 23.3c0 2.1-1.6 3.7-3.8 3.7s-3.8-1.6-3.8-3.7 1.6-3.7 3.8-3.7c2.2-.1 3.8 1.5 3.8 3.7zm-.7 0c0-1.8-1.3-3.1-3.1-3.1s-3.1 1.3-3.1 3.1 1.3 3.1 3.1 3.1 3.1-1.4 3.1-3.1zm-1.7.8.1.9h-.7l-.1-.9c0-.3-.2-.5-.5-.5h-.8v1.4h-.7v-3.5h1.4c.7 0 1.2.4 1.2 1.1 0 .4-.2.6-.5.8.4.1.5.3.6.7zm-1.9-1h.7c.4 0 .5-.3.5-.5 0-.3-.2-.5-.5-.5h-.7z"></path>
            </g>
          </svg>
        </div>
        <Typography variant="body2" color="grey.500" fontWeight="medium">
          &copy; Fiverr International Ltd. 2023
        </Typography>
      </Box>
      <Box
        display="flex"
        gap={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          [theme.breakpoints.up("sm")]: {
            justifyContent: "space-between",
            flexDirection: "row",
            gap: 2.5,
          },
        }}
      >
        <Box display="flex" gap={1.4} alignItems="center">
          {icons.map((item, index) => (
            <IconButton key={index}>
              <img style={{ width: 21 }} src={item.icon} alt={item.alt} />
            </IconButton>
          ))}
          <IconButton>
            <svg
              width="21px"
              fill="#74767e"
              viewBox="0 0 300 300"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
            </svg>
          </IconButton>
        </Box>
        <Box display="flex" gap={0.5} alignItems="center">
          <IconButton
            sx={{
              fontSize: "14.5px",
              fontWeight: "bold",
              borderRadius: "30px",
              px: 1.5,
              "&:hover": {
                color: "grey.800",
              },
            }}
          >
            <LanguageIcon sx={{ fontSize: "16px", mr: 0.7 }} />
            <span style={{ fontFamily: "macan" }}>English</span>
          </IconButton>
          <IconButton
            sx={{
              fontSize: "14.5px",
              fontWeight: "bold",
              borderRadius: "30px",
              mr: 0.4,
              px: 1.5,
              "&:hover": {
                color: "grey.800",
              },
            }}
          >
            <AttachMoneyRoundedIcon sx={{ fontSize: "16px", mr: 0.2 }} />
            <span style={{ fontFamily: "macan" }}>USD</span>
          </IconButton>
          <IconButton
            sx={{
              padding: 0.5,
              outline: "1px solid",
              outlineColor: "grey.500",
              height: "fit-content",
              "&:hover": {
                outline: "none",
                color: "grey.800",
              },
            }}
          >
            <AccessibilityIcon sx={{ fontSize: "23px" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Bottom;
