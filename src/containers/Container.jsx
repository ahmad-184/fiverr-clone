import { Box } from "@mui/material";

const Container = ({ children, ...props }) => {
  return (
    <Box px="1.8rem" width="100%" height="100%" {...props}>
      {children}
    </Box>
  );
};

export default Container;
