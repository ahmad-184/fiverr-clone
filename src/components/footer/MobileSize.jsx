import { Box, List } from "@mui/material";

import footerData from "../../constants/footer";
import Dropdown from "./Dropdown";

const MobileSize = () => {
  return (
    <Box dipsplay="flex" flexDirection="column" gap={2.3}>
      <List
        sx={{
          width: "100%",
        }}
      >
        {footerData.map((item, index) => (
          <Dropdown key={index} title={item.title} content={item.content} />
        ))}
      </List>
    </Box>
  );
};

export default MobileSize;
