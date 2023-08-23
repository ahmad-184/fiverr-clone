import { Box, Typography, useTheme } from "@mui/material";
import Button from "../Button";
import { data } from "../data";

const Login = ({ setActiveTab, activeTab }) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column">
      <Box mb={6}>
        <Typography
          sx={{
            [theme.breakpoints.down("sm")]: {
              fontSize: "24px",
            },
            [theme.breakpoints.down("md")]: {
              "& span": {
                color: "#ff62ad",
              },
            },
            [theme.breakpoints.up("sm")]: {
              fontSize: "29px",
            },
            [theme.breakpoints.up("md")]: {
              fontSize: "24px",
              "& span": {
                color: "grey.900",
              },
            },
          }}
          variant="h5"
          color="grey.900"
          fontWeight="bold"
          mb={1}
        >
          <span>Sign</span> in to your account
        </Typography>
        <Typography
          sx={{
            "& span": {
              color: "grey.900",
              textDecoration: "underline",
              cursor: "pointer",
            },
          }}
          variant="body1"
          color="grey.700"
          fontWeight="medium"
        >
          Don’t have an account?{" "}
          <span onClick={() => setActiveTab("signup")}>Join here</span>
        </Typography>
      </Box>
      <Box mb={1}>
        {data.top.map((item, index) => (
          <Button
            icon={item.icon}
            text={
              index === 1 && activeTab === "login"
                ? "Continue with email/username"
                : item.text
            }
            key={index}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Login;
