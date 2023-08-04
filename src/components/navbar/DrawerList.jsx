import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import {
  categories,
  exploreLinks,
  languages,
  businessSolutions,
} from "../../constants/navbar";
import { Box, Divider, Typography } from "@mui/material";

export default function DrawerList() {
  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [exploreListOpen, setExploreListOpen] = useState(false);
  const [languagesListOpen, setLanguagesListOpen] = useState(false);
  const [businessSolutionsOpen, setBusinessSolutionsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(0);

  const handleOpenCategoryList = () => setCategoryListOpen((prev) => !prev);
  const handleOpenExploreList = () => setExploreListOpen((prev) => !prev);
  const handleOpenBusinessSolutions = () =>
    setBusinessSolutionsOpen((prev) => !prev);
  const handleOpenLanguagesList = () => setLanguagesListOpen((prev) => !prev);

  const handleChangeLanguage = (i) => setSelectedLang(i);

  return (
    <Box
      sx={{
        "& .MuiButtonBase-root": {
          paddingLeft: "0 ",
          backgroundColor: "transparent !important",
          transition: "0.2s all ease-in-out",
          color: "grey.700",
          paddingY: "4.5px",
          "& .css-i5j5ye-MuiTypography-root": {
            fontWeight: "medium",
          },
        },
      }}
    >
      <List
        sx={{
          width: "100%",
          mb: "2rem",
          bgcolor: "background.paper",
        }}
        component="nav"
      >
        <ListItemButton disableRipple>
          <ListItemText primary="Sign in" />
        </ListItemButton>
        <ListItemButton disableRipple onClick={handleOpenCategoryList}>
          <ListItemText primary="Browser categories" />
          {categoryListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={categoryListOpen} timeout="auto" unmountOnExit>
          {categories.map((item, index) => (
            <List component="div" disablePadding key={index}>
              <ListItemButton
                disableRipple
                sx={{ pl: `16px !important`, paddingY: "5px" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>

        <ListItemButton disableRipple onClick={handleOpenExploreList}>
          <ListItemText primary="Explore" />
          {exploreListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={exploreListOpen} timeout="auto" unmountOnExit>
          {exploreLinks.map((item, index) => (
            <List component="div" disablePadding key={index}>
              <ListItemButton
                disableRipple
                sx={{ pl: `16px !important`, paddingY: "5px" }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>

        <ListItemButton disableRipple onClick={handleOpenBusinessSolutions}>
          <ListItemText
            primary="Business solutions"
            sx={{
              "& .css-i5j5ye-MuiTypography-root": {
                fontWeight: "bold !important",
                color: "grey.800",
              },
            }}
          />
          {businessSolutionsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={businessSolutionsOpen} timeout="auto" unmountOnExit>
          {businessSolutions.map((item, index) => (
            <List component="div" disablePadding key={index}>
              <ListItemButton
                disableRipple
                sx={{
                  pl: `16px !important`,
                  paddingY: "5px",
                  textTransform: "capitalize",
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>

        <ListItemButton disableRipple>
          <ListItemText
            primary="Fiverr Business"
            sx={{ color: "primary.main" }}
          />
        </ListItemButton>
      </List>
      <Typography variant="body1" fontWeight="bold">
        General
      </Typography>
      <Divider sx={{ my: 1.5 }} />
      <List
        sx={{
          width: "100%",
          mb: "2.5rem",
          bgcolor: "background.paper",
        }}
        component="nav"
      >
        <ListItemButton disableRipple>
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton disableRipple onClick={handleOpenLanguagesList}>
          <ListItemText
            primary={
              <Box display="flex" gap={1} alignItems="center">
                <Typography variant="body1" fontWeight="medium">
                  {languages[selectedLang]}
                </Typography>
                <LanguageIcon
                  sx={{
                    color: "grey.500",
                    fontSize: "18px",
                    position: "relative",
                  }}
                />
              </Box>
            }
          />
          {languagesListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={languagesListOpen} timeout="auto" unmountOnExit>
          {languages.map((item, index) => (
            <List
              component="div"
              disablePadding
              key={index}
              onClick={() => handleChangeLanguage(index)}
            >
              <ListItemButton
                disableRipple
                sx={{
                  pl: `20px !important`,
                  paddingY: "5px",
                  position: "relative",
                }}
              >
                {selectedLang === index && (
                  <CheckRoundedIcon
                    sx={{
                      fontSize: "14px",
                      position: "absolute",
                      left: 0,
                      top: "37%",
                    }}
                  />
                )}
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          ))}
        </Collapse>

        <ListItemButton disableRipple>
          <ListItemText
            primary={
              <Box display="flex" alignItems="center">
                <AttachMoneyRoundedIcon
                  sx={{
                    color: "grey.600",
                    fontSize: "19px",
                    position: "relative",
                    left: -4.5,
                  }}
                />
                <Typography variant="body1" fontWeight="medium">
                  USD
                </Typography>
              </Box>
            }
          />
        </ListItemButton>
      </List>
    </Box>
  );
}
