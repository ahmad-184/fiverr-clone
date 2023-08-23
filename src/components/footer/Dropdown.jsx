import { useState } from "react";
import {
  Box,
  Collapse,
  ListItemText,
  ListItemButton,
  List,
} from "@mui/material";
import { Link } from "react-router-dom";

import ExpandMore from "@mui/icons-material/ExpandMoreRounded";
import ExpandLess from "@mui/icons-material/ExpandLessRounded";

const Dropdown = ({ title, content }) => {
  const [axpanded, setExpanded] = useState(false);
  const handleOpen = () => setExpanded((prev) => !prev);

  return (
    <Box
      sx={{
        "& .MuiButtonBase-root": {
          px: "0",
          py: "4.5px",
          backgroundColor: "transparent !important",
        },
        "& .MuiListItemText-root": {
          "& .MuiListItemText-primary": {
            fontWeight: "bold",
            color: "grey.800",
          },
        },
      }}
    >
      <ListItemButton disableRipple onClick={handleOpen}>
        <ListItemText primary={title} />
        {axpanded ? (
          <ExpandLess sx={{ color: "grey.700" }} />
        ) : (
          <ExpandMore sx={{ color: "grey.700" }} />
        )}
      </ListItemButton>
      <Collapse in={axpanded} timeout="auto" unmountOnExit>
        {content.map((item, index) => (
          <List component="div" disablePadding key={index}>
            <ListItemButton
              disableRipple
              sx={{
                pl: `6px !important`,
                paddingY: "5px",
                backgroundColor: "transparent !important",
                "& .MuiListItemText-root": {
                  "& .MuiListItemText-primary": {
                    "& a": {
                      fontWeight: "500 !important",
                      color: "grey.600",
                      textDecoration: "none",
                    },
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  },
                },
              }}
            >
              <ListItemText
                primary={
                  <Link to="/">
                    {item.primary}
                    {item.secondary && (
                      <>
                        <br />
                        <span style={{ fontSize: "14px", color: "#9e9e9e" }}>
                          {item.secondary}
                        </span>
                      </>
                    )}
                  </Link>
                }
              />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </Box>
  );
};

export default Dropdown;
