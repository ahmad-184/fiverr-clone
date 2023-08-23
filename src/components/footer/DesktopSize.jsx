import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import footerData from "../../constants/footer";

const DesktopSize = () => {
  const theme = useTheme();

  return (
    <Box pt={5}>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        sx={{
          [theme.breakpoints.up("sm")]: {
            mt: 1,
          },
          [theme.breakpoints.up("md")]: {
            justifyContent: "space-between",
          },
        }}
      >
        {footerData.map(({ title, content }, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection="column"
            gap={2}
            width="33%"
            mb={5}
            sx={{
              "& a": {
                color: "grey.600",
                textDecoration: "none",
                fontWeight: "500",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
              [theme.breakpoints.up("md")]: {
                width: "20%",
                px: 1,
              },
            }}
          >
            <Typography fontWeight="bold" color="grey.800" variant="body1">
              {title}
            </Typography>
            {content.map((item, index) => (
              <Link to={"/"} key={index}>
                <span>{item.primary}</span>
                {item.secondary && (
                  <>
                    <br />
                    <span style={{ fontSize: "14px", color: "#9e9e9e" }}>
                      {item.secondary}
                    </span>
                  </>
                )}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DesktopSize;
