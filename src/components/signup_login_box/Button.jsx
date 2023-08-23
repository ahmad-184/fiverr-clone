import { Box, Typography, useTheme } from "@mui/material";

const Button = ({ icon, text, ...props }) => {
  const theme = useTheme();
  return (
    <Box
      {...props}
      position="relative"
      borderRadius={1}
      mb={1.5}
      borderColor=""
      p="13px 25px"
      sx={{
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "grey.300",
        userSelect: "none",
        "&:hover": {
          backgroundColor: "grey.100",
        },
        "& img": {
          width: "18.3px",
          height: "18.3px",
        },
      }}
    >
      <img src={icon} alt="sign in with google" />
      <Typography
        sx={{ display: "flex", flexGrow: "1", justifyContent: "center" }}
        variant="body1"
        fontWeight="bold"
        color="grey.800"
        textAlign="center"
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Button;
